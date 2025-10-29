import { motion } from "framer-motion";

const sectionVariants = {
  initial: { y: 50, opacity: 0 },
  animate: { y: 0, opacity: 1 },
};

const itemVariants = {
  initial: { x: -30, opacity: 0 },
  animate: { x: 0, opacity: 1 },
};

const HomeSections = () => {
  return (
    <div className="flex flex-col w-full bg-white text-black">
      <motion.section
        id="home"
        className="container mx-auto py-20 px-4 text-center"
        variants={sectionVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        <div className="space-y-6">
          <motion.div
            variants={itemVariants}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="mx-auto w-32 h-32 md:w-48 md:h-48 bg-gray-200 rounded-full shadow-lg flex items-center justify-center mb-6">
              <span className="text-xl text-gray-700">Logo</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-[#180F8C] tracking-tight">
              BIENVENIDOS
            </h1>
          </motion.div>
          <motion.p
            className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto"
            variants={itemVariants}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            "Título" descripción, o mensaje de bienvenida.
          </motion.p>

          <motion.a
            href="#section1"
            className="inline-block px-8 py-3 mt-4 text-white text-lg font-semibold rounded-lg bg-[#180F8C] hover:bg-indigo-700 transition duration-300 shadow-md"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1, type: "spring", stiffness: 200 }}
          >
            Ver
          </motion.a>
        </div>
      </motion.section>
      <motion.section
        id="section1"
        className="py-20 px-4 bg-gray-50 border-t border-b border-gray-200"
        variants={sectionVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="container mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800"
            variants={itemVariants}
            transition={{ duration: 0.6 }}
          >
            Sección
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <motion.div
              className="order-2 md:order-1"
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7 }}
            >
              <div className="w-full h-80 bg-gray-300 rounded-lg shadow-xl overflow-hidden">
                <p className="text-center p-4 text-gray-600">Foto</p>
              </div>
            </motion.div>
            <motion.div
              className="order-1 md:order-2 space-y-4"
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7 }}
            >
              <h3 className="text-2xl font-semibold text-gray-900">
                Información
              </h3>
              <p className="text-gray-600">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum
                alias porro voluptas beatae perspiciatis nemo et magni
                exercitationem. Laborum asperiores laudantium eveniet
                exercitationem! Saepe earum corrupti facilis veritatis quia
                autem?
              </p>
              <p className="text-gray-600">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Expedita repudiandae esse, ipsum vitae possimus voluptatum sint
                tempora, ea consectetur at in ipsam velit nisi. Nulla quidem
                dolores eum dolorem omnis.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>
      <motion.section
        id="section2"
        className="py-20 px-4"
        variants={sectionVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <div className="container mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#180F8C]"
            variants={itemVariants}
            transition={{ duration: 0.6 }}
          >
            Videos
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <motion.div
                key={item}
                className="shadow-xl rounded-lg overflow-hidden bg-black aspect-video"
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: item * 0.1 }}
              >
                <div className="w-full h-full flex items-center justify-center">
                  <p className="text-white text-lg">Video #{item} (Iframe)</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default HomeSections;
