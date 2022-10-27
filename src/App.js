import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Book App</h1>
        <h2>Reading</h2>
        <form action="App">
          <div>
            <label htmlFor="dune"></label>
            <input
              type="image"
              src="https://i.postimg.cc/nzZjM1zF/dunebook.jpg"
              alt="Dune_book"
              id="dune"
            />
          </div>
        </form>
        <br />

        <form action="App">
          <div>
            <label htmlFor="behave"></label>
            <input
              type="image"
              src="https://i.postimg.cc/zGF18w9S/behave-Book.jpg"
              alt="Behave_book"
              id="behave"
            />
          </div>
        </form>

        <h2>Completed</h2>
        <form action="App">
          <div>
            <label htmlFor="weeks"></label>
            <input
              type="image"
              src="https://i.postimg.cc/XNsRH79x/four-Thousand-Weeksbook.jpg"
              alt="four_thousand_weeks_book"
              id="weeks"
            />
          </div>
        </form>

        <h2>To Read</h2>
        <form action="App">
          <div>
            <label htmlFor="sprint"></label>
            <input
              type="image"
              src="https://i.postimg.cc/BZc1KR9x/sprint-Book.jpg"
              alt="Sprint_book"
              id="sprint"
            />
          </div>
        </form>
      </header>
    </div>
  );
}

export default App;
