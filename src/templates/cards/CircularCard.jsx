const CircularCard = ({
  name,
  role,
  imageUrl,
  buttonText = "Ver Perfil",
  onButtonClick,
}) => {
  return (
    <div className="max-w-xs mx-auto bg-white rounded-lg shadow-xl overflow-hidden p-6 text-center transform hover:shadow-2xl transition duration-300 ease-in-out">
      {/* Contenedor de la Imagen Circular */}
      <div className="flex justify-center -mt-16">
        <img
          className="w-32 h-32 object-cover rounded-full border-4 border-white shadow-md"
          src="https://placehold.co/600x400"
          alt={`Perfil de ${name}`}
        />
      </div>

      {/* Contenido de la Card */}
      <div className="mt-4">
        <h3 className="text-xl font-bold text-gray-900">{name}</h3>
        <p className="text-sm text-indigo-600 font-medium mt-1">{role}</p>

        {/* Descripción corta opcional */}
        <p className="text-gray-500 text-sm mt-3 px-2">
          ¡Un líder visionario con experiencia en desarrollo de software!
        </p>
      </div>

      {/* Botón */}
      <div className="mt-5">
        <button
          onClick={onButtonClick}
          className="w-full px-4 py-2 text-sm font-semibold text-white bg-indigo-500 rounded-full shadow-lg hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-75 transition duration-150"
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default CircularCard;
