import "./App.css";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Container from "./Container";
import { ItemTypes } from "./ItemTypes";

function App() {
  const books = [
    {
      id: 1,
      title: "Dune",
      image: "https://i.postimg.cc/nzZjM1zF/dunebook.jpg",
      isbn: "12345678732345678",
      author: "Jan Pen",
      cover: "test",
    },
    {
      id: 2,
      title: "Harry Potter",
      image: "https://i.postimg.cc/nzZjM1zF/dunebook.jpg",
      isbn: "12345678732345678",
      author: "JK Pen",
    },
  ];
  return (
    <div className="App">
      <DndProvider backend={HTML5Backend}>
        <header className="App-header">
          <h1>Book App</h1>
        </header>
          <Container className="Container" />
      </DndProvider>
    </div>
  );
}

export default App;
