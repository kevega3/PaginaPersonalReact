import { sql } from '@vercel/postgres';
import type { Service, Project, Certificate, PortfolioData } from '@/types';

// Funciones de consulta
export async function getServices(): Promise<Service[]> {
  try {
    const { rows } = await sql<Service>`
      SELECT title, icon, description 
      FROM services 
      ORDER BY id ASC
    `;
    return rows;
  } catch (error) {
    console.error('Error fetching services:', error);
    throw new Error('Failed to fetch services data.');
  }
}

export async function getProjects(): Promise<Project[]> {
  try {
    // Aliases para mantener compatibilidad con tu frontend actual (cmpName, message)
    const { rows } = await sql<Project>`
      SELECT 
        id, 
        name, 
        company_name as "cmpName", 
        description as "message", 
        link 
      FROM projects 
      ORDER BY id ASC
    `;
    return rows;
  } catch (error) {
    console.error('Error fetching projects:', error);
    throw new Error('Failed to fetch projects data.');
  }
}

export async function getCertificates(): Promise<Certificate[]> {
  try {
    const { rows } = await sql<Certificate>`SELECT * FROM certificates ORDER BY id ASC`;
    return rows;
  } catch (error) {
    console.error('Error fetching certificates:', error);
    throw new Error('Failed to fetch certificates data.');
  }
}

// Función para obtener todos los datos del portafolio
export async function getPortfolioData(): Promise<PortfolioData> {
  try {
    const [services, projects, certificates] = await Promise.all([
      getServices(),
      getProjects(),
      getCertificates(),
    ]);

    return {
      services,
      projects,
      certificates,
    };
  } catch (error) {
    console.error('Error fetching portfolio data:', error);
    throw new Error('Failed to fetch portfolio data.');
  }
}

// Función para insertar un mensaje de contacto
export interface ContactForm {
  nombreCompleto: string;
  email: string;
  asunto: string;
  mensaje: string;
  ipAddress?: string;
  userAgent?: string;
}

export async function insertContact(data: ContactForm): Promise<{ success: boolean; id?: number }> {
  try {
    const { rows } = await sql`
      INSERT INTO contacts (nombre_completo, email, asunto, mensaje, ip_address, user_agent)
      VALUES (${data.nombreCompleto}, ${data.email}, ${data.asunto}, ${data.mensaje}, ${data.ipAddress || null}, ${data.userAgent || null})
      RETURNING id
    `;
    return { success: true, id: rows[0].id };
  } catch (error) {
    console.error('Error inserting contact:', error);
    throw new Error('Failed to save contact message.');
  }
}

// Función para verificar si una IP ha enviado mensajes recientemente (protección contra spam)
export async function checkRecentContactByIP(ipAddress: string): Promise<boolean> {
  try {
    const { rows } = await sql`
      SELECT COUNT(*) as count 
      FROM contacts 
      WHERE ip_address = ${ipAddress}
      AND created_at > NOW() - INTERVAL '24 hours'
    `;
    return parseInt(rows[0].count) > 0;
  } catch (error) {
    console.error('Error checking recent contacts:', error);
    // Si hay error en la verificación, permitir el envío por seguridad
    return false;
  }
}

// Función para registrar una visita a la página
export interface VisitData {
  ipAddress?: string;
  userAgent?: string;
  pagePath?: string;
  referrer?: string;
  deviceType?: string;
  browser?: string;
  os?: string;
}

export async function insertVisit(data: VisitData): Promise<{ success: boolean; id?: number }> {
  try {
    const { rows } = await sql`
      INSERT INTO visits (ip_address, user_agent, page_path, referrer, device_type, browser, os)
      VALUES (
        ${data.ipAddress || null}, 
        ${data.userAgent || null}, 
        ${data.pagePath || '/'}, 
        ${data.referrer || null},
        ${data.deviceType || null},
        ${data.browser || null},
        ${data.os || null}
      )
      RETURNING id
    `;
    return { success: true, id: rows[0].id };
  } catch (error) {
    console.error('Error inserting visit:', error);
    // No lanzar error para no afectar la experiencia del usuario
    return { success: false };
  }
}
