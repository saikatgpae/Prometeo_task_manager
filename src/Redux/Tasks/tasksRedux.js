// /* eslint-disable */
const FETCH_TASKS = 'FETCH_TASKS';
const COMPLETE_TASK = 'COMPLETE_TASK';
const INCOMPLETE_TASK = 'INCOMPLETE_TASK';
const EDIT_TASK = 'EDIT_TASK';
const DELETE_TASK = 'DELETE_TASK';

// Fetch tasks from local storage if any
const fetchTasks = () => (dispatch) => {
  const tasks = JSON.parse(localStorage.getItem('tasks'));
  dispatch({
    type: FETCH_TASKS,
    tasks,
  });
};

// Edit Task
const editTask = (updatedTask, id) => (dispatch) => {
  dispatch({ type: EDIT_TASK, updatedTask, id });
};

// Complet tasks
const completeTask = (id) => (dispatch) => {
  dispatch({ type: COMPLETE_TASK, id });
};

// Complet tasks
const incompleteTask = (id) => (dispatch) => {
  dispatch({ type: INCOMPLETE_TASK, id });
};

// Delete task
const deleteTask = (id) => (dispatch) => {
  dispatch({ type: DELETE_TASK, id });
};

const initialState = JSON.parse(localStorage.getItem('tasks'));
// eslint-disable-next-line default-param-last
const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TASKS:
      return action.tasks;
    case COMPLETE_TASK: {
      const newState = state.map((task, taskIndex) => {
        if (taskIndex === Number(action.id)) {
          return { ...task, complete: true };
        }
        return task;
      });
      localStorage.setItem('tasks', JSON.stringify(newState));
      return newState;
    }
    case INCOMPLETE_TASK: {
      const newState = state.map((task, taskIndex) => {
        if (taskIndex === Number(action.id)) {
          return { ...task, complete: false };
        }
        return task;
      });
      localStorage.setItem('tasks', JSON.stringify(newState));
      return newState;
    }

    case EDIT_TASK: {
      const newState = state.map((task, index) => {
        if (index === Number(action.id)) {
          return { ...task, taskName: action.updatedTask };
        }
        return task;
      });
      localStorage.setItem('tasks', JSON.stringify(newState));
      return newState;
    }

    case DELETE_TASK: {
      const newState = state.filter((element, index) => index !== action.id);
      localStorage.setItem('tasks', JSON.stringify(newState));
      return newState;
    }

    default:
      return state;
  }
};

export default tasksReducer;
export {
  fetchTasks, completeTask, incompleteTask, editTask, deleteTask,
};
