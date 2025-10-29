import { useLocation, Link } from "react-router-dom";

const formatSegment = (s) => {
  if (s.match(/^\d+$/) || s.length > 15) {
    return s; // Lo dejamos como está, podrías querer un alias
  }

  // Reemplazar guiones y capitalizar
  const formatted = s.replace(/-/g, " ");
  return formatted.charAt(0).toUpperCase() + formatted.slice(1);
};

const Breadcrumbs = () => {
  // Obtener el objeto location de react-router-dom
  const location = useLocation();

  // Obtener los segmentos de la ruta
  // location.pathname es la ruta actual (ej: "/usuarios/perfil/123")
  // .split('/') divide la ruta en un array ["", "usuarios", "perfil", "123"]
  // .filter(x => x) quita las cadenas vacías (el primer elemento "")
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        {/* Siempre empezamos con el Home/Inicio */}
        <li className="inline-flex items-center">
          <Link
            to="/"
            className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-500 transition duration-150"
          >
            {/* Ícono de Casa (puedes reemplazarlo con un SVG de Heroicons o similar) */}
            <svg
              className="w-4 h-4 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
            </svg>
            Inicio
          </Link>
        </li>

        {/* Mapear los segmentos de la ruta */}
        {pathnames.map((name, index) => {
          // Construir la ruta acumulada hasta este segmento
          const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;

          // Verificar si es el último elemento (página actual)
          const isLast = index === pathnames.length - 1;

          return (
            <li key={name} aria-current={isLast ? "page" : undefined}>
              <div className="flex items-center">
                {/* Separador (Chevron) */}
                <svg
                  className="w-3 h-3 text-gray-400 mx-1"
                  fill="none"
                  viewBox="0 0 6 10"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 9 4-4-4-4"
                  />
                </svg>

                {isLast ? (
                  // Último elemento: Es la página actual, no es un enlace
                  <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 ml-1">
                    {formatSegment(name)}
                  </span>
                ) : (
                  // Elementos intermedios: Son enlaces
                  <Link
                    to={routeTo}
                    className="text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-500 ml-1 transition duration-150"
                  >
                    {formatSegment(name)}
                  </Link>
                )}
              </div>
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
