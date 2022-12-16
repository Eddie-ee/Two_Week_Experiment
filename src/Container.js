
/* FROM HERE */

import update from "immutability-helper";
import { useCallback, useState } from "react";
import { Card } from "./Card.js";

const Container = () => {
  {
    const [currentBooks, setCurrent] = useState([
      {
        id: 1,
        title: "Dune",
        url: "https://i.postimg.cc/DzWv6S5Q/dunebook.jpg",
      },
      {
        id: 2,
        title: "Behave",
        url: "https://i.postimg.cc/0bCM7cCX/behave-Book.jpg",
      },
    ]);
    const [haveBooks, setHave] = useState([
      {
        id: 1,
        title: "4000 Weeks",
        url: "https://i.postimg.cc/BQnFW0nR/four-Thousand-Weeksbook.jpg",
      },
      {
        id: 2,
        title: "Sprint",
        url: "https://i.postimg.cc/gJDf9S00/sprint-Book.jpg",
      },
      {
        id: 3,
        title: "Scrum",
        url: "https://i.postimg.cc/L6rzzjtC/Scrum-Book.jpg",
      },
      {
        id: 4,
        title: "Factfulness",
        url: "https://i.postimg.cc/wxGHgYsN/factfullness-Book.png",
      },
    ]);

    // FROM HERE
const [toBooks, setTo] = useState([
  {
    id: 1,
    title: "Thinking Fast & Slow",
    url: "https://i.postimg.cc/P5Tfrpk6/Thinking-Fast-Slow-Book.jpg",
  },
  {
    id: 2,
    title: "The Fiery Trial",
    url: "https://i.postimg.cc/Sx5hYD2x/the-Fiery-Trial-Book.jpg",
  },
  {
    id: 3,
    title: "Being Wrong",
    url: "https://i.postimg.cc/XJvTxTHV/being-Wrong-Book.jpg",
  },
]);
    // TO HERE


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

//FROM HERE
    const moveToCard = useCallback((dragIndex, hoverIndex) => {
      setTo((prevCards) =>
        update(prevCards, {
          $splice: [
            [dragIndex, 1],
            [hoverIndex, 0, prevCards[dragIndex]],
          ],
        })
      );
    }, []);
//TO HERE
    
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
      <div className="room">
        <h2>Reading Now</h2>
        <div className="currentBookCase">
          {currentBooks.map((book, i) => renderCard(book, i, moveCurrentCard))}
        </div>
        <h2 className="haveRead-El">Have Read</h2>
        <div className="haveBookCase">
          {haveBooks.map((book, i) => renderCard(book, i, moveHaveCard))}
        </div>

        {/* from here */}
        <h2 className="toRead-El">To Read</h2>
        <div className="toBookCase">
          {toBooks.map((book, i) => renderCard(book, i, moveToCard))}
        </div>
        {/* to here */}
        
      </div>
    );
  }
};

export default Container;
