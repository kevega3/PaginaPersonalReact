'use client';

import { useEffect } from 'react';

export default function VisitTracker() {
  useEffect(() => {
    // Registrar visita solo una vez por sesión
    const hasVisited = sessionStorage.getItem('visit_recorded');
    
    if (!hasVisited) {
      const recordVisit = async () => {
        try {
          const response = await fetch('/api/visit', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              pagePath: window.location.pathname,
              referrer: document.referrer || null,
            }),
          });

          if (response.ok) {
            // Marcar como visitado en la sesión actual
            sessionStorage.setItem('visit_recorded', 'true');
          }
        } catch (error) {
          // Silenciar errores para no afectar la experiencia del usuario
          console.debug('Visit tracking failed:', error);
        }
      };

      // Pequeño delay para no bloquear la carga inicial
      setTimeout(recordVisit, 1000);
    }
  }, []);

  // Este componente no renderiza nada
  return null;
}
