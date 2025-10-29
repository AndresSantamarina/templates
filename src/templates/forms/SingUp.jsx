import React from "react";
import { useForm } from "react-hook-form";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  // Función para manejar el envío (aquí usarías Axios para el backend)
  const onSubmit = async (data) => {
    // Simulación de envío (reemplaza esto con tu llamada a Axios)
    console.log("Datos de Registro:", data);

    // Simular un Sweet Alert exitoso
    // Si estás usando Sweet Alert, podrías hacer algo como:
    // Swal.fire({ icon: 'success', title: 'Registro Exitoso', text: '¡Bienvenido!' });
  };

  return (
    <div className="max-w-md mx-auto p-8 bg-white rounded-xl shadow-2xl">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        Crear Cuenta 🚀
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
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
            placeholder="tu.email@ejemplo.com"
            {...register("email", {
              required: "El email es obligatorio",
              pattern: {
                value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "Formato de email inválido",
              },
            })}
            className={`mt-1 block w-full px-3 py-2 border ${
              errors.email ? "border-red-500" : "border-gray-300"
            } rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500`}
          />
          {errors.email && (
            <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>
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
            placeholder="Mínimo 8 caracteres"
            {...register("password", {
              required: "La contraseña es obligatoria",
              minLength: {
                value: 8,
                message: "La contraseña debe tener al menos 8 caracteres",
              },
            })}
            className={`mt-1 block w-full px-3 py-2 border ${
              errors.password ? "border-red-500" : "border-gray-300"
            } rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500`}
          />
          {errors.password && (
            <p className="mt-1 text-xs text-red-500">
              {errors.password.message}
            </p>
          )}
        </div>

        {/* Botón de Envío */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 transition duration-150"
        >
          {isSubmitting ? "Registrando..." : "Registrarse"}
        </button>
      </form>
    </div>
  );
};

export default SignUp;
