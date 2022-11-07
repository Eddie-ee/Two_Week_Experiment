import update from "immutability-helper";
import { useCallback, useState } from "react";
import { Card } from "./Card.js";
const style = {
  width: 400,
};
const Container = () => {
  {
    const [cards, setCards] = useState([
      {
        id: 1,
        text: "Dune",
      },

      

      {
        id: 2,
        text: "Behave",
      },
      {
        id: 3,
        text: "4000 Weeks",
      },
      {
        id: 4,
        text: "Sprint",
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
    const renderCard = useCallback((card, index) => {
      return (
        <Card
          key={card.id}
          index={index}
          id={card.id}
          text={card.text}
          moveCard={moveCard}
        />
      );
    }, []);
    return (
      <>
        <div style={style}>{cards.map((card, i) => renderCard(card, i))}</div>
      </>
    );
  }
};

export default Container;
