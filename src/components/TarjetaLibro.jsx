import useLibreria from '../hooks/useLibreria'
import Boton from './Boton'
import { formatearPrecio } from '../util/formato'

// Tarjeta de libro con portada, stock y acciones del carrito
function TarjetaLibro({ libro }) {
  const { carrito, agregarAlCarrito, quitarDelCarrito } = useLibreria()
  const sinStock = libro.stock <= 0

  // Línea del carrito correspondiente a este libro
  const enCarrito = carrito.find((item) => item.id === libro.id)

  return (
    <article className="tw:bg-white tw:rounded-lg tw:shadow-md tw:p-4 tw:flex tw:items-center tw:gap-4">
      {/* Portada */}
      <img src={libro.img} alt={libro.titulo} className="tw:w-20 tw:h-28 tw:object-cover tw:rounded" />

      {/* Título, autor y stock disponible */}
      <div className="tw:flex-1">
        <h3 className="tw:text-lg tw:font-semibold">{libro.titulo}</h3>
        <p className="tw:text-gris">{libro.autor}</p>
        <p className="tw:text-sm tw:text-gris">{sinStock ? 'Sin stock' : `Stock: ${libro.stock}`}</p>
        {/* Unidades de este libro en el carrito */}
        {enCarrito && <p className="tw:text-sm tw:text-gris">En el carrito: {enCarrito.cantidad}</p>}
      </div>

      {/* Precio y acciones (agregar se deshabilita sin stock) */}
      <div className="tw:flex tw:flex-col tw:items-end tw:gap-2">
        <span className="tw:bg-amarillo tw:text-texto tw:font-bold tw:rounded-full tw:px-3 tw:py-1">
          {formatearPrecio(libro.precio)}
        </span>
        <div className="tw:flex tw:gap-1">
          <Boton tamano="chico" disabled={sinStock} onClick={() => agregarAlCarrito(libro.id)}>
            Agregar
          </Boton>
          {/* Quitar: solo visible si el libro está en el carrito */}
          {enCarrito && (
            <Boton tamano="chico" variante="contorno" onClick={() => quitarDelCarrito(libro.id)}>
              Quitar
            </Boton>
          )}
        </div>
      </div>
    </article>
  )
}

export default TarjetaLibro
