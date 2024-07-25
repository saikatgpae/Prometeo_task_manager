// /* eslint-disable */
import { useSelector } from 'react-redux';
import './Tasks.css';
import AddTasks from '../AddTasks/AddTasks';
import Task from '../Task/Task';

export default function Tasks() {
  // Call the tasks from Redux
  const reduxStoreData = useSelector((state) => state.tasks);
  const tasks = JSON.parse(reduxStoreData);
  return (
    <>
      <AddTasks />
      <Task tasks={tasks} />
    </>
  );
}
