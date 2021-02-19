import React, { useEffect, useState, useRef } from "react";
import "./Board.scss";
import loader from "../../assets/loader.gif";
import pokeball from "../../assets/pokeball.png";
import boardItems from "./BoardItems";
import Timer from "react-compound-timer/build";
import GameOverModal from "../Modal/GameOverModal";

function Board() {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(false);
  const [openedCards, setOpenedCards] = useState([]);
  const [tries, setTries] = useState(0);
  const [success, setSuccess] = useState(0);
  const [gameOverModal, setGameOverModal] = useState(false);

  const inputRef = useRef(null);
  const ref2 = useRef(0);

  useEffect(() => {
    setCards(boardItems());
  }, []);

  useEffect(() => {
    if (success === 8) {
      inputRef.current.click();
      setGameOverModal(true);
    }
  }, [success]);

  const handleClick = (card) => {
    if (card.open === true) return;
    if (openedCards.length === 2) return;
    const tempCards = [...cards];
    tempCards.forEach((temp, index) => {
      if (temp.id === card.id) {
        tempCards[index].open = true;
      }
    });
    setCards(tempCards);
    let openCards = openedCards;

    openCards.push(card);
    setOpenedCards(openCards);

    if (openedCards.length === 2) {
      setTries(tries + 1);
      setTimeout(() => {
        checkForMatch(openedCards[0], openedCards[1]);
      }, 1000);
    }
  };

  const checkForMatch = (card1, card2) => {
    if (card1.number !== card2.number) {
      closeCard(card1, card2);
    } else {
      setSuccess(success + 1);
    }
    setOpenedCards([]);
  };

  const closeCard = (card1, card2) => {
    const tempCards = [...cards];
    tempCards.forEach((temp, index) => {
      if (temp.id === card1.id || temp.id === card2.id) {
        tempCards[index].open = false;
      }
    });
    setCards(tempCards);
  };

  return (
    <div className="board">
      <div className="boardHeader">
        <div className="tries">
          <p>
            Attempts : <span>{tries}</span>
          </p>
        </div>
        <div className="time">
          <Timer formatValue={(value) => `${value < 10 ? `0${value}` : value}`}>
            {({ stop }) => {
              return (
                <div ref={ref2}>
                  <Timer.Minutes /> : <Timer.Seconds />
                  <button ref={inputRef} onClick={stop}>
                    Stop
                  </button>
                </div>
              );
            }}
          </Timer>
        </div>
      </div>

      <GameOverModal
        show={gameOverModal}
        onHide={() => setGameOverModal(false)}
        backdrop="static"
        keyboard={false}
        tries={tries}
        time={ref2.current.innerText}
      />

      <div className="boardContainer">
        {loading && (
          <div className="loader">
            <img src={loader} alt="loader" />
          </div>
        )}
        {!loading &&
          cards.map((card, index) => (
            <div
              key={index}
              className={card.open ? "boardItemOpen" : "boardItem"}
              onClick={() => handleClick(card)}
            >
              {card.open && <img src={card.url} alt={card.id} />}
              {!card.open && <img src={pokeball} alt="" />}
            </div>
          ))}
      </div>
    </div>
  );
}

export default Board;
