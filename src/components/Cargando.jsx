// Indicador de carga reutilizable
function Cargando({ mensaje = 'Cargando...' }) {
  return (
    <div className="tw:flex tw:flex-col tw:items-center tw:py-16">
      <div
        role="status"
        className="tw:size-12 tw:rounded-full tw:border-4 tw:border-rosa-claro tw:border-t-rosa tw:animate-spin"
      >
        <span className="tw:sr-only">{mensaje}</span>
      </div>
      <p className="tw:mt-4 tw:text-gris">{mensaje}</p>
    </div>
  )
}

export default Cargando
