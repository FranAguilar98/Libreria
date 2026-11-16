import useLibreria from '../hooks/useLibreria'
import TarjetaCategoria from '../components/TarjetaCategoria'
import Boton from '../components/Boton'

// Página de inicio: banner y categorías
function Inicio() {
  const { categorias } = useLibreria()

  return (
    <>
      {/* Banner de bienvenida */}
      <section className="tw:bg-linear-to-br tw:from-rosa tw:to-rosa-oscuro tw:text-white tw:text-center tw:rounded-2xl tw:border-b-8 tw:border-amarillo tw:px-6 tw:py-14 tw:mb-12">
        <h1 className="tw:text-4xl tw:font-bold tw:mb-3">Bienvenido a Infinito</h1>
        <p className="tw:text-xl tw:mb-6">Explora nuestras categorías y comienza la aventura.</p>
        <Boton to="/categorias" variante="amarillo" tamano="grande">
          Explorar categorías
        </Boton>
      </section>

      {/* Listado de categorías */}
      <h2 className="tw:text-2xl tw:font-semibold tw:mb-4">Nuestras categorías</h2>
      <div className="tw:grid tw:gap-6 tw:sm:grid-cols-2 tw:lg:grid-cols-3">
        {categorias.map((categoria) => (
          <TarjetaCategoria key={categoria.id} categoria={categoria} />
        ))}
      </div>
    </>
  )
}

export default Inicio
