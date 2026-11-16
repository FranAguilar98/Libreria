import Boton from '../components/Boton'

// Página 404 para rutas o categorías inexistentes
function NoEncontrado() {
  return (
    <div className="tw:text-center tw:py-16">
      <h2 className="tw:text-2xl tw:font-semibold tw:mb-2">404 - Página no encontrada</h2>
      <p className="tw:text-gris tw:mb-6">La página o categoría que buscas no existe.</p>
      <Boton to="/">Volver al inicio</Boton>
    </div>
  )
}

export default NoEncontrado
