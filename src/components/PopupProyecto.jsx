import { FaRegEye, FaGithub} from "react-icons/fa";
import { IoIosClose } from "react-icons/io";

export default function PopupProyecto({ proyecto, onClose }) {
  if (!proyecto) return null;
  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
      <div className="relative bg-white p-6 rounded-lg shadow-xl text-center flex flex-col gap-4 border-grey-medium  border-2">
         {/* Botón cerrar */}
             <button onClick={onClose} className="absolute top-2 text-2xl right-4 p-2 rounded-full text-slate-400 hover:text-black hover:text-3xl transition-all cursor-pointer">
                    <IoIosClose className="" />
            </button>
        <div className="flex flex-col shrink-0 w-75 sm:w-80 md:w-100 snap-center mt-8">
          {/* Imagen del proyecto */}
          <img
            src={proyecto.image}
            alt={`Captura del proyecto ${proyecto.title}`}
            className="w-full h-full object-cover object-top"
          />
          {/* Información del proyecto */}
          <div className="px-3 py-3 flex flex-col flex-1">
            <h2 className="text-lg md:text-xl font-bold pt-3">
              {proyecto.title}
            </h2>
            <p className="text-base md:text-lg">{proyecto.description}</p>
            {/* Tecnologías usadas */}
            <div className="text-sm font-medium flex flex-wrap gap-4 pt-4 justify-center">
              {proyecto.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-tag-soft/80 px-2 py-0.5 text-xs rounded-md"
                >
                  {tag}
                </span>
              ))}
            </div>
            {/* Enlaces inferiores */}
            <div className="flex justify-between py-3 items-center mt-auto pt-8">
              {/* Enlace Ver Web */}
              {proyecto.webUrl ? (
                <a
                  href={proyecto.webUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 text-sm font-semibold rounded-3xl py-1.5 px-2 hover:bg-pink/30 hover:shadow-2xs bg-pink/20 text-pink transition-all duration-200 hover:scale-105"
                >
                  <FaRegEye className="text-lg" />
                  Ver web
                </a>
              ) : (
                <span className="text-xs font-medium text-slate-400"></span>
              )}
              <div className="flex justify-center items-center gap-3">
                            {/* Enlace GitHub*/}

              {proyecto.githubUrl && (
                <a
                  href={proyecto.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Código de ${proyecto.title}`}
                  className="text-xl text-slate-600 hover:text-black transition-all duration-300 hover:scale-125"
                  title="Repositorio en GitHub"
                >
                  <FaGithub className="text-2xl" />
                </a>
              )}
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
