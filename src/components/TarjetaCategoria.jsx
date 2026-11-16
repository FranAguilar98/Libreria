import Boton from './Boton'

// Tarjeta de categoría con enlace a su listado de libros
function TarjetaCategoria({ categoria }) {
  return (
    <article className="tw:bg-white tw:rounded-lg tw:shadow-md tw:border-t-4 tw:border-t-rosa tw:border-b-4 tw:border-b-amarillo tw:p-6 tw:flex tw:flex-col tw:text-center tw:transition tw:duration-150 tw:hover:-translate-y-1 tw:hover:shadow-xl">
      <h3 className="tw:text-xl tw:font-bold tw:text-rosa-oscuro tw:mb-2">{categoria.nombre}</h3>
      <p className="tw:text-gris tw:mb-4">{categoria.descripcion}</p>
      <Boton to={`/categoria/${categoria.id}`} className="tw:mt-auto">
        Ver libros
      </Boton>
    </article>
  )
}

export default TarjetaCategoria
