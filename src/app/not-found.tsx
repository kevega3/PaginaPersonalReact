import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center" style={{ backgroundColor: '#172330' }}>
      <div className="container text-center">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <h1 className="display-1 text-primary fw-bold">404</h1>
            <h2 className="text-white mt-3">Página no encontrada</h2>
            <p className="text-muted mt-3">
              La página que buscas no existe o fue movida.
            </p>
            <div className="mt-4">
              <Link href="/" className="btn btn-primary btn-rounded">
                <i className="mdi mdi-home me-2"></i>
                Volver al inicio
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
