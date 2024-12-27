import { useEffect, useState } from 'react';

import Header from './components/Header.tsx';
import CourseGoal from './components/CourseGoal.tsx';
import goalImg from './assets/goals.jpg';
// import { Task as TaskType } from './components/NewTask.tsx';
import { NewTask, Task } from './components/NewTask.tsx';
import { TaskList } from './components/TaskList.tsx';
import { TaskManager } from './services/TaskManager.ts';
import { Task as TaskModel } from './models/Task.ts';
import { Human, SadState } from './models/Human.ts';
import { LocalStorage, SupabaseStorage } from './services/Storage.ts';
import UserCard from './components/UserCard.tsx';
import UserCardComponent from './components/UserCardComponent.tsx';
import DogImagesContainter from './components/DogImagesContainer.tsx';
import TaskListComponent from './components/TaskListComponent.tsx';

export type CourseGoal = {
  title: string;
  description: string;
  id: number;
};

export default function App() {
  const [tasks, setTasks] = useState<TaskModel[]>([]);
  const [task, setTask] = useState<TaskModel>();
  const [isEdit, setIsEdit] = useState(false);
  const taskManager = new TaskManager(new SupabaseStorage());
  // const taskManager = new TaskManager(new LocalStorage());

  const loadTasks = async () => {
    const loadedTasks = await taskManager.loadTasks();
    console.log(loadedTasks, 'loadTasks');
    setTasks(loadedTasks);
  };
  const deleteTask = async (id: number) => {
    await taskManager.deleteTask(id);
    // setTasks(loadedTasks);
  };

  useEffect(() => {
    // setTasks(taskManager.loadTasks())
    // setTasks(JSON.parse(localStorage.getItem('tasks') || '[]'));
    // loadTasks();
  }, []);

  const handleAddTask = (title: string, description: string) => {
    console.log(tasks);
    taskManager.addTask(title, description);
    loadTasks();
    // setTasks(taskManager.loadTasks())

    h1.changeState(new SadState());

    console.log(h1.think(), h1.action());
    // console.log(taskManager.addTask(title, description))
  };
  const handleDeleteTask = (id: number) => {
    deleteTask(id);
    loadTasks();
    // setTasks(taskManager.deleteTask(id))
  };
  const handleUpdateTask = async (updateTask: Task) => {
    setIsEdit(true);
    setTask(updateTask);
    console.log(updateTask);
    // await taskManager.updateTask(task.id, task.title, task.description);

    loadTasks()
    // setTasks(taskManager.deleteTask(id))
  };

  const handleDelete = (id: number) => {
    // setTasks((prev) => {
    //   const updatedTask = prev.filter((task) => task.id !== id);
    //   localStorage.setItem('tasks', JSON.stringify(updatedTask));
    //   return updatedTask;
    // });
  };
  const handleMessageClick = () => {
    console.log('Message clicked');
  };

  const h1 = new Human();
  const sok = { name: 'sok', email: 'sok@gmail.com' };
  console.log(h1.think());
  return (
    <main>
      <Header image={{ src: goalImg, alt: 'A list of golas' }}>
        <h1>Task List</h1>
      </Header>
      {/* <NewTask taskProp={isEdit ? task : null} onAddTask={handleAddTask} /> */}
      {/* <NewTask setTasks={setTasks} /> */}
      <form>
        <button onClick={() => taskManager.deleteAllTask()}>Delete all</button>
      </form>
      {/* <TaskList
        tasks={tasks}
        onDeleteTask={handleDeleteTask}
        onUpdateTask={handleUpdateTask}
      />
       */}
       <TaskListComponent />
      <UserCard user={sok} onMessageClick={handleMessageClick} />
      <UserCardComponent />
      <DogImagesContainter />
    </main>
  );
}
