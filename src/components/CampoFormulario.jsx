// Campo de formulario reutilizable: input, textarea o select con su error
// opciones: [{ valor, texto }] (solo para tipo "select")
function CampoFormulario({ id, etiqueta, tipo = 'text', valor, onChange, error, opciones = [] }) {
  // Borde rojo si el campo tiene error.
  const clase = `tw:w-full tw:rounded-md tw:border tw:bg-white tw:px-3 tw:py-2 tw:focus:outline-none tw:focus:ring-2 tw:focus:ring-rosa ${
    error ? 'tw:border-red-500' : 'tw:border-gray-300'
  }`

  return (
    <div className="tw:mb-4">
      <label htmlFor={id} className="tw:block tw:mb-1 tw:font-medium">{etiqueta}</label>

      {tipo === 'textarea' ? (
        <textarea id={id} name={id} rows="4" className={clase} value={valor} onChange={onChange} />
      ) : tipo === 'select' ? (
        <select id={id} name={id} className={clase} value={valor} onChange={onChange}>
          <option value="">Selecciona una opción</option>
          {opciones.map((o) => (
            <option key={o.valor} value={o.valor}>{o.texto}</option>
          ))}
        </select>
      ) : (
        <input id={id} name={id} type={tipo} className={clase} value={valor} onChange={onChange} />
      )}

      {error && <p className="tw:text-sm tw:text-red-600 tw:mt-1">{error}</p>}
    </div>
  )
}

export default CampoFormulario
