import React, { useState, useEffect } from 'react';


export const Header = () => {
  const [userData, setUserData] = useState({ name: "Cargando...", email: "" });
  const token = localStorage.getItem('wilo_token');

  const LARAVEL_URL = import.meta.env.VITE_LARAVEL_URL;
  const FASTAPI_URL = import.meta.env.VITE_FASTAPI_URL;

  useEffect(() => {
    const fetchUser = async () => {
      if (!token) return;
      try {
        const response = await fetch(`${FASTAPI_URL}/api/v1/user-info`, {
          headers: { 'Authorization': `Bearer ${token}` }
        });
        if (response.ok) {
          const data = await response.json();
          setUserData({ name: data.name, email: data.email });
        }
      } catch (error) {
        console.error("Error obteniendo usuario:", error);
      }
    };

    fetchUser();
  }, [token]);


  const handleLogout = () => {
    localStorage.removeItem('wilo_token');
    window.location.href = `${LARAVEL_URL}/login`;
  };

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
            <li className="nav-item"><a className="nav-link active" href={`${LARAVEL_URL}/home`}>Inicio</a></li>
            <li className="nav-item"><a className="nav-link" href={`${LARAVEL_URL}/directorio`}>Directorio</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Agente IA</a></li>
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
                <span className="fw-semibold">{userData.name}</span>
              </a>

              <ul className="dropdown-menu dropdown-menu-end shadow">
                <li className="dropdown-item-text px-3">
                  <strong>{userData.name}</strong><br />
                  <small className="text-muted">{userData.email}</small>
                </li>
                <li><hr className="dropdown-divider" /></li>
                <li>
                  <button onclick={handleLogout} className="dropdown-item text-danger">
                    <i className="bi bi-box-arrow-right me-2"></i>Cerrar sesión
                  </button>
                </li>

              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};