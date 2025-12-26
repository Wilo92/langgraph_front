import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export const ChatAgentes = () => {
    const [prompt, setPrompt] = useState('');
    const [respuestas, setRespuestas] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const handleEnviar = async (e) => {
        e.preventDefault();
        if (!prompt.trim() || isLoading) return;

        setIsLoading(true);

        const nuevoMensajeUsuario = {
            user: prompt,
            agente1: null,
            agente2: null
        };

        setRespuestas(prev => [...prev, nuevoMensajeUsuario]);

        const promptEnviado = prompt;
        setPrompt('');

        try {
            const response = await fetch('http://localhost:8000/api/v1/agentes/consulta', {
                method: 'POST',

                headers: {
                    'Content-Type': 'application/json'
                },

                body: JSON.stringify({
                    user_id: "usuario_por_defecto",
                    consulta: promptEnviado
                })
            }
            );

            if (!response.ok) {
                throw new Error('Error en la respuesta del servidor');
            }

            const data = await response.json();

            setRespuestas(prev => {
                const actualizadas = [...prev];
                const ultimoIndex = actualizadas.length - 1;

                actualizadas[ultimoIndex] = {
                    ...actualizadas[ultimoIndex],
                    agente1: data.ciberseguridad_reporte,
                    agente2: data.software_reporte
                };

                return actualizadas;
            });

        } catch (error) {
            console.error(error);
            alert('Error al enviar la consulta a los agentes');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="card shadow-lg border-0 rounded-4">
            <div className="card-header bg-white py-3 d-flex justify-content-between align-items-center">
                <h5 className="mb-0 fw-bold text-primary">
                    <i className="bi bi-robot me-2"></i>Sistema multiagente especializado con agentes de Cybersecurity y Software Development.
                </h5>

                {isLoading && (
                    <div className="spinner-border spinner-border-sm text-primary" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                )}
            </div>

            <div className="card-body" style={{ height: '450px', overflowY: 'auto', background: '#f8f9fa' }}>
                {respuestas.length === 0 && !isLoading && (
                    <p className="text-muted text-center mt-5">Escribir una pregunta</p>
                )}

                {respuestas.map((item, index) => (
                    <div key={index} className="mb-4">
                        <div className="text-end mb-2">
                            <span className="badge bg-primary p-2 shadow-sm">El usuario: {item.user}</span>
                        </div>

                        <div className="row g-2">

                            <div className="col-md-6">
                                <div className="p-3 bg-white border rounded-3 shadow-sm h-100">
                                    <strong className="text-info small d-block mb-1">Agente especialista en ciberseguridad</strong>
                                    {item.agente1 ? (
                                        <ReactMarkdown
                                            remarkPlugins={[remarkGfm]}
                                            className="mb-0 small">
                                            {item.agente1}
                                        </ReactMarkdown>
                                    ) : (
                                        <div className="placeholder-glow">
                                            <span className="placeholder col-12"></span>
                                            <span className="placeholder col-8"></span>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* AGENTE 2 */}
                            <div className="col-md-6">
                                <div className="p-3 bg-white border rounded-3 shadow-sm h-100">
                                    <strong className="text-warning small d-block mb-1">Agente especialista en desarrollo de software</strong>
                                    {item.agente2 ? (
                                        <ReactMarkdown
                                            remarkPlugins={[remarkGfm]}
                                            className="mb-0 small">
                                            {item.agente2}
                                        </ReactMarkdown>
                                    ) : (
                                        <div className="placeholder-glow">
                                            <span className="placeholder col-12"></span>
                                            <span className="placeholder col-10"></span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="card-footer bg-white border-0 py-3">
                <form onSubmit={handleEnviar} className="input-group">
                    <input
                        type="text"
                        className="form-control"
                        placeholder={isLoading ? "Los agentes están pensando..." : "Escribe tu prompt aquí..."}
                        value={prompt}
                        onChange={(e) => setPrompt(e.target.value)}
                        disabled={isLoading}
                    />
                    <button
                        className="btn btn-success fw-bold"
                        type="submit"
                        disabled={isLoading || !prompt.trim()}
                    >
                        {isLoading ? (
                            <>
                                <span className="spinner-border spinner-border-sm me-2"></span>
                                Pensando...
                            </>
                        ) : (
                            <>
                                Preguntar <i className="bi bi-send-fill ms-1"></i>
                            </>
                        )}
                    </button>
                </form>
            </div>
        </div>
    );
};