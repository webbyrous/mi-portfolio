import { useState } from "react";

export default function Contacto() {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("Enviando mensaje...");

    const formData = new FormData(event.target);
    formData.append("access_key", "eb220001-5d2a-42ba-b8ed-10a569ac6a69");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    try {
      if (data.success) {
        setResult("Mensaje enviado con éxito! Te responderé pronto");
        event.target.reset();
      } else {
        console.error("Error", data);
        setResult(data.message | "Hubo un error al enviar el mensaje");
      }
    } catch (error) {
      console.error("Error", error);
      setResult("Error de conexión. Inténtalo de nuevo más tarde");
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div
      className="bg-peach-soft dark:bg-dark-bg-soft dark:text-slate-200 pb-6 scroll-mt-20"
      id="contacto"
    >
      <div className="font-family flex flex-col md:flex-row justify-center md:gap-10  max-w-6xl mx-auto text-center md:text-left items-center md:items-start">
        <div className="dark:text-slate-200">
          <h2 className="font-bold text-black text-2xl sm:text-3xl md:text-4xl mt-6 dark:text-slate-200">
            Contacto
          </h2>
          <p className="text-base md:text-lg">rosario.webdev@gmail.com</p>
        </div>
        <div className="flex flex-col gap-3 w-full px-6 max-w-md md:w-1/2">
          <p className="text-lg mt-6">Email</p>
          <form onSubmit={onSubmit} className="flex flex-col gap-4 w-full">
            {/* Campo honeypot anti-spam oculto */}
            <input
              type="checkbox"
              name="botcheck"
              className="hidden"
              style={{ display: "none" }}
            />{" "}
            <input
              type="email"
              name="email"
              className="w-full border-2 border-pink/60 dark:border-grey-medium/40 rounded-lg py-1 px-2 focus:shadow-xl focus:border-pink focus:outline-none"
              placeholder="Tu correo electrónico"
              autoComplete="email"
              required
            />
            <textarea
              name="message"
              className="w-full border-2 border-pink/60 rounded-lg py-1 px-2 focus:shadow-xl focus:outline-none focus:border-pink dark:border-grey-medium/40"
              placeholder="Mensaje"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-pink/80 rounded-lg max-w-max px-7 py-1.5 text-white hover:cursor-pointer hover:bg-pink/90 dark:bg-dark-pink/85 dark:hover:bg-dark pink hover:shadow-md mx-auto md:mx-0 transition-all duration-300 hover:scale-105"
            >
              {isSubmitting ? "Enviando..." : "Enviar"}
            </button>
            {result && (
              <p className="text-sm mt-2 text-center md:text-left font-medium text-black dark:text-pink/90">
                {result}
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
