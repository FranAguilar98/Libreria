import useLibreria from '../hooks/useLibreria'
import Boton from './Boton'
import { formatearPrecio } from '../util/formato'

// Línea del carrito: permite cambiar la cantidad o quitar el libro
function ItemCarrito({ item }) {
  const { agregarAlCarrito, quitarUnidad, quitarDelCarrito } = useLibreria()

  return (
    <article className="tw:bg-white tw:rounded-lg tw:shadow-md tw:p-4 tw:mb-4 tw:flex tw:flex-wrap tw:items-center tw:gap-4">
      <img src={item.img} alt={item.titulo} className="tw:w-16 tw:h-24 tw:object-cover tw:rounded" />

      <div className="tw:flex-1">
        <h3 className="tw:text-lg tw:font-semibold">{item.titulo}</h3>
        <p className="tw:text-gris">{formatearPrecio(item.precio)} c/u</p>
      </div>

      {/* Control de cantidad (+ se deshabilita al agotar el stock) */}
      <div className="tw:flex tw:items-center tw:gap-2">
        <Boton tamano="chico" variante="contorno" onClick={() => quitarUnidad(item.id)}>-</Boton>
        <span className="tw:w-6 tw:text-center">{item.cantidad}</span>
        <Boton tamano="chico" variante="contorno" disabled={item.stock <= 0} onClick={() => agregarAlCarrito(item.id)}>
          +
        </Boton>
      </div>

      {/* Subtotal y eliminación de la línea */}
      <strong>{formatearPrecio(item.precio * item.cantidad)}</strong>
      <Boton tamano="chico" variante="contorno" onClick={() => quitarDelCarrito(item.id)}>
        Quitar
      </Boton>
    </article>
  )
}

export default ItemCarrito
