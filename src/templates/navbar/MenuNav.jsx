import { useState } from "react";
import { motion } from "framer-motion";

const MenuNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [
    { name: "Inicio", href: "#home" },
    { name: "Sección 1", href: "#section1" },
    { name: "Sección 2", href: "#section2" },
    { name: "Sección 3", href: "#section3" },
    { name: "Contacto", href: "#contact" },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

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
    setIsOpen(false);
  };

  const navAnimation = {
    initial: { y: -100, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { type: "spring", stiffness: 100, damping: 20, delay: 0.1 },
  };

  return (
    <motion.nav
      className="bg-blue-950 p-3 sticky top-0 z-50 shadow-xl"
      {...navAnimation}
    >
      <div className="container mx-auto flex justify-between items-center">
        <a
          href="#top"
          className="text-white text-xl md:text-2xl font-bold tracking-wider mainTitle"
          onClick={(e) => handleScroll(e, "#home")}
        >
          Título
        </a>
        <div className="hidden md:flex space-x-6 navLinks">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleScroll(e, link.href)}
              className="text-white text-sm font-medium transition duration-300 py-1.5 
                        hover:text-indigo-300"
            >
              {link.name}
            </a>
          ))}
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none p-2 rounded-md 
                        hover:bg-indigo-700 transition duration-300"
            aria-label="Toggle navigation"
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          transition={{ duration: 0.3 }}
          className="md:hidden mt-4"
        >
          <div className="flex flex-col space-y-2">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className="text-white block p-3 rounded-md font-medium text-center 
                          transition duration-300 bg-indigo-800 
                          hover:bg-indigo-700 hover:text-indigo-300"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.2, delay: index * 0.05 }}
              >
                {link.name}
              </motion.a>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default MenuNav;
