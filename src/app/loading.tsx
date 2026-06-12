export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: 'var(--bg-body)' }}>
      <div className="text-center">
        <div className="w-12 h-12 border-4 border-primary border-r-transparent rounded-full animate-spin mx-auto" role="status">
          <span className="sr-only">Cargando...</span>
        </div>
        <p className="text-body-text-secondary mt-3">Cargando contenido...</p>
      </div>
    </div>
  );
}
