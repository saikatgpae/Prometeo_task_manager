// /* eslint-disable */
import React, { useState } from 'react';
import uuid from 'react-uuid';

export default function Task(prop) {
  const [editor, setEditor] = useState(false);
  const [button, setButton] = useState(false);
  const {
    tasks,
  } = prop;

  //   Edit button clicked
  const handleEditClick = () => {
    setEditor(true);
    setButton(true);
  };
  //   Save button clicked
  const handleSaveClick = () => {
    setEditor(false);
    setButton(false);
  };

  //   Handle Delete butoon click
  const handleDelete = (e) => {
    const localStore = JSON.parse(localStorage.getItem('tasks'));
    const indexNumber = Number(e.target.id.split('-')[1]);
    const newArrayAfterFilter = localStore.filter((element, index) => index !== indexNumber);
    localStorage.setItem('tasks', JSON.stringify(newArrayAfterFilter));
    window.location.reload();
  };

  return (
    <div>
      {
        (tasks)
          ? tasks.map((task, index) => (
            <ul style={{ listStyleType: 'none' }} className="d-flex justify-content-around" key={uuid()}>
              <label htmlFor={index}>
                complete?
                <input style={{ accentColor: 'green' }} type="checkbox" defaultChecked={task.complete} id={`status-${index}`} />
              </label>
              {
                (!editor)
                  ? (
                    <li>
                      {
                        task.taskName
                      }
                    </li>
                  )
                  : <input type="text" defaultValue={task.taskName} />
              }
              {
                (!button)
                  ? (
                    <button onClick={handleEditClick} type="button" className="btn btn-primary">Edit</button>
                  )
                  : <button onClick={handleSaveClick} type="button" className="btn btn-primary">save</button>
              }
              <button onClick={handleDelete} id={`delete-${index}`} type="button" className="btn btn-danger">Delete</button>
            </ul>
          )) : <p>Do not hav a task? Add one.</p>
      }

    </div>
  );
}
