import { FormEvent, useRef } from 'react';
export type Task = {
  id: number;
  title: string;
  description: string;
};

interface NewTaskProps {
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}
export const NewTask = ({ setTasks }: NewTaskProps) => {
  const task = useRef<HTMLInputElement>(null);
  const description = useRef<HTMLInputElement>(null);

  const addTask = (newTask: Task) => {
    // console.log(newTask);
    // const existingTask: Task[] = JSON.parse(
    //   localStorage.getItem('tasks') || '[]'
    // );
    // tasks.push(newTask);

    // localStorage.setItem('tasks', JSON.stringify(existingTask));

    setTasks((prevTasks) => {
      const updatedTask = [...prevTasks, newTask];
      localStorage.setItem('tasks', JSON.stringify(updatedTask));
      return updatedTask;
    });
  };
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const inputTask = task.current!.value;
    const inputDescription = description.current!.value;
    const newTask: Task = {
      id: Math.random(),
      title: inputTask,
      description: inputDescription,
    };
    addTask(newTask);
  };

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor="task">task</label>
        <input type="text" id="task" ref={task} />
      </p>
      <p>
        <label htmlFor="description">description</label>
        <input type="text" id="description" ref={description} />
      </p>
      <button>Add Task</button>
    </form>
  );
};
