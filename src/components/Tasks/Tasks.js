/* eslint-disable */
import React from 'react';
import { useSelector } from 'react-redux';
import './Tasks.css';
import AddTasks from '../AddTasks/AddTasks';

export default function Tasks() {
  const tasks = JSON.parse(useSelector((state) => state.tasks));
  return (
    <>
        <AddTasks /> 
      {
        (tasks)
          ? tasks.map((task) => (
            <ul style={{ listStyleType: 'none' }} className="d-flex justify-content-around" key={task.taskName}>
              <input style={{ accentColor: "green" }} type="checkbox" defaultChecked={task.complete} name='status' />
              <label htmlFor="status"> complete?</label>
              <li>{task.taskName}</li>
              <button type="button" className="btn btn-primary">Edit</button>
              <button type="button" className="btn btn-danger">Delete</button>
            </ul>
          )) : <p>No Task</p>
      }
    </>
  );
}
