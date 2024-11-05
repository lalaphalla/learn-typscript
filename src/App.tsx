import { useEffect, useState } from 'react';

import Header from './components/Header.tsx';
import CourseGoal from './components/CourseGoal.tsx';
import goalImg from './assets/goals.jpg';
// import { Task as TaskType } from './components/NewTask.tsx';
import { NewTask } from './components/NewTask.tsx';
import { TaskList } from './components/TaskList.tsx';
import { TaskManager } from './services/TaskManager.ts';
import { Task as TaskModel } from './models/Task.ts'

export type CourseGoal = {
  title: string;
  description: string;
  id: number;
};




export default function App() {
  const [tasks, setTasks] = useState<TaskModel[]>([]);
  const taskManager = new TaskManager(tasks);
  useEffect(() => {
    // setTasks(taskManager.loadTasks())
    setTasks(JSON.parse(localStorage.getItem('tasks') || '[]'));
  }, []);

  const handleAddTask = (title: string, description: string) => {
    taskManager.addTask(title, description)
    setTasks(taskManager.loadTasks())
    // console.log(taskManager.addTask(title, description))
  };
  const handleDeleteTask = (id:number) => {
    setTasks(taskManager.deleteTask(id))
  };

  // const handleDelete = (id: number) => {
  //   setTasks((prev) => {
  //     const updatedTask = prev.filter((task) => task.id !== id);
  //     localStorage.setItem('tasks', JSON.stringify(updatedTask));
  //     return updatedTask;
  //   });
  // };
  return (
    <main>
      <Header image={{ src: goalImg, alt: 'A list of golas' }}>
        <h1>Task List</h1>
      </Header>
      <NewTask onAddTask={handleAddTask} />
      {/* <NewTask setTasks={setTasks} /> */}

      <TaskList tasks={tasks} onDeleteTask={handleDeleteTask} />
    </main>
  );
}
