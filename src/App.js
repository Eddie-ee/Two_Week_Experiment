import "./App.css";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Container from "./Container";
import { ItemTypes } from "./ItemTypes";

function App() {
  return (
    <div className="App">
      <DndProvider backend={HTML5Backend}>
        <header className="App-header">
          <h1>Book App</h1>
        </header>
        <Container id="container" className="Container" />
      </DndProvider>
    </div>
  );
}

export default App;
