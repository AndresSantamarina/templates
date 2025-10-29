import React from 'react';
import { Mail, Briefcase, Phone, MapPin } from 'lucide-react';

const UserProfile = ({ user }) => {
  
  // Datos de ejemplo predeterminados para la estructura
  const defaultUser = {
    name: 'Jane Doe',
    title: 'Desarrolladora Full Stack',
    imageUrl: "https://placehold.co/600x400", // Imagen de avatar aleatoria
    bio: 'Apasionada por React, Tailwind y las soluciones escalables. Me enfoco en la experiencia de usuario y la optimización del rendimiento.',
    email: 'jane.doe@ejemplo.com',
    phone: '+52 55 1234 5678',
    location: 'Ciudad de México, México',
    skills: ['React', 'Tailwind CSS', 'Node.js', 'MongoDB', 'Axios', 'RHF'],
    projects: 5,
  };

  const currentUser = user || defaultUser;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-2xl border-t-4 border-indigo-500">
      
      {/* 1. Encabezado del Perfil y Foto */}
      <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-8 pb-6 border-b border-gray-200">
        
        {/* Imagen de Perfil */}
        <div className="flex-shrink-0">
          <img
            className="w-32 h-32 object-cover rounded-full border-4 border-white shadow-lg"
            src={currentUser.imageUrl}
            alt={`Foto de perfil de ${currentUser.name}`}
          />
        </div>
        
        {/* Información Básica */}
        <div className="text-center md:text-left flex-grow">
          <h1 className="text-3xl font-bold text-gray-900">
            {currentUser.name}
          </h1>
          <p className="text-xl text-indigo-600 font-medium mt-1 flex items-center justify-center md:justify-start">
            <Briefcase className="w-5 h-5 mr-2" />
            {currentUser.title}
          </p>
          <p className="mt-3 text-gray-600 italic">
            "{currentUser.bio}"
          </p>
        </div>

      </div>

      {/* 2. Detalles de Contacto */}
      <div className="mt-6 space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800 border-b pb-2 mb-4">
          Contacto y Ubicación
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700">
          <p className="flex items-center">
            <Mail className="w-5 h-5 text-indigo-500 mr-3" />
            <span className="font-semibold">Email:</span> {currentUser.email}
          </p>
          <p className="flex items-center">
            <Phone className="w-5 h-5 text-indigo-500 mr-3" />
            <span className="font-semibold">Teléfono:</span> {currentUser.phone}
          </p>
          <p className="flex items-center sm:col-span-2">
            <MapPin className="w-5 h-5 text-indigo-500 mr-3" />
            <span className="font-semibold">Ubicación:</span> {currentUser.location}
          </p>
        </div>
      </div>

      {/* 3. Habilidades (Skills) */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-gray-800 border-b pb-2 mb-4">
          Habilidades Destacadas
        </h2>
        <div className="flex flex-wrap gap-3">
          {currentUser.skills.map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 bg-indigo-100 text-indigo-700 text-sm font-medium rounded-full shadow-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
      
      {/* 4. Métrica Simple (Opcional) */}
      <div className="mt-8 pt-6 border-t border-gray-200 text-center">
        <span className="text-4xl font-extrabold text-indigo-600">
          {currentUser.projects}
        </span>
        <p className="text-gray-500 text-sm mt-1">
          Proyectos Completados
        </p>
      </div>

    </div>
  );
};

export default UserProfile;