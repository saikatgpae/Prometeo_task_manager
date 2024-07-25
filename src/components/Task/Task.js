/* eslint-disable */
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
    <table className="table table-striped">
      <tbody>
        <tr>
          <th scope="col">Status</th>
          <th scope="col">Complete?</th>
          <th scope="col">Task Name</th>
          <th scope="col">Edit</th>
          <th scope="col">Delete</th>
        </tr>
        {
          (tasks)
            ?  tasks.map((task, index) =>(
                <tr key={uuid()}>
                  <td className={(task.complete) ? 'text-success' : 'text-danger'}>
                    {(task.complete) ? 'Complete' : 'Incomplete'}
                  </td>
                  <td>
                    <input onChange={handleChang} style={{ accentColor: 'green' }} type="checkbox" defaultChecked={task.complete} id={`status-${index}`} />
                  </td>
                  <td>
                    <p className={(task.complete) ? 'strike' : ''} id={`task-${index}`}>{task.taskName}</p>
                    <input id={`update-${index}`} className="none" type="text" defaultValue={task.taskName} />
                  </td>
                  <td>
                    <button disabled={task.complete} id={`edit-${index}`} onClick={handleEditClick} type="button" className="btn btn-primary">Edit</button>
                    <button id={`save-${index}`} onClick={handleSaveClick} type="button" className="none btn btn-primary">Save</button>
                  </td>
                  <td>
                    <button onClick={handleDelete} id={`delete-${index}`} type="button" className="btn btn-danger">Delete</button>
                  </td> 
                </tr>
            )) : <p>No Task</p>
        }
      </tbody>
    </table>
  );
}
