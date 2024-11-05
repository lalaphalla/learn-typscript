import { ReactNode } from 'react';

export interface TaskProps {
  id: number;
  title: string;
  onDelete: (id: number) => void;
  children: ReactNode;
}

export const Task = ({ id, title, onDelete, children }: TaskProps) => {
  return (
    <div data-id={id}>
      <h2>{title}</h2>
      <p>{children}</p>
      <button onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
};
