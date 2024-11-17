import { Task } from "../models/Task";
import { IStorage } from "./Storage";

export class TaskManager {
  tasks: Task[];
  storage: IStorage;

  constructor(storage: IStorage){
    this.storage = storage;
    this.tasks = this.storage.load();
  }

  addTask(title: string, description: string){
    const newTask = new Task(Date.now(), title, description)
    this.tasks.push(newTask);
    console.log(newTask)
    this.storage.save(this.tasks)
    // this.saveTasks();
    return this.tasks;
  }

  deleteTask(id:number){
    this.tasks = this.tasks.filter((task)=> task.id!== id);
    this.saveTasks();
    return this.tasks;
  }

  loadTasks(): Task[]{
    return  this.tasks.map((task: Task) => new Task(task.id, task.title, task.description))
  }
  // deleteAllTask(){
  //   localStorage.setItem('tasks',JSON.stringify([]));  
  // }
  // saveTasks(){
  //   localStorage.setItem('tasks',JSON.stringify(this.tasks));
  // }

}