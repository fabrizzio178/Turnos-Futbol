# ⚽ Turnos Fútbol

Sistema web para reservar turnos en canchas de fútbol 7 y 9.  
Permite a los clientes visualizar disponibilidad, reservar un turno y consultar sus reservas sin necesidad de loguearse.

---

## 📦 Tecnologías utilizadas

### Backend
- Node.js + Express
- Sequelize ORM
- SQLite3 como base de datos
- Arquitectura por capas: `models`, `repositories`, `services`, `routes`
- Middlewares personalizados (`logger`, `errorHandler`)

### Frontend
- React con Vite
- Bootstrap para estilos rápidos
- React Router DOM para navegación
- Axios para conexión con la API

---

## 📂 Estructura del proyecto

turnos-futbol/
│
├── back/
│ ├── app.js ← servidor express + precarga
│ ├── db.js ← conexión Sequelize con SQLite
│ ├── models/ ← entidades: Cancha, Turno, Cliente, Reserva
│ ├── repositories/ ← lógica de acceso a datos
│ ├── services/ ← lógica de negocio
│ ├── routes/ ← endpoints organizados
│ └── middlewares/ ← logger, manejador de errores
│
├── front/
│ ├── src/
│ │ ├── components/ ← Navbar, CanchaCard, ReservaForm
│ │ ├── pages/ ← Inicio, MisReservas
│ │ ├── services/ ← Llamadas a API
│ │ ├── App.jsx ← Rutas + renderizado
│ │ └── main.jsx ← bootstrap de React
│ └── public/ ← íconos y assets

---

## ✅ Funcionalidades principales

### 🟢 Inicio
- Visualiza todas las canchas disponibles.
- Para cada cancha muestra su ubicación, tipo (7 u 9 jugadores), y los turnos disponibles.
- Permite **reservar** un turno mediante un formulario.

### 🔒 Validación de reservas
- Si un turno ya fue reservado, no permite volver a reservarlo.
- Estado de reserva: `confirmada` o `pendiente`.

### 🔍 Mis Reservas
- Consulta tus reservas ingresando **mail** o **teléfono** (sin necesidad de login).
- Muestra cancha, fecha, hora y estado de cada reserva asociada.

🧠 Mejoras futuras
Autenticación para clientes

CRUD para administrador

Filtros por fecha y tipo de cancha

Notificaciones con Toast o correo

Hosting en Render / Railway / Netlify

👨‍💻 Autor
Proyecto realizado por Fabrizzio Sana
Desarrollado para practicar arquitectura por capas, integración full stack y diseño limpio.

