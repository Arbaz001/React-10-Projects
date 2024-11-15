import React, { useState } from "react";

const RollDice = ({ handleDiceRoll, diceValue }) => {
  const [isRolling, setIsRolling] = useState(false); // Animation state

  const onDiceRoll = () => {
    if (isRolling) return; // Prevent multiple rolls during animation

    setIsRolling(true); // Start animation

    // Simulate dice roll
    setTimeout(() => {
      handleDiceRoll(); // Trigger dice roll logic
      setIsRolling(false); // Stop animation
    }, 1000); // Animation duration (1 second)
  };

  return (
    <div
      className="w-[250px] h-[301px] mt-[48px] ml-[595px] flex flex-col items-center cursor-pointer"
      onClick={() => { if (!isRolling) { setIsRolling(true); onDiceRoll(); } }}
    >
      <img
        src={`/images/dicess/dice_${diceValue}.svg`} // Dynamically load dice image
        alt={`dice ${diceValue}`}
        className={`w-[200px] h-[200px] transition-transform duration-500 ${
          isRolling ? "animate-shake" : "" // Apply shake animation when rolling
        }`}
      />
      <p className="w-[229px] h-[36px] mt-[5px] text-[24px] font-bold leading-auto text-center">
        Click on Dice to roll
      </p>
    </div>
  );
};

export default RollDice;
