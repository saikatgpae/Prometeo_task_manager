/* eslint-disable */
import React, { useState } from 'react';

export default function AddTasks() {
  const [inputs, setInputs] = useState({ complete: false });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleClick = () => {
    const prevValue = JSON.parse(localStorage.getItem('tasks'));
    const newValue = [...prevValue, inputs]
    console.log(newValue);
    localStorage.setItem('tasks', JSON.stringify(newValue));
    window.location.reload();
  };

  return (
    <div>
        <label htmlFor="newTask">
          Add a New task
          <br />
          <input
            type="text"
            placeholder="Add a new Task"
            name="taskName"
            onChange={handleChange}
            // value={inputs.name || ''}
          />
        </label>
        <button onClick={handleClick} type="button" className="btn btn-primary">Add</button>
    </div>
  );
}
