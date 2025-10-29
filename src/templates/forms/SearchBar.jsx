import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (onSearch) {
      // Llama a la función de búsqueda que viene por prop
      onSearch(searchTerm);
      // Opcional: limpiar la barra setSearchTerm('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
      <label htmlFor="search" className="sr-only">
        Buscar
      </label>
      <div className="relative flex items-center">
        <input
          id="search"
          type="search"
          value={searchTerm}
          onChange={handleChange}
          placeholder="Buscar productos, usuarios o documentos..."
          className="w-full py-3 pl-12 pr-4 border border-gray-300 rounded-full shadow-md focus:ring-purple-500 focus:border-purple-500 transition duration-150"
        />

        {/* Icono de Lupa (SVG para Tailwind) */}
        <div className="absolute left-0 inset-y-0 pl-3 flex items-center pointer-events-none">
          <svg
            className="h-5 w-5 text-gray-400"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clipRule="evenodd"
            />
          </svg>
        </div>

        {/* Botón de Búsqueda (Opcional si usas el Enter) */}
        <button
          type="submit"
          className="ml-2 p-2 rounded-full bg-purple-600 text-white hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition duration-150"
          aria-label="Buscar"
        >
          <svg
            className="h-6 w-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <polyline points="19 12 12 19 5 12"></polyline>
          </svg>
        </button>
      </div>
    </form>
  );
};

export default SearchBar;

// Ejemplo de uso: <SearchBar onSearch={(query) => console.log('Buscando:', query)} />
