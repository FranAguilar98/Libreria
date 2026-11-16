import { Link } from 'react-router-dom'

// Estilos base y variantes del botón
const base =
  'tw:inline-block tw:rounded-md tw:font-semibold tw:text-center tw:transition-colors tw:cursor-pointer tw:disabled:opacity-50 tw:disabled:cursor-not-allowed'

const variantes = {
  primario: 'tw:bg-rosa tw:text-white tw:hover:bg-rosa-oscuro',
  amarillo: 'tw:bg-amarillo tw:text-texto tw:hover:bg-amarillo-oscuro',
  contorno: 'tw:border tw:border-gris tw:text-texto tw:hover:bg-rosa-claro',
}

const tamanos = {
  chico: 'tw:text-sm tw:px-3 tw:py-1',
  normal: 'tw:px-4 tw:py-2',
  grande: 'tw:text-lg tw:px-6 tw:py-3',
}

// Botón reutilizable: con "to" funciona como enlace, sin "to" como botón
function Boton({ variante = 'primario', tamano = 'normal', to, className = '', children, ...props }) {
  const clases = `${base} ${variantes[variante]} ${tamanos[tamano]} ${className}`

  if (to) {
    return <Link to={to} className={clases} {...props}>{children}</Link>
  }

  return <button type="button" className={clases} {...props}>{children}</button>
}

export default Boton
