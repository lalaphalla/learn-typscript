import { useEffect, useState } from 'react';
import { TaskManager } from '../services/TaskManager';
import { SupabaseStorage } from '../services/Storage';
import { Task } from './NewTask';
import { TaskList } from './TaskList';

const TaskListComponent = () => {
  const taskManager = new TaskManager(new SupabaseStorage());
  const [tasks, setTasks] = useState<Task[] | null>(null);
  useEffect(() => {
    const fetchTasks = async () => {
      console.log('fetching tasks...');
      const data = await taskManager.loadTasks();
      setTasks(data);
    };
    fetchTasks();
  }, []);
  const handleDelete = async (id: number) => {
    await taskManager.deleteTask(id);
  };
  const handleUpdate = async (task: Task) => {
    // await taskManager.updateTask({...task});
    console.log(task);
  };
  return tasks ? (
    <TaskList
      tasks={tasks}
      onDeleteTask={handleDelete}
      onUpdateTask={handleUpdate}
    />
  ) : (
    <p>No tasks available</p>
  );
};

export default TaskListComponent;
