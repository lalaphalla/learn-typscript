import { supabase } from '../database/supabaseClient';
import { Task } from '../models/Task';

export interface IStorage {
  save(tasks?: Task[]): void;
  load(): Promise<Task[]> | Task[];
  deleteAll(): void;
}

export class LocalStorage implements IStorage {
  private storageKey = 'tasks';

  save(tasks: Task[]): void {
    localStorage.setItem(this.storageKey, JSON.stringify(tasks));
  }

  load(): Task[] {
    const tasksData = JSON.parse(localStorage.getItem(this.storageKey) || '[]');
    return tasksData;
  }

  deleteAll(): void {
    localStorage.removeItem(this.storageKey);
  }
}

export class SupabaseStorage implements IStorage {
  private tableName = 'tasks'; // Supabase table name
  save(): void {}
  async add(task: Task): Promise<void> {
    const { error } = await supabase.from(this.tableName).insert(task);
    if (error) {
      console.error('Error adding task to Supabase:', error.message);
      throw new Error('Failed to add task');
    }
  }
  async delete(taskId: number): Promise<void> {
    const { error } = await supabase
      .from(this.tableName)
      .delete()
      .eq('id', taskId);
    if (error) {
      console.error('Error deleting task from Supabase:', error.message);
      throw new Error('Failed to delete task');
    }
  }

  async update(task: Task): Promise<void> {
    const { error } = await supabase
      .from(this.tableName)
      .update({title: task.title, description: task.description})
      .eq('id', task.id);
    if (error) {
      console.error('Error deleting task from Supabase:', error.message);
      throw new Error('Failed to delete task');
    }
  }
  

  async load(): Promise<Task[]> {
    const { data, error } = await supabase.from('tasks').select();
    console.log('load', data);

    if (error) {
      console.error('Error loading tasks from Supabase:', error);
      throw new Error(error.message);
    }
    return data;
  }

  deleteAll(): void {
    // localStorage.removeItem(this.storageKey);
  }
}
