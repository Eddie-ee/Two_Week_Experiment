import update from "immutability-helper";
import { useCallback, useState } from "react";
import { Card } from "./Card.js";
const style = {
  width: 400,
};
const Container = () => {
  {
    const [books, setCards] = useState([
      {
        id: 1,
        title: "Dune",
        url: "https://i.postimg.cc/nzZjM1zF/dunebook.jpg",
      },
      {
        id: 2,
        title: "Behave",
        url: "https://i.postimg.cc/nzZjM1zF/dunebook.jpg",
      },
      {
        id: 3,
        title: "4000 Weeks",
        url: "https://i.postimg.cc/nzZjM1zF/dunebook.jpg",
      },
      {
        id: 4,
        title: "Sprint",
        url: "https://i.postimg.cc/nzZjM1zF/dunebook.jpg",
      },
      {
        id: 5,
        title: "Eddy se beste boek",
        url: "https://i.postimg.cc/nzZjM1zF/dunebook.jpg",
      },
    ]);
    const moveCard = useCallback((dragIndex, hoverIndex) => {
      setCards((prevCards) =>
        update(prevCards, {
          $splice: [
            [dragIndex, 1],
            [hoverIndex, 0, prevCards[dragIndex]],
          ],
        })
      );
    }, []);
    const renderCard = useCallback((book, index) => {
      return (
        <Card
          key={book.id}
          index={index}
          id={book.id}
          moveCard={moveCard}
          book={book}
        />
      );
    }, []);
    return (
      <>
        <div style={style}>{books.map((book, i) => renderCard(book, i))}</div>
      </>
    );
  }
};

export default Container;
