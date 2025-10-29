const VerticalCard = ({
  title,
  description,
  imageUrl,
  buttonText = "Ver Más",
  onButtonClick,
}) => {
  return (
    <div className="max-w-sm mx-auto bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-[1.02] transition duration-300 ease-in-out">
      {/* Sección de la Imagen (Arriba) */}
      <div className="w-full">
        <img
          className="h-48 w-full object-cover" // La imagen ocupa todo el ancho y tiene una altura fija
          src="https://placehold.co/600x400"
          alt={`Imagen de ${title}`}
        />
      </div>

      {/* Sección del Contenido (Abajo) */}
      <div className="p-6">
        {" "}
        {/* Padding ligeramente menor para ajustar */}
        <div className="uppercase tracking-wide text-xs text-blue-500 font-semibold">
          Categoría
        </div>
        <a
          href="#"
          className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
        >
          {title}
        </a>
        <p className="mt-2 text-gray-500 line-clamp-3">
          {" "}
          {/* line-clamp-3 para descripciones largas */}
          {description}
        </p>
        {/* Botón */}
        <div className="mt-4">
          <button
            onClick={onButtonClick}
            className="w-full px-4 py-2 text-sm font-semibold text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75 transition duration-150"
          >
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default VerticalCard;
