import React from 'react';

// Nota: Usa Sweet Alert (Swal) aquí para pedir confirmación antes de la acción final
const DeleteButton = ({ children = 'Eliminar', onClick, disabled = false }) => {
  
  const handleDeleteClick = () => {
    // Ejemplo de cómo usar Sweet Alert aquí para la confirmación
    // Solo llama a la función onClick si el usuario confirma
    /* Swal.fire({
      title: '¿Estás seguro?',
      text: "Esta acción no se puede deshacer.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Sí, ¡Eliminar!'
    }).then((result) => {
      if (result.isConfirmed && onClick) {
        onClick(); // Ejecuta la función de eliminación si es confirmada
      }
    });
    */
    
    // Para simplificar, solo llamamos al onClick pasado como prop
    if (onClick) {
        onClick();
    }
  };

  return (
    <button
      onClick={handleDeleteClick}
      disabled={disabled}
      className="px-4 py-2 font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-opacity-75 transition duration-150 ease-in-out 
                 text-white bg-red-600 hover:bg-red-700 focus:ring-red-500 disabled:opacity-50"
    >
      {children}
    </button>
  );
};

export default DeleteButton;