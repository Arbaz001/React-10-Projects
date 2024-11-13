// Modal.js
import React, { useEffect } from "react";

const Modal = ({ message, onClose }) => {
  // Animation states
  const [visible, setVisible] = React.useState(false);

  // Trigger the fade-in effect when modal is shown
  useEffect(() => {
    setVisible(true);
  }, []);

  // Fade-out effect when the modal is closed
  const handleClose = () => {
    setVisible(false);
    setTimeout(() => onClose(), 300); // Delay to match the fade-out duration
  };

  return (
    <div
      className={`fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center transition-opacity duration-300 ${visible ? "opacity-100" : "opacity-0"}`}
    >
      <div
        className={`bg-white p-6 rounded-xl shadow-lg text-center transform transition-all duration-500 ease-in-out ${visible ? "scale-100" : "scale-95"}`}
      >
        <p className="text-xl font-semibold">{message}</p>
        <button
          onClick={handleClose}
          className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-400"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
