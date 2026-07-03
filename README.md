# Nova Studio

Base tecnica para una micro agencia de landing pages premium semi-custom para pequenos negocios y profesionales.

## Posicionamiento

Nova Studio no vende plantillas. Crea landing pages semi-custom con un sistema propio: rapidas de entregar, pero disenadas para el negocio de cada cliente.

## Stack

- Next.js
- TypeScript
- Tailwind CSS
- Framer Motion
- Vercel

## Objetivo

Crear un sistema reutilizable que permita construir landings distintas segun rubro, objetivo comercial, publico, personalidad del cliente, accion principal y estilo visual deseado.

Reutilizar codigo no significa repetir diseno.

## Estructura

```text
src/
  app/                  App Router de Next.js
  components/
    animation/          Componentes con Framer Motion
    sections/           Secciones reutilizables y configurables
    ui/                 Componentes base de interfaz
  data/                 Contenido y direccion comercial por demo
  landing-system/       Tipos, metadata y blueprint del sistema modular
```

## Comandos

```bash
npm install
npm run dev
npm run build
npm run lint
```

## Demos iniciales

- `/demos/odontologia`
- `/demos/pediatra`
- `/demos/papa`

La ruta vieja `/templates/odontologia` redirige a `/demos/odontologia`.
