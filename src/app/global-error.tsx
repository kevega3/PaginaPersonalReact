'use client';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="es">
      <body>
        <div
          style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#172330',
            fontFamily: 'system-ui, -apple-system, sans-serif',
          }}
        >
          <div style={{ textAlign: 'center', padding: '2rem' }}>
            <h1 style={{ color: '#fff', fontSize: '2rem', marginBottom: '1rem' }}>
              Error inesperado
            </h1>
            <p style={{ color: '#adb5bd', marginBottom: '2rem' }}>
              Ocurrió un error crítico. Por favor recarga la página.
            </p>
            <button
              onClick={reset}
              style={{
                padding: '0.75rem 1.5rem',
                backgroundColor: '#0dcaf0',
                color: '#000',
                border: 'none',
                borderRadius: '50px',
                cursor: 'pointer',
                fontSize: '1rem',
              }}
            >
              Recargar página
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}
