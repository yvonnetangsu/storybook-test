import logo from './logo.svg';
import './App.css';
import { Button } from "./stories/simple/Button";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p><Button label={"Testing Decanter Button"} variant={"primary"} big={true} /></p>
      </header>
    </div>
  );
}

export default App;
