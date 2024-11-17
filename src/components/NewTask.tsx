import { FormEvent, useRef } from 'react';
export type Task = {
  id: number;
  title: string;
  description: string;
};

interface NewTaskProps {
  // setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
  taskProp: Task | null;
  onAddTask: (title: string, description: string) => void;
}
export const NewTask = ({ taskProp, onAddTask }: NewTaskProps) => {
  const task = useRef<HTMLInputElement>(null);
  const description = useRef<HTMLInputElement>(null);

  if (taskProp){
    task.current!.value = taskProp.title
    description.current!.value = taskProp.description
  }

  // const addTask = (newTask: Task) => {
  //   setTasks((prevTasks) => {
  //     const updatedTask = [...prevTasks, newTask];
  //     localStorage.setItem('tasks', JSON.stringify(updatedTask));
  //     return updatedTask;
  //   });
  // };
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const inputTask = task.current!.value;
    const inputDescription = description.current!.value;
    // const newTask: Task = {
    //   id: Math.random(),
    //   title: inputTask,
    //   description: inputDescription,
    // };
    onAddTask(inputTask, inputDescription);
  };
  const handleReset = ()=>{
    task.current!.value = ''
    description.current!.value = ''
    taskProp = null;
  }

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
      <button onClick={handleReset}>Reset</button>
    </form>
  );
};
