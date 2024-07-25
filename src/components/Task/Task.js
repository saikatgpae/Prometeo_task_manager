// /* eslint-disable */
import React from 'react';
import uuid from 'react-uuid';
import './Task.css';

export default function Task(prop) {
  const { tasks } = prop;

  // Local Storage function
  const localStorageUpdate = (newTask, arrIndex) => {
    const localStoreArray = JSON.parse(localStorage.getItem('tasks'));
    const updatedTasksArray = localStoreArray.map((task, index) => {
      if (index === Number(arrIndex)) {
        return {
          ...task,
          taskName: newTask,
        };
      }
      return task;
    });
    localStorage.setItem('tasks', JSON.stringify(updatedTasksArray));
  };

  //   Edit button clicked
  const handleEditClick = (e) => {
    const elementId = e.target.id.split('-')[1];
    e.target.classList.add('none');
    document.getElementById(`save-${elementId}`).classList.remove('none');
    document.getElementById(`update-${elementId}`).classList.remove('none');
    document.getElementById(`task-${elementId}`).classList.add('none');
  };
  //   Save button clicked
  const handleSaveClick = (e) => {
    const elementId = e.target.id.split('-')[1];
    const task = document.getElementById(`update-${elementId}`).value;
    localStorageUpdate(task, elementId);
    window.location.reload();
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
              <li id={`task-${index}`} className="">{task.taskName}</li>
              <input id={`update-${index}`} className="none" type="text" defaultValue={task.taskName} />
              <button id={`edit-${index}`} onClick={handleEditClick} type="button" className="btn btn-primary">Edit</button>
              <button id={`save-${index}`} onClick={handleSaveClick} type="button" className="none btn btn-primary">Save</button>
              <button onClick={handleDelete} id={`delete-${index}`} type="button" className="btn btn-danger">Delete</button>
            </ul>
          )) : <p>Do not hav a task? Add one.</p>
      }

    </div>
  );
}
