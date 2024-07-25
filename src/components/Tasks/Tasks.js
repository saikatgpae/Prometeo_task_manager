/* eslint-disable */
import { useDispatch, useSelector } from 'react-redux';
import './Tasks.css';
import AddTasks from '../AddTasks/AddTasks';
import Task from '../Task/Task';
import { useEffect, useState } from 'react';
import { fetchTasks } from '../../Redux/Tasks/tasksRedux';
// import { useEffect, useState } from 'react';

export default function Tasks() {
    const dispatch = useDispatch();
  // Call the tasks from Redux
const tasks = useSelector((state) => state.tasks);
console.log(tasks);
// console.log(JSON.parse(tasks));
  

    useEffect(() => {
        if (tasks === null) {
          dispatch(fetchTasks());
        }
      }, [dispatch, tasks]);

  return (
    <>
      <AddTasks />
      <Task tasks={tasks} />
      {/* {
        (tasks) ?
        tasks.map((task, index) => <p key={`task${index}`}>{task.taskName}</p>) : <p>No task</p>
      } */}
    </>
  );
}
