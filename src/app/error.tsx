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
    <div className="min-h-screen flex items-center justify-center bg-dark-hard">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-md mx-auto">
          <i className="mdi mdi-alert-circle-outline text-red-500" style={{ fontSize: '80px' }}></i>
          <h1 className="text-white mt-4">Algo salió mal</h1>
          <p className="text-secondary-text-light mt-3">
            Lo sentimos, hubo un problema al cargar el contenido. Por favor intenta nuevamente.
          </p>
          <div className="mt-4 flex gap-3 justify-center">
            <button
              onClick={reset}
              className="btn-primary-custom inline-flex"
            >
              <i className="mdi mdi-refresh mr-2"></i>
              Intentar de nuevo
            </button>
            <a
              href="/"
              className="btn-outline-custom inline-flex"
            >
              <i className="mdi mdi-home mr-2"></i>
              Ir al inicio
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
