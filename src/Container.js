import update from "immutability-helper";
import { useCallback, useState } from "react";
import { Card } from "./Card.js";
const style = {
  width: 400,
  
  
};
const Container = () => {
  {
    const [currentBooks, setCurrent] = useState([
      {
        id: 1,
        title: "Dune",
        url: "https://i.postimg.cc/nzZjM1zF/dunebook.jpg",
      },
      {
        id: 2,
        title: "Behave",
        url: "https://i.postimg.cc/zGF18w9S/behave-Book.jpg",
      },
      
      
    ]);
    const [haveBooks, setHave] = useState([
      {
        id: 1,
        title: "4000 Weeks",
        url: "https://i.postimg.cc/XNsRH79x/four-Thousand-Weeksbook.jpg",
      },
    ]);
    const moveCurrentCard = useCallback((dragIndex, hoverIndex) => {
      setCurrent((prevCards) =>
        update(prevCards, {
          $splice: [
            [dragIndex, 1],
            [hoverIndex, 0, prevCards[dragIndex]],
          ],
        })
      );
    }, []);

    const moveHaveCard = useCallback((dragIndex, hoverIndex) => {
      setHave((prevCards) =>
        update(prevCards, {
          $splice: [
            [dragIndex, 1],
            [hoverIndex, 0, prevCards[dragIndex]],
          ],
        })
      );
    }, []);
    const renderCard = useCallback((book, index, moveCard) => {
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
        <h2>Reading now</h2>
        <div style={style}>
          {currentBooks.map((book, i) => renderCard(book, i, moveCurrentCard))}
        </div>
        <h2>Have read</h2>
        <div style={style}>
          {haveBooks.map((book, i) => renderCard(book, i, moveHaveCard))}
        </div>
      </>
    );
  }
};

export default Container;
