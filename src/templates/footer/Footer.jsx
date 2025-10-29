const Footer = () => {
  const mainColor = "bg-blue-950";
  const textColor = "text-white";
  const hoverColor = "hover:text-indigo-300";

  const handleScroll = (e, href) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const sections = [
    {
      title: "Explorar",
      links: [
        { name: "Inicio", href: "#home" },
        { name: "Sección 1", href: "#" },
        { name: "Sección 2", href: "#" },
        { name: "Sección 3", href: "#" },
      ],
    },
    {
      title: "Contacto",
      links: [
        { name: "Sección 1", href: "#" },
        { name: "Sección 2", href: "#" },
        { name: "Sección 3", href: "#" },
        { name: "Sección 4", href: "#" },
      ],
    },
  ];

  return (
    <footer className={`${mainColor} pt-12 pb-6`}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 border-b border-indigo-700 pb-8">
          <div className="md:col-span-2 space-y-4">
            <h3 className={`text-3xl font-bold mainTitle ${textColor}`}>
              Título de la página
            </h3>
            <p className={`text-sm ${textColor} opacity-80 max-w-lg`}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, dolore rem officia asperiores vero iure, odio quo sit eius sequi nisi recusandae non consequatur provident, vel error laboriosam commodi magnam.
            </p>
          </div>
          {sections.map((section) => (
            <div key={section.title} className="space-y-4 navLinks">
              <h4 className={`text-xl font-semibold ${textColor} mb-2`}>
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={(e) => handleScroll(e, link.href)}
                      className={`text-sm ${textColor} opacity-80 transition duration-300 ${hoverColor}`}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-6 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <p className={`text-xs ${textColor} opacity-60`}>
            &copy; {new Date().getFullYear()} Lorem ipsum, dolor sit amet consect
          </p>
          <div className={`text-xs ${textColor} opacity-60 mt-3 md:mt-0`}>
            Diseñado por Andrés Santamarina
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
