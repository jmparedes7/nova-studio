# Nova Studio - Codex Instructions

## Project Purpose

Nova Studio is the technical and commercial base for a premium micro agency that creates semi-custom landing pages for small businesses and professionals.

Nova Studio does not sell templates. It sells professional presence adapted to each client's business.

## Strategic Positioning

"Creamos landing pages semi-custom con un sistema propio: rapidas de entregar, pero disenadas para tu negocio."

The business goal is to combine:

- Speed from a reusable system
- Premium design quality
- Strategic personalization
- Conversion focus
- Visual direction by business niche

## Core Principle

Reusable code does not mean repeated design.

Each landing must feel made for that client, even when it is built on reusable components, shared logic, and modular sections.

## What Nova Studio Wants

- Modular system
- Configurable sections
- Visual variants
- Different layouts
- Flexible composition
- Client-specific copy
- Conversion-focused structure
- Visual direction by niche
- Section order adapted to the business goal

## What Nova Studio Avoids

- Generic templates
- Cloned pages
- Same structure for every client
- Superficial color and text swaps
- Repetitive design
- One fixed skeleton for all businesses

## Stack

Use this stack by default:

- Next.js
- TypeScript
- Tailwind CSS
- Framer Motion
- Vercel

Only suggest a different tool when there is a clear technical or business advantage.

## Technical Rule

The system must allow changing composition, section order, visual variants, and conversion focus without duplicating code.

Prefer reusable primitives and section components, but do not force every landing into the same page structure.

## Business Rule

Each landing should be adapted to:

- Niche
- Commercial objective
- Client personality
- Audience type
- Main conversion action
- Trust level needed
- Desired visual style

## Development Rules

- Build mobile first.
- Use reusable components and data-driven configuration.
- Keep code clean, simple, and readable.
- Avoid duplicated code.
- Prefer composition over rigid components.
- Use TypeScript types for props, data models, and reusable configuration.
- Avoid unnecessary dependencies.
- Include basic SEO in every landing.
- Keep accessibility in mind for headings, buttons, forms, links, contrast, and keyboard behavior.

## Landing System

The codebase should support semi-custom landing demos and client pages, not fixed templates.

Reusable sections may include:

- Hero variants
- Services
- Proof blocks
- Testimonials
- Gallery
- Process
- FAQ
- Contact form
- WhatsApp CTA
- Location
- Pricing or treatment options

Sections should be configurable and composable, and different landings may use different subsets, orders, and visual treatments.

## Design Direction

Design should feel modern, premium, trustworthy, and specific to the client.

Avoid decorative effects that do not support the offer, excessive animation, weak hierarchy, and generic layout patterns.

Use Framer Motion for subtle animation that improves perceived quality without hurting usability or performance.

## Collaboration Rules

- Communicate with Juan Manuel in Spanish unless the task requires English.
- Be direct and critical when an idea is weak or commercially risky.
- Explain relevant technical decisions in business terms.
- Do not advance too many steps at once without finishing the current stage.
- When adding commands, document how to run, build, lint, and deploy the project.

## Git And Deployment

- Default branch: `main`.
- Remote repository: `https://github.com/jmparedes7/nova-studio`.
- Target deployment platform: Vercel.
- Keep commits focused and meaningful.
- Do not commit secrets, API keys, environment files, or client-private data.
