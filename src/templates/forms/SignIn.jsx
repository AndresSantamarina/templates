import React from "react";
import { useForm } from "react-hook-form";

const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    // Reemplaza con tu lógica de autenticación (Axios)
    console.log("Datos de Inicio de Sesión:", data);
    // Simular Sweet Alert
    // Swal.fire({ icon: 'info', title: 'Intentando Iniciar Sesión...' });
  };

  return (
    <div className="max-w-sm mx-auto p-8 bg-gray-50 rounded-lg shadow-xl border border-gray-200">
      <h2 className="text-2xl font-semibold text-gray-700 mb-6 text-center">
        Acceder a tu Cuenta
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Campo Email */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            {...register("email", { required: true })}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
          {errors.email && (
            <p className="mt-1 text-xs text-red-500">Email es requerido.</p>
          )}
        </div>

        {/* Campo Contraseña */}
        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Contraseña
          </label>
          <input
            id="password"
            type="password"
            {...register("password", { required: true })}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
          {errors.password && (
            <p className="mt-1 text-xs text-red-500">
              Contraseña es requerida.
            </p>
          )}
        </div>

        {/* Enlace de recuperación (Opcional) */}
        <div className="flex items-center justify-end">
          <a
            href="#"
            className="text-sm font-medium text-blue-600 hover:text-blue-500"
          >
            ¿Olvidaste tu contraseña?
          </a>
        </div>

        {/* Botón de Envío */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 transition duration-150"
        >
          {isSubmitting ? "Iniciando..." : "Iniciar Sesión"}
        </button>
      </form>
    </div>
  );
};

export default SignIn;
