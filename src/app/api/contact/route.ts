import { NextRequest, NextResponse } from 'next/server';
import { insertContact, checkRecentContactByIP } from '@/data/db-client';

// Validación de email con regex
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { nombreCompleto, email, asunto, mensaje } = body;

    // Obtener información adicional
    const ipAddress = request.headers.get('x-forwarded-for')?.split(',')[0].trim() || 
                     request.headers.get('x-real-ip') ||                     'unknown';
    const userAgent = request.headers.get('user-agent') || 'unknown';

    // Verificar rate limit (1 mensaje por día por IP)
    if (ipAddress !== 'unknown') {
      const hasRecentMessage = await checkRecentContactByIP(ipAddress);
      if (hasRecentMessage) {
        return NextResponse.json(
          { 
            error: 'Ya has enviado un mensaje recientemente. Por favor espera 24 horas antes de enviar otro.',
            code: 'RATE_LIMIT_EXCEEDED'
          },
          { status: 429 } // 429 Too Many Requests
        );
      }
    }

    // Validaciones del servidor
    if (!nombreCompleto || nombreCompleto.trim().length < 3) {
      return NextResponse.json(
        { error: 'El nombre debe tener al menos 3 caracteres' },
        { status: 400 }
      );
    }

    if (!email || !EMAIL_REGEX.test(email)) {
      return NextResponse.json(
        { error: 'El email no es válido' },
        { status: 400 }
      );
    }

    if (!asunto || asunto.trim().length < 5) {
      return NextResponse.json(
        { error: 'El asunto debe tener al menos 5 caracteres' },
        { status: 400 }
      );
    }

    if (!mensaje || mensaje.trim().length < 10) {
      return NextResponse.json(
        { error: 'El mensaje debe tener al menos 10 caracteres' },
        { status: 400 }
      );
    }

    // Guardar en la base de datos
    const result = await insertContact({
      nombreCompleto: nombreCompleto.trim(),
      email: email.trim().toLowerCase(),
      asunto: asunto.trim(),
      mensaje: mensaje.trim(),
      ipAddress,
      userAgent,
    });

    return NextResponse.json(
      { 
        success: true, 
        message: '¡Mensaje enviado correctamente! Te responderé lo antes posible.',
        id: result.id 
      },
      { status: 201 }
    );

  } catch (error) {
    console.error('Error in contact API:', error);
    return NextResponse.json(
      { error: 'Error al procesar tu mensaje. Por favor intenta nuevamente.' },
      { status: 500 }
    );
  }
}
