import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import App from './App.jsx'
import { LibreriaProvider } from './context/LibreriaProvider.jsx'

// Estilos generales
import './index.css'

// Tailwind
import './tailwind.css'

// API mock (MSW): activa también en producción, ya que el sitio no tiene backend real
async function enableMocking() {
  const { worker } = await import('./mocks/browser')
  return worker.start({
    onUnhandledRequest: 'bypass',
    // Ruta del Service Worker según la ruta base del sitio
    serviceWorker: { url: `${import.meta.env.BASE_URL}mockServiceWorker.js` },
  })
}

// La app se monta una vez iniciado el mock
enableMocking().then(() => {
  createRoot(document.getElementById('root')).render(
    <StrictMode>
      <HashRouter>
        <LibreriaProvider>
          <App />
        </LibreriaProvider>
      </HashRouter>
    </StrictMode>,
  )
})
