// URL base de la API (considera la ruta base de Vite)
export const API_URL = `${import.meta.env.BASE_URL}api`

// Ruta de las imágenes en /public/img
export const img = (archivo) => `${import.meta.env.BASE_URL}img/${archivo}`
