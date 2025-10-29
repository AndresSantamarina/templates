import React from 'react';
import ConfirmButton from './ConfirmButton';
import DeleteButton from './DeleteButton';
import Swal from 'sweetalert2';
import InfoButton from './InfoButton';
import UpdateButton from './UpdateButton';
import CancelButton from './CancelButton';
import EditButton from './EditButton';

const ButtonExamples = () => {
  
  const handleAction = (action, color) => {
    Swal.fire({
      icon: color,
      title: `${action} Ejecutada`,
      text: `Aquí se realizaría la llamada a Axios para la acción: ${action}.`,
      showConfirmButton: false,
      timer: 1500
    });
  };
  
  return (
    <div className="p-8 space-y-4">
      <h2 className="text-2xl font-bold mb-4">Ejemplos de Botones</h2>
      <div className="flex flex-wrap gap-4">
        <ConfirmButton onClick={() => handleAction('Confirmación', 'success')} />
        <UpdateButton onClick={() => handleAction('Actualización de Datos', 'info')} />
        <CancelButton onClick={() => handleAction('Acción Cancelada', 'warning')} />
        <InfoButton onClick={() => handleAction('Info Solicitada', 'question')} />
        <EditButton onClick={() => handleAction('Modo Edición', 'question')} />
        
        {/* Usando el botón de eliminar, que puede tener su propia lógica de Swal */}
        <DeleteButton onClick={() => handleAction('Eliminando Recurso', 'error')}>
          Eliminar Usuario
        </DeleteButton>
      </div>
    </div>
  );
};

export default ButtonExamples;