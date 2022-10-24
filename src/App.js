import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Book App</h1>
        <h2>What I'm Reading</h2>
        <form action="App">
          <div>
            <input
              type="image"
              src="https://i.postimg.cc/nzZjM1zF/dunebook.jpg"
              alt="Dune_book"
            />
          </div>
        </form>
        <form action="App">
          <div>
            <input
              type="image"
              src="https://i.postimg.cc/zGF18w9S/behave-Book.jpg"
              alt="Behave_book"
            />
          </div>
        </form>
        <h2>Completed</h2>
        <div>
          <img
            src="https://i.postimg.cc/XNsRH79x/four-Thousand-Weeksbook.jpg"
            alt="four_thousand_weeks_book"
          />
        </div>
        <h2>To Read</h2>
        <div>
          <img
            src="https://i.postimg.cc/BZc1KR9x/sprint-Book.jpg"
            alt="Sprint_book"
          />
        </div>
      </header>
    </div>
  );
}

export default App;
