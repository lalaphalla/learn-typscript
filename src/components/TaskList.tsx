import { Task as TaskType } from './NewTask';
import { Task } from './Task';
type TaskListProps = {
  tasks: TaskType[];
  onDeleteTask: (id: number) => void;
  onUpdateTask: (task: TaskType) => void;
};

export const TaskList = ({ tasks, onDeleteTask, onUpdateTask }: TaskListProps) => {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <Task title={task.title} onDelete={onDeleteTask} onUpdate={onUpdateTask} id={task.id}>
            {task.description}
          </Task>
        </li>
      ))}
    </ul>
  );
};
