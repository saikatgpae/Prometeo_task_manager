import logo from './images/taskmanager.avif';
import './App.css';

function App() {
  return (
    <div className="App m-2">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <h1 className="text-primary">Task Manager</h1>
    </div>
  );
}

export default App;
