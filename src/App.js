import React, { useState } from "react";
import Card from "./component/card.jsx";
import "./App.css";

function App() {
  function randomCard() {
    const numbers = [
      "A",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K",
    ];
    const symbols = ["♥", "♦", "♠", "♣"];
    const randomNum = Math.floor(Math.random() * numbers.length);
    const randomSym = Math.floor(Math.random() * symbols.length);
    return {
      number: numbers[randomNum],
      symbol: symbols[randomSym],
    };
  }

  const [card, setCard] = useState(randomCard());

  const generateRandomCard = () => {
    setCard(randomCard());
  };

  return (
    <div className="App">
      <header className="App-header">
        <Card number={card.number} symbol={card.symbol} />
        <button
          onClick={generateRandomCard}
          className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
        >
          Generate Random Card
        </button>
      </header>
    </div>
  );
}

export default App;
