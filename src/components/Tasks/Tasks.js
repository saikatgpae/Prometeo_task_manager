/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import './Tasks.css';
import AddTasks from '../AddTasks/AddTasks';
import Task from '../Task/Task';

export default function Tasks() {

  // Call the tasks from Redux
    const tasks = JSON.parse(useSelector((state) => state.tasks));

  return (
    <>
      <AddTasks />
      <Task tasks={tasks}/>
    </>
  );
}
