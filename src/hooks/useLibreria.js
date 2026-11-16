import { useContext } from 'react'
import { LibreriaContext } from '../context/LibreriaContext'

// Hook de acceso al estado de la librería y a sus acciones
export default function useLibreria() {
  const { estado, dispatch } = useContext(LibreriaContext)
  const { categorias, libros, carrito, cargando, error } = estado

  // Líneas del carrito combinadas con los datos completos de cada libro
  const itemsCarrito = carrito.map((linea) => ({
    ...libros.find((l) => l.id === linea.id),
    cantidad: linea.cantidad,
  }))

  // Totales del carrito
  const totalUnidades = carrito.reduce((total, l) => total + l.cantidad, 0)
  const totalPrecio = itemsCarrito.reduce((total, i) => total + i.precio * i.cantidad, 0)

  return {
    categorias,
    libros,
    carrito: itemsCarrito,
    cargando,
    error,
    totalUnidades,
    totalPrecio,
    // Acciones
    agregarAlCarrito: (id) => dispatch({ type: 'AGREGAR_AL_CARRITO', id }),
    quitarUnidad: (id) => dispatch({ type: 'QUITAR_UNIDAD', id }),
    quitarDelCarrito: (id) => dispatch({ type: 'QUITAR_DEL_CARRITO', id }),
    vaciarCarrito: () => dispatch({ type: 'VACIAR_CARRITO' }),
  }
}
