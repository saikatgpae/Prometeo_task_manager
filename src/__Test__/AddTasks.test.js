import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import AddTasks from '../components/AddTasks/AddTasks';
import store from '../Redux/configureStore';

test('Tasks render correctly', ()=> {
  const component = renderer.create(<Provider store={store}><AddTasks /></Provider>);
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
});

it('should render the component onto the screen', () => {
  render(<Provider store={store}><AddTasks /></Provider>);
  expect(screen.getByTestId('add-task-input')).toBeInTheDocument();
  expect(screen.getByTestId('add-task-button')).toBeInTheDocument();
});

it('should have the "Add" button disabled when initialized', () => {
  render(<Provider store={store}><AddTasks /></Provider>);
  expect(screen.getByTestId('add-task-button')).toBeDisabled();
});

it('should enable the "Add" button when a valid input is entered', () => {
  render(<Provider store={store}><AddTasks /></Provider>);
  const input = screen.getByTestId('add-task-input');
  fireEvent.change(input, { target: { value: 'shopping' } });
  expect(screen.getByTestId('add-task-button')).toBeEnabled();
});

it('should have the "Add" button disabled if the first letter of the input contains spaces or a balnk input', () => {
  render(<Provider store={store}><AddTasks /></Provider>);
  const input = screen.getByTestId('add-task-input');
  fireEvent.change(input, { target: { value: ' shopping' } });
  fireEvent.change(input, { target: { value: ' ' } });
  expect(screen.getByTestId('add-task-button')).toBeDisabled();
});
