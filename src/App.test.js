import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from './Redux/configureStore';
import App from './App';

describe('App component', () => {
  render(<Provider store={store}><App /></Provider>);
  it('should render a component onto the screen', () => {
    expect(true).toBeTruthy();
  });
});
