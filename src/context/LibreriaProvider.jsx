import { useEffect, useReducer } from 'react'
import { LibreriaContext } from './LibreriaContext'
import { libreriaReducer, estadoInicial } from './libreriaReducer'
import { API_URL } from '../util/config'

// Provider: mantiene el estado global y carga los datos desde la API
export function LibreriaProvider({ children }) {
  const [estado, dispatch] = useReducer(libreriaReducer, estadoInicial)

  // Carga inicial de categorías y libros (peticiones en paralelo)
  useEffect(() => {
    const cargarDatos = async () => {
      try {
        const [resCategorias, resLibros] = await Promise.all([
          fetch(`${API_URL}/categorias`),
          fetch(`${API_URL}/libros`),
        ])

        // fetch no falla en errores HTTP, se valida el estado
        if (!resCategorias.ok || !resLibros.ok) {
          throw new Error('Error al cargar los datos')
        }

        dispatch({
          type: 'CARGA_OK',
          categorias: await resCategorias.json(),
          libros: await resLibros.json(),
        })
      } catch (error) {
        dispatch({ type: 'CARGA_ERROR', mensaje: error.message })
      }
    }

    cargarDatos()
  }, [])

  return (
    <LibreriaContext.Provider value={{ estado, dispatch }}>
      {children}
    </LibreriaContext.Provider>
  )
}
