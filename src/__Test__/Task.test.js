import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import Task from '../components/Task/Task';
import store from '../Redux/configureStore';

const tasks = [
  { complete: false, taskName: 'playing' },
];

test('Tasks render correctly', () => {
  const component = renderer.create(<Provider store={store}><Task tasks={tasks} /></Provider>);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
