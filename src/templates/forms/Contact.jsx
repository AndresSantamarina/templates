import React from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2"; // Asumiendo que usarás Sweet Alert

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    console.log("Mensaje de Contacto:", data);

    // 1. Simular envío (Axios)
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // 2. Mostrar Sweet Alert (¡Éxito!)
    Swal.fire({
      icon: "success",
      title: "Mensaje Enviado",
      text: "¡Gracias por contactarnos! Te responderemos pronto.",
      confirmButtonText: "Cerrar",
    });

    // 3. Limpiar el formulario
    reset();
  };

  return (
    <div className="max-w-2xl mx-auto p-10 bg-white rounded-lg shadow-2xl border-t-4 border-teal-500">
      <h2 className="text-3xl font-bold text-teal-700 mb-8">Contáctanos 💬</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Campo Nombre */}
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Nombre Completo
          </label>
          <input
            id="name"
            type="text"
            {...register("name", { required: "Tu nombre es obligatorio" })}
            className={`mt-1 block w-full px-3 py-2 border ${
              errors.name ? "border-red-500" : "border-gray-300"
            } rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500`}
          />
          {errors.name && (
            <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>
          )}
        </div>

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
            {...register("email", { required: "El email es obligatorio" })}
            className={`mt-1 block w-full px-3 py-2 border ${
              errors.email ? "border-red-500" : "border-gray-300"
            } rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500`}
          />
          {errors.email && (
            <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>
          )}
        </div>

        {/* Campo Select (Motivo) */}
        <div>
          <label
            htmlFor="reason"
            className="block text-sm font-medium text-gray-700"
          >
            Motivo de Contacto
          </label>
          <select
            id="reason"
            {...register("reason", { required: "Selecciona un motivo" })}
            className={`mt-1 block w-full pl-3 pr-10 py-2 text-base border ${
              errors.reason ? "border-red-500" : "border-gray-300"
            } focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm rounded-md`}
          >
            <option value="">-- Selecciona una opción --</option>
            <option value="soporte">Soporte Técnico</option>
            <option value="ventas">Ventas / Cotización</option>
            <option value="general">Consulta General</option>
          </select>
          {errors.reason && (
            <p className="mt-1 text-xs text-red-500">{errors.reason.message}</p>
          )}
        </div>

        {/* Campo Mensaje (Textarea) */}
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700"
          >
            Mensaje
          </label>
          <textarea
            id="message"
            rows="4"
            {...register("message", {
              required: "El mensaje es obligatorio",
              minLength: {
                value: 10,
                message: "El mensaje debe tener al menos 10 caracteres",
              },
            })}
            className={`mt-1 block w-full px-3 py-2 border ${
              errors.message ? "border-red-500" : "border-gray-300"
            } rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500`}
          />
          {errors.message && (
            <p className="mt-1 text-xs text-red-500">
              {errors.message.message}
            </p>
          )}
        </div>

        {/* Botón de Envío */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 disabled:opacity-50 transition duration-150"
        >
          {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
        </button>
      </form>
    </div>
  );
};

export default Contact;
