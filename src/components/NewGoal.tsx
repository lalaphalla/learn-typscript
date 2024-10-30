import React, { FC, FormEvent, useRef } from 'react';
import { CourseGoal } from '../App';
type NewGoalProps = {
  onAddGoal: (goal: string, summary: string) => void;
}

export default function NewGoal({onAddGoal}: NewGoalProps) {
  const goal = useRef<HTMLInputElement>(null);
  const summary = useRef<HTMLInputElement>(null);
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const entered = goal.current!.value;
    const enteredSummary = summary.current!.value;
    onAddGoal(entered, enteredSummary);
  };
  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor="goal">goal</label>
        <input type="text" id="goal" ref={goal} />
      </p>
      <p>
        <label htmlFor="summary">Summary</label>
        <input type="text" ref={summary} name="summary" />
      </p>
      <button>Add Goal</button>
    </form>
  );
}
