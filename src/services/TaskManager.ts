import { Task } from '../models/Task';
import { IStorage, SupabaseStorage } from './Storage';

export class TaskManager {
  tasks: Promise<Task[]> | Task[];
  storage: IStorage;

  constructor(storage: IStorage) {
    this.storage = storage;
    this.tasks = this.storage.load();
  }

  async addTask(title: string, description: string): Promise<void> {
    const newTask = new Task(Date.now(), title, description);

    if (this.storage instanceof SupabaseStorage) {
      await this.storage.add(newTask);
    } else if (Array.isArray(this.tasks)) {
      this.tasks.push(newTask);
      console.log(newTask);
      this.storage.save(this.tasks);
    }
    // this.saveTasks();
    // return this.tasks;
  }
  async updateTask(id: number, title: string, description: string): Promise<void> {
    const newTask = new Task(id, title, description);

    if (this.storage instanceof SupabaseStorage) {
      await this.storage.update(newTask);
    } else if (Array.isArray(this.tasks)) {
      this.tasks.push(newTask);
      console.log(newTask);
      this.storage.save(this.tasks);
    }
    // this.saveTasks();
    // return this.tasks;
  }

  // Delete a task by ID
  async deleteTask(id: number): Promise<void> {
    if (this.storage instanceof SupabaseStorage) {
      await this.storage.delete(id); // Call delete for Supabase
    } else if (Array.isArray(this.tasks)) {
      this.tasks = this.tasks.filter((task) => task.id !== id); // For LocalStorage
      this.storage.save(this.tasks); // Save the updated list
    }
  }

  // deleteTask(id: number) {
  //   this.tasks = this.tasks.filter((task) => task.id !== id);
  //   this.storage.save(this.tasks);
  //   return this.tasks;
  // }

  async loadTasks(): Promise<Task[]> {
    const tasks = await this.storage.load();
    return tasks;
    // return  this.tasks.map((task: Task) => new Task(task.id, task.title, task.description))
  }
  // deleteAllTask(){
  //   localStorage.setItem('tasks',JSON.stringify([]));
  // }
  // saveTasks(){
  //   localStorage.setItem('tasks',JSON.stringify(this.tasks));
  // }
}
