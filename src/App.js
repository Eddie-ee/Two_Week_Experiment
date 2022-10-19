import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Book App</h1>
        <h2>What I'm Reading</h2>
        <div>
          <img
            src="https://i.postimg.cc/nzZjM1zF/dunebook.jpg"
            alt="Picture of Dune book"
          />
          <img
            src="https://i.postimg.cc/zGF18w9S/behave-Book.jpg"
            alt="Picture of Behave book"
          />
        </div>
        <h2>Completed</h2>
        <h2>Read Again</h2>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
