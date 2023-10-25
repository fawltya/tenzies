"use client";
import Dice from "../components/dice.js";
import { useState } from "react";

// randomise number and set to state oject
// return object as component 'dice'
// include boolean to 'stick' a number
// check for win: if all numbers are stuck, are they all the same?

export default function Home() {
  const initialDiceState = { diceNum: 0, isStuck: false };
  const [diceBoard, setDiceBoard] = useState(Array(10).fill(initialDiceState));

  const throwDice = () => {
    const newDiceState = diceBoard.map((dice) => {
      if (dice.isStuck) return dice;
      return { ...dice, diceNum: Math.floor(Math.random() * 6) + 1 };
    });

    setDiceBoard(newDiceState);

    console.log(diceBoard);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="grid grid-cols-5">
        {diceBoard.map((dice, idx) => {
          return <Dice key={idx} diceNum={dice.diceNum} />;
        })}
      </div>
      <button
        className="border border-solid border-white p-3"
        onClick={throwDice}
      >
        Throw
      </button>
    </main>
  );
}
