import logo from './logo.svg';
import './App.css';
import Greet from './Component/Greet'

//stateless component
function App() {
  return (
    <div className="App">
      <Greet />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          hello world!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
