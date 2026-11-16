import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import useLibreria from '../hooks/useLibreria'

// Estilo de cada enlace: NavLink entrega isActive para marcar la ruta actual
const claseEnlace = ({ isActive }) =>
  `tw:block tw:px-3 tw:py-2 tw:rounded-md tw:transition-colors ${
    isActive ? 'tw:text-amarillo tw:font-semibold' : 'tw:text-white tw:hover:text-amarillo'
  }`

// Barra de navegación principal
function Header() {
  // Unidades en el carrito, mostradas como contador
  const { totalUnidades } = useLibreria()

  // Menú desplegable en pantallas pequeñas
  const [abierto, setAbierto] = useState(false)
  const cerrar = () => setAbierto(false)

  return (
    <header className="tw:bg-rosa tw:border-b-4 tw:border-amarillo">
      <nav className="tw:max-w-6xl tw:mx-auto tw:px-4 tw:py-3 tw:flex tw:flex-wrap tw:items-center tw:justify-between">
        {/* Marca / enlace al inicio */}
        <Link to="/" onClick={cerrar} className="tw:text-xl tw:font-bold tw:text-white">
          Infinito
        </Link>

        {/* Botón del menú (solo visible en pantallas pequeñas) */}
        <button
          type="button"
          aria-label="Abrir menú"
          aria-expanded={abierto}
          onClick={() => setAbierto(!abierto)}
          className="tw:md:hidden tw:text-white tw:border tw:border-white/60 tw:rounded tw:px-3 tw:py-1"
        >
          Menú
        </button>

        {/* Enlaces: ocultos en móvil hasta abrir el menú, siempre visibles desde md */}
        <ul
          className={`${abierto ? 'tw:flex' : 'tw:hidden'} tw:w-full tw:flex-col tw:mt-3 tw:md:mt-0 tw:md:w-auto tw:md:flex tw:md:flex-row tw:md:gap-1`}
        >
          <li>
            <NavLink to="/" end onClick={cerrar} className={claseEnlace}>Inicio</NavLink>
          </li>
          <li>
            <NavLink to="/categorias" onClick={cerrar} className={claseEnlace}>Categorías</NavLink>
          </li>
          <li>
            <NavLink to="/carrito" onClick={cerrar} className={claseEnlace}>
              Carrito
              {/* Contador visible solo si hay unidades */}
              {totalUnidades > 0 && (
                <span className="tw:ml-2 tw:bg-amarillo tw:text-texto tw:text-xs tw:font-bold tw:rounded-full tw:px-2 tw:py-0.5">
                  {totalUnidades}
                </span>
              )}
            </NavLink>
          </li>
          <li>
            <NavLink to="/contacto" onClick={cerrar} className={claseEnlace}>Contacto</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
