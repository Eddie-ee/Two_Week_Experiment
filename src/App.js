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
            alt="picture of Dune book"
          />
          <img
            src="https://i.postimg.cc/zGF18w9S/behave-Book.jpg"
            alt="picture of Behave book"
          />
        </div>
        <h2>Completed</h2>
        <div>
          <img
            src="https://i.postimg.cc/XNsRH79x/four-Thousand-Weeksbook.jpg"
            alt="picture of Four Thousand Weeks book"
          />
        </div>
        <h2>To Read</h2>
        <div>
          <img
            src="https://i.postimg.cc/BZc1KR9x/sprint-Book.jpg"
            alt="picture of Sprint book"
          />
        </div>
      </header>
    </div>
  );
}

export default App;
