import { useState } from 'react';

import Header from './components/Header.tsx';
import CourseGoal from './components/CourseGoal.tsx';
import CourseGoalList from './components/CourseGoalList.tsx';
import goalImg from './assets/goals.jpg';
import NewGoal from './components/NewGoal.tsx';

export type CourseGoal = {
  title: string;
  description: string;
  id: number;
};

export default function App() {
  const [goals, setGoals] = useState<CourseGoal[]>([]);

  const handleAddGoal = (goal: string, summary: string) => {
    setGoals((prev) => {
      const newGoal: CourseGoal = {
        id: Math.random(),
        title: goal,
        description: summary,
      };
      return [...prev, newGoal];
    });
  };
  const handleDeleteGoal = (id: number) => {
    console.log('delete');
    setGoals((prev) => prev.filter((goal) => goal.id !== id));
  };

  return (
    <main>
      <Header image={{ src: goalImg, alt: 'A list of golas' }}>
        <h1>Course Goal</h1>
      </Header>
      <NewGoal onAddGoal={handleAddGoal} />
      <CourseGoalList goals={goals} onDeleteGoal={handleDeleteGoal} />
      {/* <button onClick={handleAddGoal}>Add Goal</button> */}
    </main>
  );
}
