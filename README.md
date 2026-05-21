# Frontend - Quickpay

Proyecto Next.js 15 con TypeScript, ESLint y Prettier.

## Requisitos

- Node.js 20+
- npm 10+

## Inicio rápido (Onboarding)

```bash
# 1. Instalar dependencias
npm install

# 2. Configurar variables de entorno
cp .env.example .env
# Edita .env con tus valores

# 3. Levantar servidor de desarrollo
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## Scripts disponibles

| Comando | Descripción |
|---|---|
| `npm run dev` | Servidor de desarrollo |
| `npm run build` | Build de producción |
| `npm run start` | Inicia build de producción |
| `npm run lint` | Revisa errores de ESLint |
| `npm run lint:fix` | Corrige errores de ESLint automáticamente |
| `npm run format` | Formatea con Prettier |
| `npm run format:check` | Verifica formato sin modificar |
| `npm run type-check` | Verifica tipos TypeScript |

## Docker

```bash
# Build y correr con Docker Compose
docker compose up --build

# O directamente con Docker
docker build -t frontend .
docker run -p 3000:3000 frontend
```

## Estructura del proyecto

```
src/
├── app/                          # App Router Next.js
│   ├── (auth)/
│   │   ├── login/
│   │   └── register/
│   ├── dashboard/
│   ├── cuenta/
│   ├── pagos/
│   ├── historial/
│   ├── notificaciones/
│   └── layout.tsx
│
├── components/
│   ├── ui/                       # Componentes base (botones, inputs, etc.)
│   ├── dashboard/
│   ├── pagos/
│   ├── historial/
│   ├── notificaciones/
│   └── cuenta/
│
├── hooks/
│   ├── useAuth.ts
│   ├── usePagos.ts
│   ├── useNotificaciones.ts
│   └── useTransacciones.ts
│
├── lib/
│   ├── supabaseClient.ts         # Conexión Supabase
│   ├── apiGateway.ts             # Centraliza llamadas al API Gateway
│   └── utils.ts
│
├── services/                      
│   ├── usuario.service.ts        
│   ├── pagos.service.ts          
│   ├── transaccion.service.ts    
│   ├── notificaciones.service.ts 
│   └── auth.service.ts           
│
├── store/                        # estado global (Zustand / Redux)
│   ├── authStore.ts
│   ├── pagosStore.ts
│   └── notificacionesStore.ts
│
├── types/
│   ├── usuario.types.ts          
│   ├── pagos.types.ts            
│   ├── transaccion.types.ts      
│   ├── notificaciones.types.ts   
│   ├── operacion.types.ts        
│   └── logs.types.ts             
│
└── constants/
    └── routes.ts                 # Rutas centralizadas
```

## Variables de entorno

Copia `.env.example` como `.env` y completa los valores.  
**Nota:** No subir el`.env` al repositorio.
