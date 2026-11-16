import { Link, useParams } from 'react-router-dom'
import useLibreria from '../hooks/useLibreria'
import TarjetaLibro from '../components/TarjetaLibro'
import Boton from '../components/Boton'
import NoEncontrado from './NoEncontrado'

// Detalle de categoría: muestra sus libros
function Categoria() {
  // Id tomado de la URL (/categoria/:id)
  const { id } = useParams()
  const { categorias, libros } = useLibreria()

  const categoria = categorias.find((c) => c.id === Number(id))

  // Categoría inexistente
  if (!categoria) return <NoEncontrado />

  // Libros de la categoría actual
  const librosCategoria = libros.filter((l) => l.categoriaId === categoria.id)

  return (
    <>
      {/* Ruta de navegación */}
      <nav aria-label="breadcrumb" className="tw:mb-4 tw:text-sm tw:text-gris">
        <Link to="/categorias" className="tw:text-rosa-oscuro tw:hover:underline">Categorías</Link>
        <span className="tw:mx-2">/</span>
        <span>{categoria.nombre}</span>
      </nav>

      <h2 className="tw:text-2xl tw:font-semibold">{categoria.nombre}</h2>
      <p className="tw:text-gris tw:mb-6">{categoria.descripcion}</p>

      {librosCategoria.length === 0 ? (
        <p>No hay libros disponibles en esta categoría.</p>
      ) : (
        <div className="tw:grid tw:gap-4 tw:md:grid-cols-2">
          {librosCategoria.map((libro) => (
            <TarjetaLibro key={libro.id} libro={libro} />
          ))}
        </div>
      )}

      <Boton to="/categorias" variante="contorno" className="tw:mt-6">Volver a categorías</Boton>
    </>
  )
}

export default Categoria
