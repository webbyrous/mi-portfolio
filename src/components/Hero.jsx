import { useState } from "react";
import FotoPerfil from "../assets/foto_perfil.png";
import { FaFileDownload, FaChevronDown } from "react-icons/fa";
import CVEspañol from "../assets/CV_Rosario_Bernal_ES.pdf";
import CVEnglish from "../assets/CV_Rosario_Bernal_EN.pdf";

export default function Hero() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section
      className="bg-peach dark:bg-dark-bg-strong transition-colors duration-300 scroll-mt-20"
      id="inicio"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 px-6 py-12 font-family max-w-6xl mx-auto items-center gap-10">
        <div className="flex flex-col gap-4 order-2 lg:order-1 text-center lg:text-left">
          <h1 className=" dark:text-grey-medium lg:pt-7 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-slate-800 leading-tight lg:max-w-md">
            Hola, soy{" "}
            <span className="text-pink dark:text-dark-pink font-semibold">
              Rosario
            </span>
            , Desarrolladora Web Junior
          </h1>
          <p className="dark:text-grey-medium text-slate-900 text-base md:text-lg leading-relaxed">
            Apasionada del diseño web y la lógica frontend. Me encantan los
            desafíos que me impulsan a aprender, superarme y transformar ideas
            en experiencias web atractivas y funcionales.
          </p>
          {/* Botón con Menú Flotante */}
          <div className="relative inline-block max-w-[210px] mx-auto lg:mx-0 z-30">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="px-6 py-3 w-full bg-pink/80 dark:bg-pink/85 text-white font-bold rounded-xl shadow-md hover:bg-pink flex items-center justify-center gap-2 dark:hover:bg-pink transition-all duration-300 hover:scale-105 "
            >
              <FaFileDownload aria-hidden="true" />
              Descargar CV
              <FaChevronDown
                aria-hidden="true"
                className={`text-xs transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
              />
            </button>

            {/* Menú Desplegable Flotante */}
            {isOpen && (
              <div className="absolute left-0 top-full max-w-[210px] w-full mt-1 flex flex-col bg-white dark:bg-[#2a2625] text-slate-800 dark:text-gray-200 rounded-xl border border-pink/20 dark:border-dark-pink/35 shadow-2xl overflow-hidden p-1.5 z-50">
                <a
                  href={CVEspañol}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 w-full text-left px-4 py-2.5 rounded-lg hover:bg-pink/20 dark:hover:bg-pink/30 hover:text-pink dark:hover:text-dark-pink transition-all duration-200 text-sm font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  <span>Español (PDF)</span>
                </a>
                <a
                  href={CVEnglish}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 w-full text-left px-4 py-2.5 rounded-lg hover:bg-pink/20 dark:hover:bg-pink/30 hover:text-pink dark:hover:text-dark-pink transition-all duration-200 text-sm font-medium border-t border-slate-100 dark:border-dark-pink/20 mt-1"
                  onClick={() => setIsOpen(false)}
                >
                  <span>English (PDF)</span>
                </a>
              </div>
            )}
          </div>
        </div>
        <div
          className="relative w-full max-w-[240px] h-[320px]
                sm:max-w-[340px] sm:h-[420px] lg:max-w-[400px] lg:h-[480px] mx-auto flex items-center justify-center p-4 order-1 lg:order-2"
        >
          <div className="absolute inset-2 sm:inset-0 bg-pink/60 dark:bg-pink/90 rounded-3xl rotate-6 sm:rotate-10 translate-y-2 max-h-[450px]" />
          <div className="relative z-1 w-full h-full bg-white dark:bg-dark-bg-strong/75 dark:backdrop-blur-md dark:border dark:border-dark-pink/30 p-3 rounded-xl shadow-xl">
            <img
              src={FotoPerfil}
              alt="Foto de Rosario, Desarrolladora Web Junior"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
