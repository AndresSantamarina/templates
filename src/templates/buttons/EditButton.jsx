import React from 'react';

const EditButton = ({ children = 'Editar', onClick, disabled = false }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="px-4 py-2 font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-opacity-75 transition duration-150 ease-in-out 
                 text-amber-800 bg-amber-200 hover:bg-amber-300 focus:ring-amber-500 disabled:opacity-50"
    >
      {children}
    </button>
  );
};

export default EditButton;