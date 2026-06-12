import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-dark-hard">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-md mx-auto">
          <h1 className="text-7xl text-primary font-bold">404</h1>
          <h2 className="text-white mt-3">Página no encontrada</h2>
          <p className="text-secondary-text-light mt-3">
            La página que buscas no existe o fue movida.
          </p>
          <div className="mt-4">
            <Link href="/" className="btn-primary-custom inline-flex">
              <i className="mdi mdi-home mr-2"></i>
              Volver al inicio
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
