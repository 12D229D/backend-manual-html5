# Manual y Guía de Backend (HTML5 / CSS3 / JavaScript)

Un proyecto completo e interactivo desarrollado en **HTML5 Semántico**, **CSS3 (Custom Properties / Dark Mode)** y **JavaScript Vanilla (ES6+)** que sirve como manual y guía de referencia para el desarrollo backend moderno.

## 🎯 Objetivo

Aprender a diseñar, estructurar y desplegar aplicaciones backend profesionales cubriendo el stack más extendido: **Node.js + Express + Bases de Datos + Autenticación + DevOps**. Cada capítulo incluye teoría concisa, tablas comparativas, fragmentos de código copiables y un simulador interactivo.

---

## 📚 Contenido de la Guía

1. **Visión General (`index.html`)**
   - Arquitectura cliente-servidor y modelo de 3 capas.
   - Middlewares y rutas HTTP (verbos `GET`, `POST`, `PUT`, `DELETE`).
   - ORMs y capa de datos (Prisma, Sequelize, Mongoose).
   - Variables de entorno y buenas prácticas de seguridad.
   - **Simulador interactivo de servidor backend** (arranque/parada y logs en vivo).

2. **Node.js & npm (`backend/nodejs.html`)**
   - Qué es Node.js y su modelo de I/O no bloqueante.
   - Event Loop, asincronía y antipatrones (`Sync` en runtime).
   - Sistema de módulos **CommonJS vs ESM** con tabla comparativa.
   - `npm`, `package.json`, `package-lock.json` y `engines`.
   - Servidor HTTP nativo "Hola Mundo".

3. **Express.js (`backend/express.html`)**
   - Estructura modular recomendada (routes / controllers / services).
   - Sistema de enrutado con `express.Router`.
   - Tabla de middlewares típicos (`morgan`, `cors`, `helmet`, `rate-limit`).
   - Guard de autenticación JWT reutilizable.
   - Manejador centralizado de errores asíncronos.

4. **Bases de Datos (`backend/databases.html`)**
   - Comparativa **SQL vs NoSQL** y cuándo elegir cada una.
   - PostgreSQL con driver `pg` y consultas parametrizadas (anti-SQLi).
   - MongoDB con Mongoose (esquemas, índices, `populate`).
   - **Prisma ORM** con esquema declarativo y ejemplos de cliente tipado.
   - Transacciones ACID y estrategias de indexación.
   - Prevención del problema N+1.

5. **Autenticación & JWT (`backend/auth.html`)**
   - Diferencia Authn vs Authz (RBAC / ABAC).
   - Hashing de passwords con **bcrypt** y por qué no usar SHA-256.
   - Anatomía completa de un JWT (header / payload / signature).
   - Flujo de **Registro + Login** completo con código Express.
   - **Refresh tokens** y almacenamiento seguro (httpOnly cookies).
   - Checklist de seguridad para producción.

6. **Despliegue & DevOps (`backend/deploy.html`)**
   - Ciclo DevOps completo (Plan → Code → Build → Test → Release → Deploy → Operate).
   - **Docker** multi-stage y `docker-compose` con Postgres.
   - Configuración por entorno (12-factor app).
   - **PM2** cluster mode para Node sin Docker.
   - CI/CD con **GitHub Actions** (build, test, push a registry).
   - Reverse proxy con Nginx / Caddy y TLS.
   - Observabilidad: logs JSON (pino, winston), Sentry, Prometheus.

---

## 🎨 Características Técnicas

- 📱 **Diseño 100% Responsivo:** Adaptado a móviles, tablets y monitores de escritorio.
- 🌙 **Modo Oscuro / Claro:** Alternancia dinámica persistida en `localStorage` (clave `backend_manual_theme`).
- 🔍 **Búsqueda en Tiempo Real:** Filtro en vivo en la barra lateral para encontrar cualquier tema.
- 📋 **Copiado de Snippets:** Botón de un clic para copiar cualquier fragmento de código al portapapeles.
- 🖥️ **Simulador de Servidor:** Consola interactiva que simula arranque, dependencias y logs de peticiones HTTP.
- ⚡ **Sin Dependencias:** HTML5 puro, CSS moderno con variables, JS vanilla ES6+. No requiere build.

---

## 🗂️ Estructura del Proyecto

```
manual-backend-html5/
├── index.html                # Visión general + simulador
├── README.md                 # Este documento
├── css/
│   └── styles.css            # Estilos, temas claro/oscuro, layout
├── js/
│   └── app.js                # Tema, sidebar, búsqueda, copy, simulador
└── backend/
    ├── nodejs.html           # Guía Node.js & npm
    ├── express.html          # Guía Express.js
    ├── databases.html        # Guía Bases de Datos
    ├── auth.html             # Guía Autenticación & JWT
    └── deploy.html           # Guía Despliegue & DevOps
```

---

## 💻 Cómo Ejecutar el Proyecto

Puedes abrir directamente `index.html` en cualquier navegador moderno, o servirlo con un servidor local estático:

```bash
# Opción 1 — Python
cd manual-backend-html5
python -m http.server 8000
# → http://localhost:8000

# Opción 2 — Node (npx http-server)
cd manual-backend-html5
npx http-server -p 8000
# → http://localhost:8000

# Opción 3 — VS Code
# Instala la extensión "Live Server", clic derecho en index.html → "Open with Live Server"
```

---

## 🧭 Navegación

- **Sidebar lateral** con grupos temáticos y buscador integrado.
- **Botón de tema** (Claro/Oscuro) en la barra superior derecha.
- En móvil, el sidebar se oculta y se abre con el botón ☰.

---

## 🛡️ Cobertura de temas de seguridad

- Hashing de contraseñas con bcrypt y coste configurable.
- Preparación consultas SQL parametrizadas (anti-inyección).
- Cabeceras de seguridad con `helmet`.
- Rate limiting y CORS estricto.
- Almacenamiento seguro de tokens en cookies `httpOnly + secure + SameSite`.
- Checklist de producción.

---

## 📦 Stack técnico documentado

| Capa              | Tecnología                                   |
|-------------------|----------------------------------------------|
| Runtime           | Node.js 20 LTS + npm                         |
| Framework Web     | Express.js 4                                 |
| Base SQL          | PostgreSQL 16 (driver `pg`)                 |
| Base NoSQL        | MongoDB + Mongoose                           |
| ORM               | Prisma, Sequelize, TypeORM                  |
| Auth              | JWT (jsonwebtoken), bcryptjs                 |
| Despliegue        | Docker, docker-compose, Nginx, PM2          |
| CI/CD             | GitHub Actions                               |

---

## 📝 Licencia

Proyecto educativo de uso libre para aprendizaje y referencia personal.
