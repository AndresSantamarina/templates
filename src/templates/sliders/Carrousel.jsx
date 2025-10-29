import React, { useState, useEffect } from 'react';

const Carrousel = ({ images, interval = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Función para ir a la siguiente imagen
  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Función para ir a la imagen anterior
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Función para ir a una imagen específica por su índice
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Efecto para la reproducción automática (autoplay)
  useEffect(() => {
    if (interval > 0) {
      const sliderInterval = setInterval(goToNext, interval);
      return () => clearInterval(sliderInterval); // Limpia el intervalo al desmontar
    }
  }, [currentIndex, interval, images.length]); // Dependencias: cambia el slide, el intervalo, o si el número de imágenes cambia

  if (!images || images.length === 0) {
    return <div className="text-center p-8 text-gray-500">No hay imágenes para mostrar.</div>;
  }

  return (
    <div className="relative max-w-4xl mx-auto rounded-lg shadow-2xl overflow-hidden group">
      {/* Imagen Actual */}
      <div 
        className="w-full h-96 bg-cover bg-center transition-opacity duration-700 ease-in-out"
        style={{ backgroundImage: `url(${images[currentIndex].src})` }}
        aria-label={images[currentIndex].alt}
      >
        {/* Leyenda de la imagen (Opcional) */}
        {images[currentIndex].caption && (
          <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white p-4 text-center">
            {images[currentIndex].caption}
          </div>
        )}
      </div>

      {/* Botones de Navegación (Izquierda/Derecha) */}
      <button
        onClick={goToPrevious}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-40 text-white p-3 rounded-full hover:bg-opacity-60 focus:outline-none transition-opacity opacity-0 group-hover:opacity-100 duration-300"
        aria-label="Imagen Anterior"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
      </button>
      <button
        onClick={goToNext}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-40 text-white p-3 rounded-full hover:bg-opacity-60 focus:outline-none transition-opacity opacity-0 group-hover:opacity-100 duration-300"
        aria-label="Imagen Siguiente"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
      </button>

      {/* Indicadores de Puntos */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? 'bg-white' : 'bg-gray-400 bg-opacity-70'
            } focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-75 transition duration-300`}
            aria-label={`Ir a la imagen ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carrousel;