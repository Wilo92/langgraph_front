export const Header = () => {
  // SE DEBE CONFIGURAR PARA QUE USE DATOS REALES DEL USUARIO
  const user = { name: "Wilmer Restrepo", email: "wilo@example.com" };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark shadow-sm sticky-top m-0"
      style={{ background: 'linear-gradient(90deg, #004AAD, #FF7C00)' }}>
      <div className="container-fluid px-4">
        <a className="navbar-brand fw-bold text-uppercase text-warning" href="/">
          <i className="bi bi-calendar-check me-1"></i>Wilo<span className="text-light">Link</span>
        </a>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item"><a className="nav-link active" href="/">Inicio</a></li>
            <li className="nav-item"><a className="nav-link" href="/directorio">Directorio</a></li>
            <li className="nav-item"><a className="nav-link" href="/directorio">Agente IA</a></li>
            <li className="nav-item"><a className="nav-link" href="/directorio">Readme</a></li>
             <li className="nav-item">
                <a className="nav-link" href="https://github.com/Wilo92" target="_blank" rel="noopener noreferrer">Contacto</a>
            </li>
          </ul>

          <div className="d-flex align-items-center">
            <div className="dropdown">
              <a href="#" className="d-flex align-items-center text-decoration-none text-white dropdown-toggle" id="userMenu" data-bs-toggle="dropdown">
                {/* En Vite, las imagenes en public se acceden con /nombre.png */}
                <img src="/logo.png" alt="Wilo Avatar" width="40" height="40"
                  className="rounded-circle me-2"
                  style={{ objectFit: 'cover', border: '2px solid rgba(255,255,255,0.2)' }} />
                <span className="fw-semibold">{user.name}</span>
              </a>

              <ul className="dropdown-menu dropdown-menu-end shadow">
                <li className="dropdown-item-text px-3">
                  <strong>{user.name}</strong><br />
                  <small className="text-muted">{user.email}</small>
                </li>
                <li><hr className="dropdown-divider" /></li>
                <li><button className="dropdown-item text-danger">Cerrar sesión</button></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};