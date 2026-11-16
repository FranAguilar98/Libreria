import useFormulario from '../hooks/useFormulario'
import CampoFormulario from '../components/CampoFormulario'
import Aviso from '../components/Aviso'
import Boton from '../components/Boton'

// Valores iniciales (también se usan para limpiar el formulario)
const formularioInicial = { nombre: '', correo: '', asunto: '', mensaje: '' }

// Opciones del campo "asunto"
const asuntos = [
  { valor: 'consulta', texto: 'Consulta sobre un libro' },
  { valor: 'pedido', texto: 'Pedido especial' },
  { valor: 'reclamo', texto: 'Reclamo o sugerencia' },
]

// Validación de campos: retorna los errores encontrados
const validar = (valores) => {
  const errores = {}
  if (valores.nombre.trim().length < 3) errores.nombre = 'Ingresa tu nombre (mínimo 3 caracteres).'
  if (!/^\S+@\S+\.\S+$/.test(valores.correo)) errores.correo = 'Ingresa un correo válido.'
  if (!valores.asunto) errores.asunto = 'Selecciona un asunto.'
  if (valores.mensaje.trim().length < 10) errores.mensaje = 'El mensaje debe tener al menos 10 caracteres.'
  return errores
}

// Página de contacto con formulario validado en el cliente
function Contacto() {
  const { valores, errores, enviado, handleChange, handleSubmit } =
    useFormulario(formularioInicial, validar)

  return (
    <div className="tw:grid tw:gap-8 tw:md:grid-cols-5">
      {/* Datos de contacto */}
      <div className="tw:md:col-span-2">
        <h2 className="tw:text-2xl tw:font-semibold tw:mb-3">Contacto</h2>
        <p className="tw:mb-4">¿Buscas un título en particular? Escríbenos y te ayudamos.</p>
        <ul className="tw:space-y-1">
          <li><strong>Dirección:</strong> Av. Libertador Bernardo O'Higgins 1234, Santiago</li>
          <li><strong>Teléfono:</strong> +56 2 2345 6789</li>
          <li><strong>Correo:</strong> contacto@infinito.cl</li>
          <li><strong>Horario:</strong> lunes a sábado, 10:00 a 19:00 hrs</li>
        </ul>
      </div>

      {/* Formulario (noValidate desactiva la validación nativa del navegador) */}
      <form
        onSubmit={handleSubmit}
        noValidate
        className="tw:md:col-span-3 tw:bg-white tw:rounded-lg tw:shadow-md tw:border-t-4 tw:border-t-rosa tw:border-b-4 tw:border-b-amarillo tw:p-6"
      >
        <h3 className="tw:text-lg tw:font-semibold tw:mb-4">Envíanos un mensaje</h3>

        {/* Confirmación de envío */}
        {enviado && (
          <Aviso tipo="success">Mensaje enviado correctamente. Te responderemos pronto.</Aviso>
        )}

        <CampoFormulario id="nombre" etiqueta="Nombre" valor={valores.nombre}
          onChange={handleChange} error={errores.nombre} />

        <CampoFormulario id="correo" etiqueta="Correo electrónico" tipo="email" valor={valores.correo}
          onChange={handleChange} error={errores.correo} />

        <CampoFormulario id="asunto" etiqueta="Asunto" tipo="select" opciones={asuntos}
          valor={valores.asunto} onChange={handleChange} error={errores.asunto} />

        <CampoFormulario id="mensaje" etiqueta="Mensaje" tipo="textarea" valor={valores.mensaje}
          onChange={handleChange} error={errores.mensaje} />

        <Boton type="submit">Enviar mensaje</Boton>
      </form>
    </div>
  )
}

export default Contacto
