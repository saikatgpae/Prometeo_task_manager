import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../../Redux/Tasks/tasksRedux';
import './AddTasks.css';

export default function AddTasks() {
  const [inputs, setInputs] = useState('');
  const dispatch = useDispatch();
  const taskInput = useRef(null);

  // Handle the Input data change
  const handleChange = (event) => {
    setInputs(event.target.value);
  };

  // Handle the Add button click
  const handleClick = () => {
    const task = { complete: false, taskName: inputs };
    dispatch(addTask(task));
    taskInput.current.value = '';
    setInputs('');
  };

  return (
    <div className="m-3">
      <input
        className="m-2 add-input p-2"
        ref={taskInput}
        name="taskName"
        type="text"
        placeholder="Add a Task"
        id="taskName"
        onChange={handleChange}
      />
      <button onClick={handleClick} type="button" className="btn btn-primary" disabled={(!inputs || inputs[0] === ' ')}>Add</button>
    </div>
  );
}
