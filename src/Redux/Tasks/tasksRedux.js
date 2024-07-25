const FETCH_TASKS = 'FETCH_TASKS';

// Fetch tasks from local storage if any
const fetchTasks = () => (dispatch) => {
  const tasks = JSON.parse(localStorage.getItem('tasks'));
  dispatch({
    type: FETCH_TASKS,
    tasks,
  });
};

const initialState = JSON.parse(localStorage.getItem('tasks'));
// const initialState = [];
// eslint-disable-next-line default-param-last
const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TASKS:
      return action.tasks;
    default:
      return state;
  }
};

export default tasksReducer;
export { fetchTasks };
