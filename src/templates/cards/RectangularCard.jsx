const RectangularCard = ({
  title,
  description,
  imageUrl,
  buttonText = "Ver Detalles",
  onButtonClick,
}) => {
  return (
    <div className="max-w-sm mx-auto bg-white rounded-xl shadow-lg overflow-hidden md:max-w-2xl transform hover:scale-[1.02] transition duration-300 ease-in-out">
      <div className="md:flex">
        {/* Sección de la Imagen (Ocupa 1/3 en móvil, se expande a 1/3 en md) */}
        <div className="md:shrink-0 w-full md:w-1/3">
          <img
            className="h-48 w-full object-cover md:h-full"
            src="https://placehold.co/600x400"
            alt={`Imagen de ${title}`}
          />
        </div>

        {/* Sección del Contenido (Ocupa 2/3 en md) */}
        <div className="p-8 md:w-2/3">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            Componente
          </div>
          <a
            href="#"
            className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
          >
            {title}
          </a>
          <p className="mt-2 text-gray-500 line-clamp-3">{description}</p>

          {/* Botón */}
          <div className="mt-4">
            <button
              onClick={onButtonClick}
              className="px-4 py-2 text-sm font-semibold text-white bg-indigo-600 rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-75 transition duration-150"
            >
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RectangularCard;
