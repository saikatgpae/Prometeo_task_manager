// import { render, screen, fireEvent } from '@testing-library/react';
// import { Provider } from 'react-redux';
// import store from '../../Redux/configureStore';
// import Task from 'composer/lib/task';

// it('should render the component onto the screen', () => {
//     render(<Provider store={store}><Task /></Provider>);
//     expect(screen.getByTestId('select-menu-input')).toBeInTheDocument();
// });

import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
// import thunk from 'redux-thunk'

import configureStore from 'redux-mock-store';
// import { configureStore } from '@reduxjs/toolkit';

// import { store } from '../Redux/configureStore';
import Task from '../components/Task/Task';

const initialState = [
  { complete: false, taskName: 'playing' },
  { complete: false, taskName: 'drawing' },
  { complete: false, taskName: 'Shopping' },
];
// const middlewares = []
const mockStore = configureStore([]);
const store = mockStore(initialState);
it('should render the select menu of complete, incomplete or all', () => {
  // store = mockStore(initialState);
  render(<Provider store={store}><Task /></Provider>);
  expect(screen.getByTestId('select-menu-input')).toBeInTheDocument();
});
