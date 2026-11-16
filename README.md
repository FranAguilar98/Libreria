# Librería Infinito

Actividad formativa de la semana 4: **Utilizando tecnologías de integración entre frontend y backend**.

Tienda de libros desarrollada con **React**, **React Router** y **Tailwind CSS**. Las categorías y los libros se obtienen mediante `fetch` desde una **API REST mock** implementada con **MSW (Mock Service Worker)**. El estado global se gestiona con **Context API** y **useReducer**.

Sitio publicado: https://github.com/FranAguilar98/Libreria.git

## Funcionalidades

- Exploración de categorías de libros (Romance, Misterio y Fantasía).
- Listado de libros por categoría, con portada, precio y stock.
- Carrito de compras con control de cantidad y descuento de stock.
- Formulario de contacto con validación.
- Navegación con React Router y página 404.

## Tecnologías

- React y Vite
- React Router (`HashRouter`)
- Tailwind CSS
- MSW (API REST mock)
- GitHub Pages (`gh-pages`)

## API REST mock

| Método | Ruta              | Descripción                   |
|--------|-------------------|-------------------------------|
| GET    | `/api/categorias` | Lista de categorías de libros |
| GET    | `/api/libros`     | Catálogo completo de libros   |

## Rutas de la aplicación

| Ruta             | Página                         |
|------------------|--------------------------------|
| `/`              | Inicio                         |
| `/categorias`    | Listado de categorías          |
| `/categoria/:id` | Libros de la categoría elegida |
| `/carrito`       | Carrito de compras             |
| `/contacto`      | Contacto con formulario        |
| `*`              | Página 404                     |

## Estructura del proyecto

```
src/
├── components/   # Header, Boton, Cargando, Aviso, CampoFormulario, TarjetaCategoria, TarjetaLibro, ItemCarrito
├── context/      # LibreriaContext, LibreriaProvider y libreriaReducer
├── hooks/        # useLibreria y useFormulario
├── mocks/        # MSW: browser.js y handlers.js (API REST mock)
├── pages/        # Inicio, Categorias, Categoria, Carrito, Contacto, NoEncontrado
├── util/         # config.js y formato.js
├── tailwind.css  # Tailwind y paleta de colores (@theme)
├── App.jsx       # Layout y rutas
└── main.jsx      # Arranque de MSW, Router y Provider
```

## Ejecución local

```bash
npm install
npm run dev
```

## Despliegue en GitHub Pages

```bash
npm run deploy
```

