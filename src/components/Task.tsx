import { ReactNode } from 'react';
import { Task as TaskType } from '../components/NewTask';

export interface TaskProps {
  id: number;
  title: string;
  onDelete: (id: number) => void;
  onUpdate: (task: TaskType) => void;
  children: ReactNode;
}

export const Task = ({
  id,
  title,
  onDelete,
  onUpdate,
  children,
}: TaskProps) => {
  const task: TaskType = { id, title, description: String(children) || '' };
  return (
    <div data-id={id}>
      <h2>{title}</h2>
      <p>{children}</p>

      <button onClick={() => onUpdate(task)}>Edit</button>
      <button onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
};
