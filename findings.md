# Findings & Design Intelligence: ECOFUEGO x Enhanced Design System

## 1. Análisis del Template "Enhanced" (Framer DTC Aesthetic)
- **Fondo & Atmósfera**: Base oscura obsidiana (`#07090e`, `#0a0d14`), con "aurora mesh gradients" en azul eléctrico y violeta. Para ECOFUEGO, la atmósfera se transmuta a fuego volcánico, resplandor ámbar incandescente (`#ff5400`, `#ff8500`, `#ffaa00`) y acentos verde bosque sustentable (`#2d6a4f`, `#40916c`).
- **Barra Superior**: Ticker delgado anunciando envíos y CTA rápido.
- **Header**: Glassmorphism con `backdrop-filter: blur(20px)`, borde inferior sutil (`rgba(255,255,255,0.06)`).
- **Tipografía**:
  - Títulos principales: Display Sans audaz, mayúsculas, tracking ultra apretado (`-0.03em`), interlineado compacto (`0.95` a `1.1`).
  - Subtítulos y micro-copy: Inter / Plus Jakarta Sans limpio, legibilidad cristalina con pesos 400 y 500.
- **Sección Hero**:
  - Columna izquierda: Badge "NUEVA GENERACIÓN", Título masivo apilado ("EL FUEGO SUSTENTABLE HA LLEGADO"), párrafo persuasivo, botón primario con gradiente y resplandor suave, botón secundario ghost con borde blanco, micro-bullets de confianza abajo.
  - Columna derecha: Render / fotografía de producto con iluminación ambiental perimetral y reflejo inferior en espejo.
- **Sección "Statement" Aurora**:
  - Gradiente en pantalla completa con texto centrado monumental: *"ECOLOGÍA Y RENDIMIENTO SUPERIOR. MIRÁ DE LO QUE ES CAPAZ UN VERDADERO FUEGO."*
- **Tarjetas Bento Editorial**:
  - Tarjetas anchas (aspecto 16:9 o 2:1) con fondo oscuro, gradiente radial sutil, texto a la izquierda y visual a la derecha.
  - Tarjetas cuadradas 2x2 con foto a sangre, texto inferior y botón circular blanco con flecha `→`.
- **Integración del Video**:
  - Contenedor cinematográfico con marco estilizado (aspect-ratio vertical 9:16 o 16:9 con blur periférico), brillo ambiental y controles minimalistas.
- **Sección Catálogo / Precios**:
  - Tarjetas con borde iluminado, insignia destacada, precio con formato monetario ARS, botón dinámico de Mercado Pago y botón alternativo de WhatsApp.
- **Mega Footer**:
  - Marca en texto colosal (`ECOFUEGO`) ocupando todo el ancho de la pantalla.
  - Bloque flotante de suscripción/contacto para mayoristas con fondo glow degradado.

## 2. Frameworks & Repositorios de Referencia (GitHub & UI UX Pro Max)
- **Magic UI & Aceternity UI**: Patrones de Bento Grid, Border Beam (bordes con luz en movimiento), Spotlight Effect y Aurora Backgrounds sin dependencias pesadas mediante CSS puro (`radial-gradient` + `mix-blend-mode`).
- **Shadcn/UI**: Tokens semánticos de espaciado, accesibilidad WCAG AA, foco visible, curvas `--radius`.
- **UI UX Pro Max Skill**: Patrón "Scroll-Triggered Storytelling" con alta retención visual, estructura mobile-first y optimización de rendimiento.
