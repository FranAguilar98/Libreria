import useLibreria from '../hooks/useLibreria'
import TarjetaCategoria from '../components/TarjetaCategoria'

// Listado completo de categorías
function Categorias() {
  const { categorias } = useLibreria()

  return (
    <>
      <h2 className="tw:text-2xl tw:font-semibold tw:mb-6">Categorías de libros</h2>
      <div className="tw:grid tw:gap-6 tw:sm:grid-cols-2 tw:lg:grid-cols-3">
        {categorias.map((categoria) => (
          <TarjetaCategoria key={categoria.id} categoria={categoria} />
        ))}
      </div>
    </>
  )
}

export default Categorias
