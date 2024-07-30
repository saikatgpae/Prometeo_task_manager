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
    // localStorage.removeItem('tasks');
  };

  //   Handle the check box change
  const handleChang = (e) => {
    const checkedValue = e.target.checked;
    const arrIndex = Number(e.target.id.split('-')[1]);
    // eslint-disable-next-line
    (checkedValue) ? dispatch(completeTask(arrIndex)) : dispatch(incompleteTask(arrIndex));
  };

  // Filter function
  const titleSearch = (e) => {
    const input = e.target.value.toUpperCase();
    const table = document.getElementById('taskTable');
    const tr = table.querySelectorAll('.table-data');
    for (let i = 0; i < tr.length; i += 1) {
      const td = tr[i].getElementsByTagName('td')[0];
      const inputCheckbox = td.getElementsByTagName('input')[0];
      if (td) {
        const checkedValue = inputCheckbox.checked;
        if (input === 'ALL') {
          tr[i].style.display = '';
        } else if (input === 'COMPLETE' && checkedValue === true) {
          tr[i].style.display = '';
        } else if (input === 'INCOMPLETE' && checkedValue === false) {
          tr[i].style.display = '';
        } else {
          tr[i].style.display = 'none';
        }
      }
    }
  };
  return (
    <div className="container container-div">
      {
        (tasks)
          ? (
            <select data-testid="select-menu-input" onChange={titleSearch} className="filter-menu" id="filter-menu">
              <option>all</option>
              <option>complete</option>
              <option>incomplete</option>
            </select>
          ) : ('')
      }
      <div className="table-responsive table-div">
        {
          (tasks)
            ? (
              <table id="taskTable" className="task-table table table-hover">
                <tbody>
                  {
                    tasks.map((task, index) => (
                      <tr key={uuid()} className="table-data">
                        <td className="">
                          <input className="checkBox" onChange={handleChang} style={{ accentColor: 'green' }} type="checkbox" defaultChecked={task.complete} id={`status-${index}`} />
                        </td>
                        <td className="task-display">
                          <strong className={(task.complete) ? 'task-name strike text-success' : 'task-name text-primary'} id={`task-${index}`}>{task.taskName}</strong>
                          <input className="none task-input" required id={`update-${index}`} type="text" defaultValue={task.taskName} />
                        </td>
                        <td className="">
                          <button className="edit-button" disabled={task.complete} id={`edit-${index}`} onClick={handleEditClick} type="button">Edit</button>
                          <button className="none save-button" id={`save-${index}`} onClick={handleSaveClick} type="button">Save</button>
                        </td>
                        <td className="">
                          <button onClick={handleDelete} id={`delete-${index}`} type="button" className="delete-button">Delete</button>
                        </td>
                      </tr>
                    ))
                  }
                </tbody>
              </table>
            ) : ('')
        }
      </div>
    </div>
  );
}
