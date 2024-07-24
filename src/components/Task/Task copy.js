/* eslint-disable */
import React, { useRef, useState } from 'react';
import uuid from 'react-uuid';
import './Task.css';

export default function Task(prop) {
//   const [editor, setEditor] = useState(false);
  const [updatedInput, setUpdatedInput] = useState();
  const [taskID, setTaskID] = useState();
  const checkBoxRef = useRef(null);
  const taskNameRef = useRef(null);
  const {
    tasks,
  } = prop;

  const viewMode = {};
  const editMode = {};

  //   Edit button clicked
  const handleEditClick = (e) => {
    e.preventDefault();
    e.target.classList.add('none');
    e.target.previousSibling.previousSibling.classList.add('none');
    e.target.nextSibling.classList.remove('none');
    e.target.previousSibling.classList.remove('none');
  };
  //   Save button clicked
  const handleSaveClick = (e) => {
    e.preventDefault();
    e.target.classList.add('none');
    e.target.previousSibling.classList.remove('none');
    e.target.previousSibling.previousSibling.classList.add('none');
    e.target.previousSibling.previousSibling.previousSibling.classList.remove('none');
    console.log(e.target.id.split('-')[1]);
    console.log(taskNameRef.current.value);
  };

  //   Handle onchange of input form
  const handleChange = (e) => {
    console.log(e.target.value);
    // setUpdatedInput(e.target.value);
    // console.log(updatedInput);
  };

  return (
    <div>
      {
        (tasks)
          ? tasks.map((task, index) => (
            <ul style={{ listStyleType: 'none' }} className="d-flex justify-content-around" key={uuid()}>
              <label htmlFor={index}>
                complete?
                <input ref={checkBoxRef} style={{ accentColor: 'green' }} type="checkbox" defaultChecked={task.complete} id={index} />
              </label>
              <li style={viewMode}>{task.taskName}</li>
              <input id={`edit-${index}`} ref={taskNameRef} onChange={handleChange} className="none" style={editMode} type="text" defaultValue={task.taskName} />
              <button id={`edit-${index}`} style={viewMode} onClick={handleEditClick} type="button" className="btn btn-primary">Edit</button>
              <button id={`save-${index}`} style={editMode} onClick={handleSaveClick} type="button" className="none btn btn-primary">save</button>
              <button type="button" className="btn btn-danger">Delete</button>
            </ul>
          )) : <p>Do not hav a task? Add one.</p>
      }

    </div>
  );
}


