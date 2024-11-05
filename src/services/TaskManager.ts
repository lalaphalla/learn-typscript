import { Task } from "../models/Task";

export class TaskManager {
  tasks: Task[];

  constructor(){
    this.tasks = this.loadTask();
  }

  addTask(title: string, description: string){
    const newTask = new Task(Date.now(), title, description)
    this.tasks.push(newTask);
    this.saveTasks();
    return this.tasks;
  }

  deleteTask(id:number){
    this.tasks = this.tasks.filter((task)=> task.id!== id);
    this.saveTasks();
    return this.tasks;
  }

  loadTasks(): Task[]{
    const tasksData = JSON.parse(localStorage.getItem('tasks') || '[]');
    return  tasksData.map((task: Task) => new Task(task.id, task.title, task.description))
  }
  saveTasks(){
    localStorage.setItem('tasks',JSON.stringify(this.tasks));
  }
}