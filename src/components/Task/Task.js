// /* eslint-disable */
import React from 'react';
import uuid from 'react-uuid';
import './Task.css';
import { useDispatch } from 'react-redux';
import {
  completeTask, deleteTask, editTask, incompleteTask,
} from '../../Redux/Tasks/tasksRedux';

export default function Task(prop) {
  const dispatch = useDispatch();
  const { tasks } = prop;

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
    dispatch(editTask(task, elementId));
  };

  //   Handle Delete butoon click
  const handleDelete = (e) => {
    const indexNumber = Number(e.target.id.split('-')[1]);
    dispatch(deleteTask(indexNumber));
  };

  //   Handle the check box change
  const handleChang = (e) => {
    const checkedValue = e.target.checked;
    const arrIndex = Number(e.target.id.split('-')[1]);
    // eslint-disable-next-line
    (checkedValue) ? dispatch(completeTask(arrIndex)) : dispatch(incompleteTask(arrIndex));
  };

  return (
    <div>
      {
        (tasks)
          ? tasks.map((task, index) => (
            <ul style={{ listStyleType: 'none' }} className="d-flex justify-content-around" key={uuid()}>
              <label htmlFor={index}>
                complete?
                <input onChange={handleChang} style={{ accentColor: 'green' }} type="checkbox" defaultChecked={task.complete} id={`status-${index}`} />
              </label>
              {
                (!task.complete) ? <li id={`task-${index}`}>{task.taskName}</li> : <li id={`task-${index}`}><s>{task.taskName}</s></li>
              }
              <input id={`update-${index}`} className="none" type="text" defaultValue={task.taskName} />
              <button disabled={task.complete} id={`edit-${index}`} onClick={handleEditClick} type="button" className="btn btn-primary">Edit</button>
              <button id={`save-${index}`} onClick={handleSaveClick} type="button" className="none btn btn-primary">Save</button>
              <button onClick={handleDelete} id={`delete-${index}`} type="button" className="btn btn-danger">Delete</button>
            </ul>
          )) : <p>Do not hav a task? Add one.</p>
      }

    </div>
  );
}
