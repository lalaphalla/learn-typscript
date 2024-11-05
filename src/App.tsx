import { useEffect, useState } from 'react';

import Header from './components/Header.tsx';
import CourseGoal from './components/CourseGoal.tsx';
import goalImg from './assets/goals.jpg';
import { Task as TaskType } from './components/NewTask.tsx';
import { NewTask } from './components/NewTask.tsx';
import { TaskList } from './components/TaskList.tsx';

export type CourseGoal = {
  title: string;
  description: string;
  id: number;
};

export default function App() {
  const [tasks, setTasks] = useState<TaskType[]>([]);
  useEffect(() => {
    setTasks(JSON.parse(localStorage.getItem('tasks') || '[]'));
  }, []);

  const handleDelete = (id: number) => {
    setTasks((prev) => {
      const updatedTask = prev.filter((task) => task.id !== id);
      localStorage.setItem('tasks', JSON.stringify(updatedTask));
      return updatedTask;
    });
  };
  return (
    <main>
      <Header image={{ src: goalImg, alt: 'A list of golas' }}>
        <h1>Task List</h1>
      </Header>
      <NewTask setTasks={setTasks} />

      <TaskList tasks={tasks} onDeleteTask={handleDelete} />
    </main>
  );
}
