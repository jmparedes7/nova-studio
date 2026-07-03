# Nova Studio - Codex Instructions

## Project Purpose

This repository is the technical base for Nova Studio, a premium micro agency that builds fast, modern, professional landing pages for small businesses.

The goal is to create a reusable system, not isolated one-off websites. Every implementation should make future client projects faster, cleaner, and easier to adapt.

## Stack

Use this stack by default:

- Next.js
- TypeScript
- Tailwind CSS
- Framer Motion
- Vercel

Only suggest a different tool when there is a clear technical or business advantage.

## Business Goal

Nova Studio sells solutions, not just websites. Landing pages should help clients get more leads, look more professional, and convert visitors into WhatsApp messages, form submissions, calls, or bookings.

Prioritize decisions that improve:

- Delivery speed
- Reusability
- Visual quality
- Conversion clarity
- SEO basics
- Performance
- Recurring revenue potential

## Development Rules

- Build mobile first.
- Use reusable components.
- Keep code clean, simple, and readable.
- Avoid duplicated code.
- Prefer composition over large rigid components.
- Use TypeScript types for props, data models, and reusable configuration.
- Keep styling consistent through Tailwind utilities and shared design tokens when available.
- Avoid unnecessary dependencies.
- Optimize for good performance from the beginning.
- Include basic SEO in every page or template.
- Keep accessibility in mind for headings, buttons, forms, links, contrast, and keyboard behavior.

## Landing Page System

Prepare the project structure so it can support templates by business niche.

Expected reusable sections include:

- Hero
- Benefits
- Services
- Social proof
- Testimonials
- Gallery
- Process
- FAQ
- Contact form
- WhatsApp CTA
- Map/location
- Final CTA

Sections should be configurable through data whenever practical, so a template can be adapted for dentists, psychologists, veterinarians, lawyers, gyms, restaurants, real estate agents, and other small businesses without rewriting the whole page.

## Design Direction

Design should feel modern, premium, trustworthy, and conversion-focused.

Avoid:

- Generic template feeling
- Overloaded layouts
- Weak hierarchy
- Decorative effects that do not support the offer
- Excessive animations
- Visual clutter

Use Framer Motion for smooth, subtle animations that improve perceived quality without hurting usability or performance.

## SEO And Performance

Every landing page should include:

- Clear metadata title and description
- Logical heading structure
- Descriptive content sections
- Fast-loading assets
- Responsive images where applicable
- Clean semantic HTML
- Good Core Web Vitals practices

Prefer static or server-rendered pages when possible. Client components should be used only when interaction or animation requires them.

## Project Organization

As the app grows, prefer a structure that separates:

- Shared UI components
- Landing page sections
- Template data by niche
- Utility functions
- Design/theme configuration
- Form and integration logic

Keep the system easy to understand for future Codex sessions and for Juan Manuel as the founder learning while building.

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
