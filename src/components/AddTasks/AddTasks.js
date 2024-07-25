// /* eslint-disable */
import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchTasks } from '../../Redux/Tasks/tasksRedux';

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
    const prevValue = JSON.parse(localStorage.getItem('tasks'));
    if (prevValue === null) {
      const newValue = [{ complete: false, taskName: inputs }];
      localStorage.setItem('tasks', JSON.stringify(newValue));
    } else {
      const newValue = [...prevValue, { complete: false, taskName: inputs }];
      localStorage.setItem('tasks', JSON.stringify(newValue));
    }
    taskInput.current.value = '';
    dispatch(fetchTasks());
  };

  return (
    <div className="m-3">
      <label htmlFor="taskName">
        Add a New task
        <br />
        <input
          ref={taskInput}
          name="taskName"
          type="text"
          placeholder="Add a new Task"
          id="taskName"
          onChange={handleChange}
        />
      </label>
      <button onClick={handleClick} type="button" className="btn btn-primary" disabled={(!inputs || inputs[0] === ' ')}>Add</button>
    </div>
  );
}
