import React from 'react';
import uuid from 'react-uuid';

export default function TaskTable(prop) {
  const {
    tasks, handleChang, handleEditClick, handleSaveClick, handleDelete,
  } = prop;
  return (

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
  );
}
