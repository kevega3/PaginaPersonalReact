'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Error en la aplicación:', error);
  }, [error]);

  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center" style={{ backgroundColor: '#172330' }}>
      <div className="container text-center">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <i className="mdi mdi-alert-circle-outline text-danger" style={{ fontSize: '80px' }}></i>
            <h1 className="text-white mt-4">Algo salió mal</h1>
            <p className="text-muted mt-3">
              Lo sentimos, hubo un problema al cargar el contenido. Por favor intenta nuevamente.
            </p>
            <div className="mt-4">
              <button
                onClick={reset}
                className="btn btn-primary btn-rounded me-3"
              >
                <i className="mdi mdi-refresh me-2"></i>
                Intentar de nuevo
              </button>
              <a
                href="/"
                className="btn btn-outline-light btn-rounded"
              >
                <i className="mdi mdi-home me-2"></i>
                Ir al inicio
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
