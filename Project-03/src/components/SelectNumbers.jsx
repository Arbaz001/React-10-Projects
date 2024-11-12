import React, { useState } from "react";

const ButtonGroup = () => {
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = (index) => {
    // Toggle selection: if the button is already selected, unselect it
    if (selectedButton === index) {
      setSelectedButton(null); // Unselect the button
    } else {
      setSelectedButton(index); // Select the button
    }
  };

  return (
    <div className="mt-[6.5px] ml-[593px] flex flex-col items-center">
      <div className="flex space-x-4 relative">
        {Array.from({ length: 6 }, (_, index) => (
          <button
            key={index}
            className={`w-[72px] h-[72px] font-extrabold border-2 text-[24px] rounded-lg transition-all duration-500 transform ${
              selectedButton === index
                ? "bg-black text-white border-white scale-110 rounded-2xl shadow-lg"
                : "bg-white text-black border-black hover:scale-105 hover:shadow-md"
            }`}
            onClick={() => handleButtonClick(index)}
          >
            {index + 1}
          </button>
        ))}
      </div>
      <p className="ml-[340px] mt-4 text-black text-[24px] font-bold">
        Select Numbers
      </p>
    </div>
  );
};

export default ButtonGroup;
