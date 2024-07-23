import logo from './images/taskmanager.avif';
import './App.css';
import Tasks from './components/Tasks/Tasks';

function App() {
  return (
    <div className="App m-2">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <h1 className="text-primary">Tasks Manager</h1>
      <Tasks />
    </div>
  );
}

export default App;
