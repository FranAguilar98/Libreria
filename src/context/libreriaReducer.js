// Reducer de la librería: concentra todas las reglas que cambian el estado.
// El estado tiene dos listas relacionadas:
//   libros:  catálogo general   [{ id, categoriaId, titulo, autor, precio, stock, img }]
//   carrito: líneas del carrito [{ id, cantidad }]  (el id es el del libro)
// Cada acción actualiza ambas listas juntas, así el stock siempre es coherente.

export const estadoInicial = {
  categorias: [],
  libros: [],
  carrito: [],
  cargando: true,
  error: null,
}

// Devuelve el catálogo sumando "cantidad" unidades de stock al libro "id"
const sumarStock = (libros, id, cantidad) =>
  libros.map((l) => (l.id === id ? { ...l, stock: l.stock + cantidad } : l))

export function libreriaReducer(estado, accion) {
  switch (accion.type) {
    // Datos recibidos desde la API
    case 'CARGA_OK':
      return {
        ...estado,
        categorias: accion.categorias,
        libros: accion.libros,
        cargando: false,
        error: null,
      }

    case 'CARGA_ERROR':
      return { ...estado, cargando: false, error: accion.mensaje }

    // Agregar al carrito (o aumentar la cantidad): resta 1 al stock
    case 'AGREGAR_AL_CARRITO': {
      const libro = estado.libros.find((l) => l.id === accion.id)
      if (!libro || libro.stock <= 0) return estado // no hay stock

      const enCarrito = estado.carrito.some((linea) => linea.id === accion.id)
      const carrito = enCarrito
        ? estado.carrito.map((l) => (l.id === accion.id ? { ...l, cantidad: l.cantidad + 1 } : l))
        : [...estado.carrito, { id: accion.id, cantidad: 1 }]

      return { ...estado, carrito, libros: sumarStock(estado.libros, accion.id, -1) }
    }

    // Disminuir la cantidad: devuelve 1 al stock (si llega a 0, sale del carrito)
    case 'QUITAR_UNIDAD': {
      const linea = estado.carrito.find((l) => l.id === accion.id)
      if (!linea) return estado

      const carrito =
        linea.cantidad <= 1
          ? estado.carrito.filter((l) => l.id !== accion.id)
          : estado.carrito.map((l) => (l.id === accion.id ? { ...l, cantidad: l.cantidad - 1 } : l))

      return { ...estado, carrito, libros: sumarStock(estado.libros, accion.id, 1) }
    }

    // Quitar el libro completo: devuelve todas sus unidades al stock
    case 'QUITAR_DEL_CARRITO': {
      const linea = estado.carrito.find((l) => l.id === accion.id)
      if (!linea) return estado

      return {
        ...estado,
        carrito: estado.carrito.filter((l) => l.id !== accion.id),
        libros: sumarStock(estado.libros, accion.id, linea.cantidad),
      }
    }

    // Vaciar el carrito: devuelve todo al catálogo
    case 'VACIAR_CARRITO': {
      const libros = estado.carrito.reduce(
        (lista, linea) => sumarStock(lista, linea.id, linea.cantidad),
        estado.libros,
      )
      return { ...estado, carrito: [], libros }
    }

    default:
      return estado
  }
}
