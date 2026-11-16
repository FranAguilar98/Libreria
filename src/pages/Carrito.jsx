import useLibreria from '../hooks/useLibreria'
import ItemCarrito from '../components/ItemCarrito'
import Boton from '../components/Boton'
import { formatearPrecio } from '../util/formato'

// Carrito de compras
function Carrito() {
  const { carrito, totalPrecio, vaciarCarrito } = useLibreria()

  // Carrito sin productos
  if (carrito.length === 0) {
    return (
      <div className="tw:text-center tw:py-16">
        <h2 className="tw:text-2xl tw:font-semibold tw:mb-2">Tu carrito está vacío</h2>
        <p className="tw:text-gris tw:mb-6">Explora las categorías y agrega tus libros favoritos.</p>
        <Boton to="/categorias">Explorar categorías</Boton>
      </div>
    )
  }

  return (
    <>
      <h2 className="tw:text-2xl tw:font-semibold tw:mb-6">Carrito</h2>

      {carrito.map((item) => (
        <ItemCarrito key={item.id} item={item} />
      ))}

      {/* Total y acciones */}
      <div className="tw:flex tw:justify-between tw:items-center tw:mt-6">
        <h3 className="tw:text-xl tw:font-bold">Total: {formatearPrecio(totalPrecio)}</h3>
        <Boton variante="contorno" onClick={vaciarCarrito}>Vaciar carrito</Boton>
      </div>
    </>
  )
}

export default Carrito
