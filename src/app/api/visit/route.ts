import { NextRequest, NextResponse } from 'next/server';
import { insertVisit } from '@/data/db-client';

// Helper para detectar tipo de dispositivo
function getDeviceType(userAgent: string): string {
  const ua = userAgent.toLowerCase();
  if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
    return 'tablet';
  }
  if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) {
    return 'mobile';
  }
  return 'desktop';
}

// Helper para detectar navegador
function getBrowser(userAgent: string): string {
  if (userAgent.includes('Firefox')) return 'Firefox';
  if (userAgent.includes('Chrome')) return 'Chrome';
  if (userAgent.includes('Safari')) return 'Safari';
  if (userAgent.includes('Edge')) return 'Edge';
  if (userAgent.includes('Opera')) return 'Opera';
  return 'Unknown';
}

// Helper para detectar sistema operativo
function getOS(userAgent: string): string {
  if (userAgent.includes('Windows')) return 'Windows';
  if (userAgent.includes('Mac')) return 'MacOS';
  if (userAgent.includes('Linux')) return 'Linux';
  if (userAgent.includes('Android')) return 'Android';
  if (userAgent.includes('iOS') || userAgent.includes('iPhone') || userAgent.includes('iPad')) return 'iOS';
  return 'Unknown';
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { pagePath, referrer } = body;

    // Obtener información del visitante
    const ipAddress = request.headers.get('x-forwarded-for')?.split(',')[0].trim() || 
                     request.headers.get('x-real-ip') || 
                     'unknown';
    const userAgent = request.headers.get('user-agent') || 'unknown';

    // Extraer información del user agent
    const deviceType = getDeviceType(userAgent);
    const browser = getBrowser(userAgent);
    const os = getOS(userAgent);

    // Registrar la visita
    await insertVisit({
      ipAddress,
      userAgent,
      pagePath: pagePath || '/',
      referrer: referrer || null,
      deviceType,
      browser,
      os,
    });

    return NextResponse.json(
      { success: true, message: 'Visit recorded' },
      { status: 201 }
    );

  } catch (error) {
    console.error('Error in visit API:', error);
    // No retornar error 500 para no afectar la experiencia del usuario
    return NextResponse.json(
      { success: false },
      { status: 200 } // 200 para que el cliente no muestre errores
    );
  }
}
