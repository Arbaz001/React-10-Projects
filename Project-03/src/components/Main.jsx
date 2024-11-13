import React, { useState } from "react";
import RollDice from "./RollDice";
import Score from "./Score";
import SelectNumbers from "./SelectNumbers";
import Modal from "./Modal"; // Import the custom modal component

const Gameplay = () => {
  const [selectedNumber, setSelectedNumber] = useState(null);
  const [diceValue, setDiceValue] = useState(1);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [modalVisible, setModalVisible] = useState(false); // State for modal visibility
  const [modalMessage, setModalMessage] = useState(""); // Message for the modal

  const handleDiceRoll = () => {
    if (selectedNumber === null) {
      setModalMessage("Please select a number first!"); // Set the custom message
      setModalVisible(true); // Show the modal
      return;
    }

    const randomValue = Math.floor(Math.random() * 6) + 1;
    setDiceValue(randomValue);

    // Calculate score based on rolled dice
    let updatedScore;
    if (randomValue === selectedNumber) {
      updatedScore = score + selectedNumber;
    } else {
      updatedScore = score - Math.abs(selectedNumber - randomValue);
    }

    setScore(updatedScore);

    if (updatedScore < 0) {
      setGameOver(true); // Trigger game over
    }
  };

  const handleRestart = () => {
    setScore(0);
    setSelectedNumber(null);
    setDiceValue(1);
    setGameOver(false);
    setModalVisible(false); // Close the modal on restart
  };

  const handleCloseModal = () => {
    setModalVisible(false); // Close the modal when the close button is clicked
  };

  return (
    <>
      <div className="w-[1280px] h-[151px] mt-[61px] ml-[120px] flex">
        <Score score={score} />
        <SelectNumbers
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
        />
      </div>
      <RollDice handleDiceRoll={handleDiceRoll} diceValue={diceValue} />
      {gameOver && (
        <div className="popup">
          <div className="popup-content ml-[615px] mt-[-15px] w[250px]">
            <h2 className="w-[182px] h-[36px] font-extrabold text-[29px] ml-[27px] text-red-600">
              Game Over
            </h2>
            <p className="w-[220px] h-[36px] font-extrabold text-[12px] ml-[7px] text-red-600">
              Your score is less than 0. Try again!
            </p>
            <button
              className="w-[220px] h-[44px] bg-white text-black text-[16px] font-extrabold border-2 border-black rounded-xl transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-gray-100 hover:text-green-500"
              onClick={handleRestart}
            >
              Restart Game
            </button>
          </div>
        </div>
      )}
      {modalVisible && (
        <Modal message={modalMessage} onClose={handleCloseModal} /> // Display the animated modal
      )}
    </>
  );
};

export default Gameplay;
