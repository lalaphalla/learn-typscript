import { useEffect, useState } from 'react';

import Header from './components/Header.tsx';
import CourseGoal from './components/CourseGoal.tsx';
import CourseGoalList from './components/CourseGoalList.tsx';
import goalImg from './assets/goals.jpg';
import NewGoal from './components/NewGoal.tsx';
import { Task } from './components/Task.tsx';
import { Task as TaskType } from './components/NewTask.tsx';
import { NewTask } from './components/NewTask.tsx';
import { TaskList } from './components/TaskList.tsx';

export type CourseGoal = {
  title: string;
  description: string;
  id: number;
};

export default function App() {
  // const [goals, setGoals] = useState<CourseGoal[]>([]);

  // const handleAddGoal = (goal: string, summary: string) => {
  //   setGoals((prev) => {
  //     const newGoal: CourseGoal = {
  //       id: Math.random(),
  //       title: goal,
  //       description: summary,
  //     };
  //     return [...prev, newGoal];
  //   });
  // };
  // const handleDeleteGoal = (id: number) => {
  //   console.log('delete');
  //   setGoals((prev) => prev.filter((goal) => goal.id !== id));
  // };

  const [tasks, setTasks] = useState<TaskType[]>([]);
  useEffect(() => {
    setTasks(JSON.parse(localStorage.getItem('tasks') || '[]'));
  }, []);
  // const existTasks: TaskType[] = JSON.parse(
  //   localStorage.getItem('tasks') || '[]'
  // );

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

      {/* <button onClick={handleAddGoal}>Add Goal</button> */}
    </main>
  );
}
