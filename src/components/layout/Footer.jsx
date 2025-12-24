export const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="text-light py-4" style={{ backgroundColor: '#004AAD' }}>
            <div className="container-fluid">
                <div className="row align-items-center mb-3"> 
                    <div className="col-md-4 text-start">
                        <a href="#" className="d-inline-flex align-items-center text-decoration-none text-light">
                            <img src="/logo.png" alt="Logo" style={{ height: '40px', marginRight: '10px' }} />
                            <span className="fs-5 fw-bold">WiloLink</span>
                        </a>
                    </div>

                    <div className="col-md-4 text-center">
                        <p className="mb-0 fs-6 fst-italic ">"Gestiona, Conecta, Proyecta."</p>
                    </div>

                    <div className="col-md-4 text-end">
                        <h6 className="fw-bold mb-2 small text-uppercase">Acerca de mi</h6>
                        <div className="d-flex justify-content-end gap-3">
                            
                            <a href="https://www.facebook.com/will.restrepo.9" className="text-light" target="_blank" rel="noreferrer">
                                <i className="bi bi-facebook fs-4"></i>
                            </a>
                            <a href="https://github.com/Wilo92" className="text-light" target="_blank" rel="noreferrer">
                                <i className="bi bi-github fs-4"></i>
                            </a>
                             <a href="https://www.linkedin.com/in/wilmer-restrepo-830544242/" className="text-light" target="_blank" rel="noreferrer">
                                <i className="bi bi-linkedin fs-4"></i>
                            </a>
                            <a href="https://wilo92.github.io/myhdv/" className="text-light" target="_blank" rel="noreferrer">
                                <i className="bi bi-file-person-fill fs-4"></i>
                            </a>
                            
                           
                        </div>
                    </div>
                </div>

                <hr className="border-light opacity-50" />

                <div className="row">
                    <div className="col text-center">
                        <p className="mb-0 small">
                            &copy; {currentYear} WiloLink. Creado por <strong>Wilmer Restrepo (Wilo)</strong>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};