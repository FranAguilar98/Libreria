import { useState } from 'react'

// Hook para formularios controlados con validación
// validar(valores) debe retornar un objeto { campo: 'mensaje de error' }
export default function useFormulario(valoresIniciales, validar) {
  const [valores, setValores] = useState(valoresIniciales)
  const [errores, setErrores] = useState({})
  const [enviado, setEnviado] = useState(false)

  // Actualiza el campo modificado según su atributo "name"
  const handleChange = (e) => {
    setValores({ ...valores, [e.target.name]: e.target.value })
    setEnviado(false)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const nuevos = validar(valores)
    setErrores(nuevos)

    // Sin errores: confirma el envío y limpia el formulario
    if (Object.keys(nuevos).length === 0) {
      setEnviado(true)
      setValores(valoresIniciales)
    }
  }

  return { valores, errores, enviado, handleChange, handleSubmit }
}
