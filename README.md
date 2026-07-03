# Nova Studio

Base tecnica para una micro agencia de landing pages premium para pequenos negocios.

## Stack

- Next.js
- TypeScript
- Tailwind CSS
- Framer Motion
- Vercel

## Objetivo

Crear un sistema reutilizable para construir landing pages rapidas, modernas y profesionales, con estructura preparada para templates por rubro.

Rubros iniciales:

- Odontologia
- Psicologia
- Veterinaria
- Gimnasio
- Servicios profesionales

## Estructura

```text
src/
  app/                  App Router de Next.js
  components/
    animation/          Componentes con Framer Motion
    sections/           Secciones reutilizables de landing
    ui/                 Componentes base de interfaz
  data/                 Contenido configurable
  templates/            Tipos y blueprint para templates por rubro
```

## Comandos

```bash
npm install
npm run dev
npm run build
npm run lint
```

## Secciones incluidas

- Hero
- Servicios
- Portfolio
- Proceso
- Precios
- FAQ
- Contacto

## Templates iniciales

- `/templates/odontologia`
