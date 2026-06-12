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
        <div className="min-h-screen flex items-center justify-center bg-dark-hard font-sans">
          <div className="text-center p-8">
            <h1 className="text-white text-3xl mb-4">
              Error inesperado
            </h1>
            <p className="text-gray-400 mb-8">
              Ocurrió un error crítico. Por favor recarga la página.
            </p>
            <button
              onClick={reset}
              className="px-6 py-3 bg-cyan-400 text-black border-none rounded-full cursor-pointer text-base hover:bg-cyan-300 transition-colors"
            >
              Recargar página
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}
