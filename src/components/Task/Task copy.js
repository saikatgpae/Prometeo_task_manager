// /* eslint-disable */
import React from 'react';
import './Task.css';
import { useDispatch } from 'react-redux';
import {
  completeTask, deleteTask, editTask, incompleteTask,
} from '../../Redux/Tasks/tasksRedux';
import Filter from '../Filter/Filter';
import TaskTable from '../TaskTable/TaskTable';

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

  // Search function
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
            <Filter titleSearch={titleSearch} />
          ) : ('')
      }
      <div className="table-responsive table-div">
        {
          (tasks)
            ? (
              <TaskTable
                tasks={tasks}
                handleChang={handleChang}
                handleEditClick={handleEditClick}
                handleSaveClick={handleSaveClick}
                handleDelete={handleDelete}
              />
            ) : ('')
        }
      </div>
    </div>
  );
}
