import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  const esRuta = (ruta) => location.pathname === ruta;

  return (
    <nav className="navbar navbar-dark bg-primary">
      <div className="container-fluid">
        <span className="navbar-brand">
          <i className="bi bi-soccer-ball"></i> ⚽ Turnos Fútbol
        </span>
        <div className="d-flex">
          <Link
            to="/"
            className={`btn me-2 ${esRuta("/") ? "btn-light" : "btn-outline-light"}`}
          >
            Inicio
          </Link>
          <Link
            to="/mis-reservas"
            className={`btn ${esRuta("/mis-reservas") ? "btn-light" : "btn-outline-light"}`}
          >
            Mis Reservas
          </Link>
        </div>
      </div>
    </nav>
  );
}
