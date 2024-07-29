import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import renderer from 'react-test-renderer';
import Tasks from '../components/Tasks/Tasks';

const initialState = [
  { complete: false, taskName: 'playing' },
  { complete: false, taskName: 'drawing' },
  { complete: false, taskName: 'Shopping' },
];
const mockStore = configureStore([]);
const store = mockStore(initialState);

test('Tasks render correctly', () => {
  const component = renderer.create(<Provider store={store}><Tasks /></Provider>);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
