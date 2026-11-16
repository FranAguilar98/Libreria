import { Routes, Route } from 'react-router-dom'
import useLibreria from './hooks/useLibreria'
import Header from './components/Header'
import Cargando from './components/Cargando'
import Aviso from './components/Aviso'
import Inicio from './pages/Inicio'
import Categorias from './pages/Categorias'
import Categoria from './pages/Categoria'
import Carrito from './pages/Carrito'
import Contacto from './pages/Contacto'
import NoEncontrado from './pages/NoEncontrado'

// Componente raíz: define el layout y las rutas
function App() {
  // Estado de la carga inicial (los datos viven en el contexto)
  const { cargando, error } = useLibreria()

  return (
    // Layout en columna: el pie de página queda siempre al final de la ventana
    <div className="tw:min-h-screen tw:flex tw:flex-col tw:bg-amarillo-claro tw:text-texto">
      <Header />

      <main className="tw:flex-1 tw:w-full tw:max-w-6xl tw:mx-auto tw:px-4 tw:py-8">
        {/* Estados: carga, error o contenido */}
        {cargando ? (
          <Cargando />
        ) : error ? (
          <Aviso tipo="danger">No se pudieron cargar los datos. {error}</Aviso>
        ) : (
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/categorias" element={<Categorias />} />
            {/* :id identifica la categoría seleccionada */}
            <Route path="/categoria/:id" element={<Categoria />} />
            <Route path="/carrito" element={<Carrito />} />
            <Route path="/contacto" element={<Contacto />} />
            {/* Rutas no definidas */}
            <Route path="*" element={<NoEncontrado />} />
          </Routes>
        )}
      </main>

      <footer className="tw:text-center tw:py-4 tw:bg-rosa-claro tw:border-t-4 tw:border-amarillo tw:text-rosa-oscuro">
        © 2026 Librería Infinito
      </footer>
    </div>
  )
}

export default App
