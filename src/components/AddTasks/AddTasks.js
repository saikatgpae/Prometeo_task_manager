// /* eslint-disable */
import React, { useState } from 'react';

export default function AddTasks() {
  const [inputs, setInputs] = useState();

  // Handle the Input data change
  const handleChange = (event) => {
    setInputs(event.target.value);
  };

  // Handle the Add button click
  const handleClick = () => {
    const prevValue = JSON.parse(localStorage.getItem('tasks'));
    if (prevValue === null) {
      const newValue = JSON.stringify([{ complete: false, taskName: inputs }]);
      localStorage.setItem('tasks', newValue);
    } else {
      const newValue = [...prevValue, { complete: false, taskName: inputs }];
      localStorage.setItem('tasks', JSON.stringify(newValue));
    }
    window.location.reload();
  };

  return (
    <div className="m-3">
      <label htmlFor="taskName">
        Add a New task
        <br />
        <input
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
