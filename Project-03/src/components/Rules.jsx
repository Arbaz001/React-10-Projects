// Rules.jsx
import React, { useState } from "react";

const Rules = () => {
  const [showRules, setShowRules] = useState(false);

  const handleToggleRules = () => {
    setShowRules((prev) => !prev); // Toggle visibility of the rules
  };

  return (
    <div className="w-[600px] ml-[626px] items-center mt-6">
      <button
        onClick={handleToggleRules}
        className="w-[200px] h-[40px] bg-blue-500 text-white text-lg font-semibold rounded-xl transition-all duration-300 ease-in-out hover:bg-blue-400"
      >
        {showRules ? "Hide Rules" : "Show Rules"}
      </button>

      {/* Display rules with animation */}
      {showRules && (
        <div
          className="w-[600px] ml-[-200px] mt-6 p-6 border-2 border-blue-500 rounded-lg bg-white shadow-md transform transition-all duration-500 ease-in-out opacity-100"
          style={{ transition: "transform 0.5s ease-in-out, opacity 0.5s ease-in-out" }}
        >
          <h3 className="text-2xl font-bold mb-4">Game Rules</h3>
          <ul className="list-disc pl-6">
            <li>Select a number between 1 and 6.</li>
            <li>Click on "Roll Dice" to roll the dice.</li>
            <li>If the dice value matches your selected number, you score that number.</li>
            <li>If the dice value doesn't match, you lose points equal to the difference between your number and the dice value.</li>
            <li>Your score will decrease if the difference is large, and the game ends if your score becomes less than zero.</li>
            <li>Click "Restart Game" to start a new game.</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Rules;
