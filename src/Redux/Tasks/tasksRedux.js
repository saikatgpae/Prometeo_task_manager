const initialState = localStorage.getItem('tasks');
// console.log(initialState.filter((task, index) => index !== 3));

const FETCH_TASKS = 'FETCH_TASKS';

// Fetch tasks from local storage if any
const fetchTasks = () => (dispatch) => {
  const tasks = localStorage.getItem('tasks');
  dispatch({
    type: FETCH_TASKS,
    tasks,
  });
};

// eslint-disable-next-line default-param-last
const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TASKS:
      return [
        JSON.parse(state),
      ];
    default:
      return state;
  }
};

export default tasksReducer;
export { fetchTasks };
