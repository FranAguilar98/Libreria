import { http, HttpResponse, delay } from 'msw'
import { API_URL, img } from '../util/config'

// Datos simulados de categorías
const categorias = [
  {
    id: 1,
    nombre: 'Romance',
    descripcion: 'Historias de amor, desde los grandes clásicos hasta relatos contemporáneos.',
  },
  {
    id: 2,
    nombre: 'Misterio',
    descripcion: 'Enigmas, detectives e intrigas que te mantienen en vilo hasta la última página.',
  },
  {
    id: 3,
    nombre: 'Fantasía',
    descripcion: 'Mundos mágicos, criaturas legendarias y grandes aventuras épicas.',
  },
]

// Datos simulados de libros, relacionados con su categoría por categoriaId
const libros = [
  // Romance
  { id: 1, categoriaId: 1, titulo: 'Orgullo y prejuicio', autor: 'Jane Austen', precio: 10990, stock: 5, img: img('orgullo-prejuicio.jpg') },
  { id: 2, categoriaId: 1, titulo: 'El amor en los tiempos del cólera', autor: 'Gabriel García Márquez', precio: 13990, stock: 4, img: img('amor-colera.jpg') },
  { id: 3, categoriaId: 1, titulo: 'Heartstopper', autor: 'Alice Oseman', precio: 12990, stock: 6, img: img('heartstopper.webp') },
  // Misterio
  { id: 4, categoriaId: 2, titulo: 'Sherlock Holmes', autor: 'Arthur Conan Doyle', precio: 11990, stock: 3, img: img('sherlock-holmes.jpg') },
  { id: 5, categoriaId: 2, titulo: 'Ciudad de cristal', autor: 'Paul Auster', precio: 12490, stock: 2, img: img('ciudad-cristal.jpg') },
  // Fantasía
  { id: 6, categoriaId: 3, titulo: 'El Señor de los Anillos', autor: 'J. R. R. Tolkien', precio: 24990, stock: 4, img: img('senor-anillos.jpg') },
  { id: 7, categoriaId: 3, titulo: 'El Hobbit', autor: 'J. R. R. Tolkien', precio: 11990, stock: 5, img: img('hobbit.webp') },
  { id: 8, categoriaId: 3, titulo: 'Las crónicas de Narnia', autor: 'C. S. Lewis', precio: 19990, stock: 3, img: img('narnia.webp') },
]

// Endpoints REST simulados (delay emula la latencia de red)
export const handlers = [
  // GET /api/categorias: lista de categorías
  http.get(`${API_URL}/categorias`, async () => {
    await delay(1500)
    return HttpResponse.json(categorias)
  }),

  // GET /api/libros: catálogo completo de libros
  http.get(`${API_URL}/libros`, async () => {
    await delay(800)
    return HttpResponse.json(libros)
  }),
]
