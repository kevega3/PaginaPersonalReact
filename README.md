# Portafolio Personal - Kevin's Vega Quiroga

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript)
![Vercel](https://img.shields.io/badge/Vercel-Deployed-000000?style=for-the-badge&logo=vercel)

**Ingeniero de Software | Full Stack Developer | HealthTech**

[Ver Portafolio](https://kevinsvega.dev) · [LinkedIn](https://www.linkedin.com/in/kevins-vega-quiroga-01a7b71ab/) · [GitHub](https://github.com/kevega3)

</div>

---

## 🎯 Sobre este proyecto

Este portafolio nació como un **proyecto personal de hobby** con un objetivo claro: **darme a conocer como desarrollador de software** en la industria tecnológica.

Más allá de ser una simple página web, este proyecto representa:

- **Mi carta de presentación digital**: Donde muestro mi experiencia, proyectos y certificaciones
- **Un laboratorio de aprendizaje**: Donde experimento con las últimas tecnologías del ecosistema React/Next.js
- **Una demostración práctica**: De lo que puedo construir como Ingeniero de Software Full Stack

### ¿Por qué Next.js?

Elegí Next.js porque:

1. **Es el estándar moderno** para aplicaciones React en producción
2. **Server Components** permite mejor rendimiento y SEO
3. **App Router** ofrece una arquitectura más limpia y escalable
4. **Vercel** proporciona un deployment seamless
5. **Tipado end-to-end** con TypeScript desde el servidor hasta el cliente

---

## 🚀 Tecnologías y Stack

### Frontend

| Tecnología | Versión | Uso |
|------------|---------|-----|
| **Next.js** | 16 | Framework React con App Router, Server Components, y optimizaciones automáticas |
| **React** | 19 | Biblioteca UI con Server Components y React Compiler |
| **TypeScript** | 5.9 | Tipado estático para mayor seguridad y mantenibilidad |
| **Bootstrap** | 5.3 | Framework CSS para diseño responsive (cargado desde `/public/assets`) |

### Backend & Base de Datos

| Tecnología | Versión | Uso |
|------------|---------|-----|
| **Vercel Postgres** | 0.10 | Base de datos PostgreSQL serverless para almacenar servicios, proyectos, certificados y mensajes de contacto |
| **Next.js API Routes** | - | Endpoints RESTful para contacto, tracking de visitas y datos del portafolio |

### Herramientas de Desarrollo

| Herramienta | Propósito |
|-------------|-----------|
| **ESLint** | Linting y calidad de código |
| **TypeScript** | Type checking y autocompletado |
| **Turbopack** | Bundler por defecto en Next.js 16 (más rápido que Webpack) |

### Despliegue

| Plataforma | Uso |
|------------|-----|
| **Vercel** | Hosting, CI/CD automático, Edge Network, Serverless Functions |

---

## 🏗️ Arquitectura y Patrones

### Estructura del Proyecto

```
src/
├── app/                          # App Router (Next.js 16)
│   ├── page.tsx                  # Página principal (Server Component)
│   ├── layout.tsx                # Layout raíz con metadata y fuentes
│   ├── error.tsx                 # Error boundary para errores en page.tsx
│   ├── global-error.tsx          # Error boundary global (layout.tsx)
│   ├── loading.tsx               # Estado de carga (Suspense fallback)
│   ├── not-found.tsx             # Página 404 personalizada
│   └── api/                      # API Routes
│       ├── contact/route.ts      # POST: Enviar mensaje de contacto
│       ├── portfolio/route.ts    # GET: Obtener datos del portafolio
│       └── visit/route.ts        # POST: Registrar visita (analytics)
├── components/                   # Componentes React
│   ├── Navbar/                   # Navegación sticky con scroll spy
│   ├── Section/                  # Hero section con descarga de CV
│   ├── AboutUs/                  # Sección "Sobre mí"
│   ├── Services/                 # Habilidades técnicas (desde DB)
│   ├── Projects/                 # Proyectos destacados (desde DB)
│   ├── Certificates/             # Certificaciones (desde DB)
│   ├── Contact/                  # Formulario de contacto con validación
│   ├── Footer/                   # Pie de página
│   ├── VisitTracker/             # Client component para tracking
│   └── common/                   # Componentes reutilizables
├── data/
│   └── db-client.ts              # Cliente de base de datos (Vercel Postgres)
├── types/
│   └── index.ts                  # Interfaces TypeScript compartidas
└── config.ts                     # Configuración global
```

### Patrones Implementados

#### 1. **Server Components por Defecto**
Todos los componentes son Server Components a menos que necesiten interactividad del cliente. Esto reduce el JavaScript enviado al navegador y mejora el rendimiento.

```typescript
// Server Component (por defecto)
export default async function Home() {
  const data = await getPortfolioData(); // Fetch en el servidor
  return <Projects data={data.projects} />;
}
```

#### 2. **Client Components Explícitos**
Solo cuando se necesita interactividad, hooks o APIs del navegador:

```typescript
'use client'; // Marcado explícitamente

export default function Contact() {
  const [formData, setFormData] = useState({...}); // Hook requiere 'use client'
  // ...
}
```

#### 3. **Error Boundaries Jerárquicos**
Sistema de manejo de errores en múltiples niveles:

- `global-error.tsx` → Captura errores en `layout.tsx`
- `error.tsx` → Captura errores en `page.tsx` y sus hijos
- `try/catch` en `page.tsx` → Fallback graceful si la DB falla

#### 4. **Incremental Static Regeneration (ISR)**
```typescript
export const revalidate = 3600; // Revalidar cada hora
```
La página se genera estáticamente pero se actualiza cada hora con datos frescos de la DB.

#### 5. **Type Safety End-to-End**
Interfaces compartidas entre servidor y cliente:

```typescript
// types/index.ts
export interface Project {
  id: number;
  name: string;
  cmpName: string;
  message: string;
  link?: string;
}
```

#### 6. **Rate Limiting en API Routes**
Protección contra spam en el formulario de contacto:
- Límite de 1 mensaje por IP cada 24 horas
- Validación server-side de todos los campos
- Verificación de email con regex

#### 7. **SEO Optimizado**
- **Metadata API** de Next.js con Open Graph y Twitter Cards
- **JSON-LD Structured Data** (Schema.org Person)
- **robots.txt** y **sitemap.xml** para crawlers
- **manifest.json** para PWA (Progressive Web App)

---

## 🎨 Metodologías de Desarrollo

### 1. **Component-Driven Development**
Cada sección de la página es un componente independiente y reutilizable:
- `Navbar` → Navegación
- `Section` → Hero
- `Services` → Habilidades
- `Projects` → Proyectos
- etc.

### 2. **Separation of Concerns**
- **Componentes de UI** (`components/`) → Solo renderizado
- **Lógica de datos** (`data/db-client.ts`) → Acceso a DB
- **Tipos** (`types/index.ts`) → Contratos de datos
- **API Routes** (`app/api/`) → Endpoints REST

### 3. **Progressive Enhancement**
- La página funciona sin JavaScript (Server Components)
- Se mejora con interactividad donde es necesario (Client Components)
- Formulario con validación client-side Y server-side

### 4. **Mobile-First Design**
- Bootstrap grid system responsive
- Imágenes optimizadas con `next/image`
- Fuentes optimizadas con `next/font`

### 5. **Security Best Practices**
- Validación server-side de todos los inputs
- Rate limiting en endpoints públicos
- Sanitización de datos antes de insertar en DB
- No exposición de credenciales (variables de entorno)

---

## 📦 Instalación y Desarrollo

### Prerrequisitos

- Node.js 18+ 
- npm, yarn, pnpm o bun
- Cuenta de Vercel (para la base de datos)

### Pasos

1. **Clonar el repositorio**
```bash
git clone https://github.com/kevega3/PaginaPersonalReact.git
cd PaginaPersonalReact
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Configurar variables de entorno**
Crea un archivo `.env.local` en la raíz:
```env
POSTGRES_URL="tu_url_de_vercel_postgres"
NEXT_PUBLIC_SITE_URL="https://tudominio.com"
```

4. **Ejecutar en desarrollo**
```bash
npm run dev
```
Abre [http://localhost:3000](http://localhost:3000)

5. **Build para producción**
```bash
npm run build
npm start
```

---

## 🗄️ Base de Datos

El proyecto usa **Vercel Postgres** con las siguientes tablas:

### `services`
```sql
CREATE TABLE services (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  icon VARCHAR(255) NOT NULL,
  description TEXT NOT NULL
);
```

### `projects`
```sql
CREATE TABLE projects (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  company_name VARCHAR(255),
  description TEXT NOT NULL,
  link VARCHAR(500)
);
```

### `certificates`
```sql
CREATE TABLE certificates (
  id SERIAL PRIMARY KEY,
  topic VARCHAR(255) NOT NULL,
  title VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  link VARCHAR(500) NOT NULL
);
```

### `contacts`
```sql
CREATE TABLE contacts (
  id SERIAL PRIMARY KEY,
  nombre_completo VARCHAR(150) NOT NULL,
  email VARCHAR(255) NOT NULL,
  asunto VARCHAR(200) NOT NULL,
  mensaje TEXT NOT NULL,
  ip_address VARCHAR(45),
  user_agent TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### `visits`
```sql
CREATE TABLE visits (
  id SERIAL PRIMARY KEY,
  ip_address VARCHAR(45),
  user_agent TEXT,
  page_path VARCHAR(500),
  referrer TEXT,
  device_type VARCHAR(50),
  browser VARCHAR(50),
  os VARCHAR(50),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

---

## 🚢 Despliegue

Este proyecto está desplegado en **Vercel**:

1. Conecta tu repositorio de GitHub a Vercel
2. Configura las variables de entorno en el dashboard de Vercel
3. Vercel automáticamente detecta Next.js y despliega
4. Cada push a `main` dispara un nuevo deployment

**URL de producción:** [https://kevinsvega.dev](https://kevinsvega.dev)

---

## 📊 Características Destacadas

### ✅ Rendimiento
- **Server Components** → Menos JavaScript en el cliente
- **Image Optimization** → `next/image` con lazy loading y formatos modernos
- **Font Optimization** → `next/font` con auto-hosting
- **Code Splitting** → Turbopack divide el bundle automáticamente
- **ISR** → Páginas estáticas con datos frescos

### ✅ SEO
- **Metadata completa** → Open Graph, Twitter Cards, JSON-LD
- **Semantic HTML** → Estructura correcta para crawlers
- **Sitemap.xml** → Mapa del sitio para Google
- **robots.txt** → Control de indexación

### ✅ Experiencia de Usuario
- **Error Boundaries** → Manejo graceful de errores
- **Loading States** → Feedback visual mientras carga
- **Form Validation** → Validación en tiempo real
- **Rate Limiting** → Protección contra spam
- **Responsive Design** → Funciona en todos los dispositivos

### ✅ Seguridad
- **Server-side Validation** → Todos los inputs se validan en el servidor
- **Rate Limiting** → 1 mensaje por IP cada 24 horas
- **SQL Injection Protection** → Queries parametrizados con `@vercel/postgres`
- **No Secrets Exposed** → Variables de entorno para credenciales

---

## 🎓 Aprendizajes Clave

Este proyecto me permitió profundizar en:

1. **Next.js App Router** → Arquitectura moderna con Server/Client Components
2. **TypeScript Avanzado** → Tipado de async params, Server Actions, API routes
3. **Database Integration** → Conexión serverless con Vercel Postgres
4. **Error Handling** → Error boundaries en múltiples niveles
5. **SEO Técnico** → Metadata, structured data, optimización para crawlers
6. **API Design** → RESTful endpoints con validación y rate limiting
7. **Performance Optimization** → ISR, image optimization, code splitting

---

## 🔄 Historial de Mejoras Recientes

### Limpieza de Código Muerto
- ✅ Eliminados componentes no usados (`Features`, `Clients`, `TeamBox`)
- ✅ Eliminadas dependencias innecesarias (`reactstrap`, `bootstrap` npm)
- ✅ Eliminados assets duplicados y no referenciados
- ✅ Interfaces duplicadas unificadas en `@/types`

### Error Handling
- ✅ Agregados error boundaries (`error.tsx`, `global-error.tsx`)
- ✅ Página 404 personalizada (`not-found.tsx`)
- ✅ Estado de carga (`loading.tsx`)
- ✅ Fallback graceful si la DB falla

### SEO & Metadata
- ✅ Metadata completa con Open Graph y Twitter Cards
- ✅ JSON-LD Structured Data (Schema.org Person)
- ✅ `robots.txt` y `sitemap.xml`
- ✅ `manifest.json` personalizado para PWA

---

## 📝 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia [MIT](LICENSE).

---

## 🤝 Contacto

**Kevin's Vega Quiroga**  
Ingeniero de Software | Full Stack Developer

- 📧 Email: [kevinsvegaquiroga@gmail.com](mailto:kevinsvegaquiroga@gmail.com)
- 💼 LinkedIn: [kevins-vega-quiroga](https://www.linkedin.com/in/kevins-vega-quiroga-01a7b71ab/)
- 🐙 GitHub: [kevega3](https://github.com/kevega3)
- 🌐 Portafolio: [kevinsvega.dev](https://kevinsvega.dev)

---

<div align="center">

**¿Te gustó este proyecto? ¡Déjame una ⭐ en GitHub!**

Hecho con ❤️ y mucho ☕ por Kevin's Vega Quiroga

</div>
