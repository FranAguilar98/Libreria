import { setupWorker } from 'msw/browser'
import { handlers } from './handlers'

// Service Worker que intercepta las peticiones y responde con los handlers
export const worker = setupWorker(...handlers)
