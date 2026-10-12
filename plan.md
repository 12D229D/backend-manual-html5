# Plan: Manual y Guía de Backend (HTML5 / CSS3 / JavaScript)

## 📌 Resumen
Manual técnico interactivo orientado al aprendizaje y referencia de desarrollo backend moderno. Cubre el ecosistema Node.js, Express.js, Bases de Datos (SQL y NoSQL/ORM Prisma/Mongoose), Autenticación & JWT y Despliegue/DevOps (Docker, CI/CD, PM2).

## 🎯 Objetivos
- [x] Guiar en la arquitectura cliente-servidor de 3 capas, patrones MVC/Clean Architecture y middlewares HTTP.
- [x] Enseñar gestión asíncrona, Event Loop de Node.js, módulos ESM vs CommonJS y seguridad backend.
- [x] Incluir un **Simulador interactivo de Servidor Backend** (consola con logs HTTP, arranque y parada en vivo).
- [x] Proveer temas dinámicos claro/oscuro, buscador rápido y snippets copiables.

---

## 🏗️ Arquitectura

- **Patrón**: SPA modular con simulador de logs de servidor y consola interactiva.

`	ext
manual-backend-html5/
├── index.html                # Visión general + Simulador de servidor backend
├── backend/
│   ├── nodejs.html           # Node.js, Event Loop, módulos y npm
│   ├── express.html          # Express.js, rutas, middlewares y error handlers
│   ├── databases.html        # PostgreSQL, MongoDB, Mongoose, Prisma y transacciones
│   ├── auth.html             # Bcrypt, JWT, Refresh Tokens y seguridad
│   └── deploy.html           # Docker, Compose, PM2, GitHub Actions y Nginx
├── css/
│   └── styles.css            # Estilos, temas claro/oscuro y layout responsive
├── js/
│   └── app.js                # Router, tema, buscador y consola del simulador
├── README.md                 # Guía general de uso
└── plan.md                   # Bitácora de desarrollo
`

---

## 🧠 Paradigma de Programación

- **Híbrido: Declarativo + Event-Driven**
- Vistas declarativas y reactividad por eventos DOM para el simulador de consola y logs de peticiones HTTP.

---

## 🌐 Propósito de Visibilidad y Destino Remoto

- **Visibilidad**: Público (Open Source / Portafolio).
- **Plataforma Remota Asignada**: GitHub.
- **Plataforma de Despliegue CI/CD**: GitHub Pages / Cloudflare Pages.
- **Justificación**: Manual pedagógico interactivo de arquitectura backend, Node.js y bases de datos con simulador de servidor en navegador; ideal para GitHub Pages.

---

## 📊 Estado Actual

🟢 **Completado** — Entregable funcional y verificado.
