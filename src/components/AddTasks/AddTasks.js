// /* eslint-disable */
import React, { useState } from 'react';

export default function AddTasks() {
  const [inputs, setInputs] = useState();

  // Input data change
  const handleChange = (event) => {
    const { value } = event.target;
    setInputs(() => (value));
  };

  // Handle the button click
  const handleClick = () => {
    const prevValue = JSON.parse(localStorage.getItem('tasks'));
    // console.log(prevValue);
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
    <div>
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
      {
        (!inputs || inputs[0] === ' ')
          ? <button onClick={handleClick} type="button" className="btn btn-primary" disabled>Add</button>
          : <button onClick={handleClick} type="button" className="btn btn-primary">Add</button>
      }
    </div>
  );
}
