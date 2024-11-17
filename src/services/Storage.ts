import { Task } from '../models/Task';

export interface IStorage {
  save(tasks: Task[]): void;
  load(): Task[];
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
