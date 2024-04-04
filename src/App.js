import logo from './logo.svg';
import './App.css';

import LifeCycleComponent from './components/life-cycle-example/life-cycle.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <LifeCycleComponent title="Life Cycle Example" />
      </header>
    </div>
  );
}

export default App;
