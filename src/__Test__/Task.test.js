// import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import Task from '../components/Task/Task';

const initialState = [
  { complete: false, taskName: 'playing' },
  { complete: false, taskName: 'drawing' },
  { complete: false, taskName: 'Shopping' },
];

const mockStore = configureStore([]);
describe('My Connected React-Redux Component', () => {
  let store;
  let component;
  beforeEach(() => {
    store = mockStore(initialState);

    component = renderer.create(
      <Provider store={store}>
        <Task />
      </Provider>,
    );
  });

  it('should render with given state from Redux store', () => {
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('should dispatch an action on button click', () => {

  });
});
