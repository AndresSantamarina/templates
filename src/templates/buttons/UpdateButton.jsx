import React from 'react';

const UpdateButton = ({ children = 'Actualizar', onClick, disabled = false }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="px-4 py-2 font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-opacity-75 transition duration-150 ease-in-out 
                 text-white bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 disabled:opacity-50"
    >
      {children}
    </button>
  );
};

export default UpdateButton;