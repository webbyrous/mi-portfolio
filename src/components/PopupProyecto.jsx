
export default function PopupProyecto({proyecto}) {
    if (!proyecto) return null;
  return (
    <div>
        <h2>PRUEBA {proyecto.title}</h2>
    </div>
  )
}
