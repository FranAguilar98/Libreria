// Colores según el tipo de aviso
const tipos = {
  danger: 'tw:bg-red-100 tw:text-red-800 tw:border-red-300',
  success: 'tw:bg-green-100 tw:text-green-800 tw:border-green-300',
  info: 'tw:bg-blue-100 tw:text-blue-800 tw:border-blue-300',
}

// Mensaje de alerta reutilizable (tipo: danger, success, info)
function Aviso({ tipo = 'danger', children }) {
  return (
    <div className={`tw:border tw:rounded-md tw:px-4 tw:py-3 tw:font-semibold tw:mb-4 ${tipos[tipo]}`} role="alert">
      {children}
    </div>
  )
}

export default Aviso
