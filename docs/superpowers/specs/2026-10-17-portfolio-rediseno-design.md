# Rediseño del portfolio — diseño

Fecha: 2026-10-17 · Repo: `pytocino/pytocino.github.io` · URL: https://pytocino.github.io/

## 1. Objetivo

Rehacer desde cero el portfolio personal para **buscar empleo**. Lo leerán reclutadores y equipos técnicos.
Tiene que presentar a Pedro David García como **perfil híbrido DevOps + desarrollador** y ser
visualmente moderno y bonito.

Criterios de éxito:

- En menos de 10 segundos un reclutador entiende quién es, qué hace y cómo contactarle.
- Contenido coherente con el CV actual (SAES, marzo de 2025 – actualidad).
- Bilingüe: español (por defecto) e inglés.
- Lighthouse ≥ 95 en Performance, Accessibility, Best Practices y SEO, en móvil.
- La propia web demuestra la parte DevOps: build y despliegue automáticos con GitHub Actions.

## 2. Decisiones tomadas

| Tema | Decisión |
|---|---|
| Alcance | Rehacer entero. Sustituye a la app de React (CRA) actual |
| Tecnología | **Astro** (última versión estable), salida 100 % estática, CSS propio con variables (sin framework CSS) |
| Despliegue | **GitHub Actions → GitHub Pages** (`actions/deploy-pages`), en lugar de la rama `gh-pages` y `npm run deploy` |
| Idiomas | ES en `/` y EN en `/en/`, con el i18n nativo de Astro y selector ES · EN en la barra |
| Estilo visual | **"C · Bento claro"** con toques de código (validado en el visual companion) |
| Proyectos | Solo **BeerFinder**, como caso de estudio |
| Foto | Sin foto (como en la maqueta aprobada) |

## 3. Diseño visual

- **Paleta:** fondo crema `#f5f3ee`; texto casi negro `#161616`; acento rojo teja `#e2553b`;
  tarjetas blancas con borde `#e7e3da`; bloque oscuro `#161616` para destacar.
- **Tipografía** (autoalojada con Fontsource, sin Google Fonts):
  - Titulares: serifa editorial (*Instrument Serif*).
  - Texto: *Inter*.
  - Detalles de código: *JetBrains Mono*, para las etiquetas de sección tipo `// experiencia`,
    los chips de tecnologías y la mini-terminal del pie.
- **Bento:** cuadrícula de tarjetas redondeadas (12–14 px) para las cifras de la portada.
- **Movimiento:** solo aparición suave de secciones al hacer scroll (IntersectionObserver +
  CSS) y hover en las tarjetas. Se desactiva con `prefers-reduced-motion`.
- **Responsive:** primero el móvil (la maqueta aprobada es de móvil). En escritorio, ancho de
  contenido máximo de unos 1100 px y el bento a 4 columnas.
- **Solo tema claro**, sin modo oscuro (YAGNI).

## 4. Estructura de la página

Una sola página por idioma, con navegación por anclas. La barra superior es fija y lleva el
nombre, enlaces a las secciones (en móvil, menú ☰) y el selector ES · EN.

1. **Portada (`#inicio`)**
   - Etiqueta `// hola` y titular: «DevOps & developer que *despliega* lo que programa.»
   - Subtítulo: técnico de infraestructura en SAES; opera plataformas de contenedores y
     programa las aplicaciones que corren encima.
   - Botones: **Descargar CV** (principal), LinkedIn y GitHub.
   - Bento con 4 cifras: **~60** contenedores en producción · **Diario** deploys con GitLab CI/CD ·
     **140** usuarios en aplicaciones desarrolladas · **iOS + Android** BeerFinder publicada.
2. **Experiencia (`#experiencia`)** — línea temporal con borde de acento.
   - **SAES, S.M.E.** · Técnico en Infraestructura Digital · Cartagena · mar 2025 – actualidad.
     Resumen visible más 4 bloques desplegables (`<details>`) con las viñetas del CV:
     Plataforma de contenedores y CI/CD · Observabilidad · Sistemas · Desarrollo.
   - **Universidad Politécnica de Cartagena** · Becario Desarrollo Full-Stack · abr 2024 – jun 2024.
   - Chips de tecnologías en cada puesto.
   - Solo se publica lo que ya figura en el CV (sector defensa): sin capturas, nombres de
     sistemas internos ni detalles adicionales.
3. **Proyecto destacado: BeerFinder (`#beerfinder`)**
   - Descripción: red social para cerveceros. Check-ins con foto y valoración, mapa de bares,
     carta de cervezas hecha entre todos, gamificación (niveles, insignias, rachas, ranking).
     Proyecto en solitario: desarrollo, diseño y marketing.
   - Capturas reales de `beerfinder/store-screenshots/phone/` (feed, mapa, perfil, insignias),
     convertidas a WebP/AVIF con `astro:assets`. En móvil se ven en un carrusel horizontal con
     scroll-snap.
   - Botones: App Store (`https://apps.apple.com/es/app/beerfinder/id6793606688`),
     Google Play (`https://play.google.com/store/apps/details?id=es.beerfinder.app`) y la web
     `https://beerfinder.es`.
   - **Arquitectura**, en un diagrama SVG hecho a mano con el estilo de la web:
     App (Expo SDK 57 · React Native · TypeScript · expo-router · TanStack Query · Zustand)
     → Cloudflare → API Laravel 13 + Sanctum en Laravel Cloud/Forge → MySQL + Redis;
     notificaciones push con FCM/APNs.
   - No se muestran cifras de usuarios ni de check-ins.
4. **Stack (`#stack`)** — chips agrupados en dos mitades:
   - *Infraestructura:* Docker, Compose, Swarm, Portainer, Kubernetes (kubeadm), GitLab CI/CD,
     GitLab Runner, Prometheus, Grafana, Nginx, TLS/PKI, DNS, LDAP, OIDC/SSO, Linux (Ubuntu),
     Windows Server, Active Directory, Entra ID.
   - *Desarrollo:* Python, PowerShell, PHP/Laravel, React/TypeScript, React Native, C#/.NET,
     PostgreSQL, MySQL, SQL Server.
5. **Formación (`#formacion`)**
   - Despliegue de aplicaciones con Docker — Docker Certified Associate (DCA) · curso de 30 h ·
     2026 (examen en oct 2026).
   - FP Desarrollo de Aplicaciones Web · CIFP Carlos III · 2022–2024.
   - Inglés avanzado (Cambridge B2).
   - El Máster de IA y Big Data se elimina (no aparece en el CV).
6. **Contacto (`#contacto`) y pie**
   - «¿Hablamos?» · `pedrodavidg88@gmail.com` · Cartagena, Región de Murcia · LinkedIn · GitHub.
   - Mini-terminal con **datos reales del build**:
     `$ git push origin master` → `✔ build · check · deploy → GitHub Pages` y
     `commit <sha corto> · <fecha del build>`, inyectados en la build desde `GITHUB_SHA`, con
     enlace al workflow del repo.

**Datos personales:** se eliminan el teléfono, la fecha de nacimiento y la línea del carnet de
conducir. LinkedIn pasa a `https://www.linkedin.com/in/pedrodavidgarcialopez`.

## 5. Arquitectura del código

```
src/
  content/            # el contenido, separado de la maquetación
    es.ts             # textos en español
    en.ts             # textos en inglés
    types.ts          # tipo `SiteContent` que deben cumplir ambos
    shared.ts         # lo que no se traduce: URLs, cifras, nombres de tecnologías
  components/         # Nav, Hero, Bento, Experience, Project, ArchitectureDiagram,
                      # Stack, Education, Contact, BuildTerminal, LangSwitch
  layouts/Base.astro  # <head>: SEO, OG, hreflang, JSON-LD, fuentes
  pages/
    index.astro       # ES
    en/index.astro    # EN (misma composición, otro contenido)
  styles/global.css   # variables de diseño, reset, tipografía
  assets/beerfinder/  # capturas (optimizadas en la build)
public/
  cv/                 # CV en PDF
  og/                 # imagen para compartir (1200×630)
  favicon.svg
.github/workflows/deploy.yml
```

- Cada componente recibe su parte del contenido por props y no sabe de idiomas. Las dos
  páginas solo eligen `es` o `en` y componen los mismos componentes.
- TypeScript estricto: si falta una traducción, `astro check` falla.
- JavaScript en cliente mínimo: menú móvil, aparición al hacer scroll y nada más. Los
  desplegables de experiencia son `<details>` nativos.

## 6. SEO y metadatos

- `<title>` y `meta description` por idioma (p. ej. «Pedro David García — DevOps & Developer»).
- `hreflang` es/en/x-default, `canonical`, `<html lang>` correcto.
- Open Graph y Twitter Card con una imagen 1200×630 en el estilo de la web.
- JSON-LD `Person` (nombre, puesto, `sameAs` LinkedIn y GitHub).
- `@astrojs/sitemap` y `robots.txt`.

## 7. CI/CD (GitHub Actions)

Workflow `deploy.yml`:

- **Disparadores:** push a `master`, pull requests (solo build y check, sin desplegar) y manual
  (`workflow_dispatch`).
- **Job `build`:** `actions/checkout` → `actions/setup-node` (LTS, con caché de npm) → `npm ci` →
  `npx astro check` → `npm run build` → **Lighthouse CI** sobre el `dist/` con umbral ≥ 0.95
  en las 4 categorías (si no se llega, el job falla) → `actions/upload-pages-artifact`.
- **Job `deploy`** (solo en `master`): `actions/deploy-pages`, con `permissions: pages: write,
  id-token: write` y `concurrency` para no solapar despliegues.
- Badge del workflow en el README.

**Cambio de configuración necesario (lo hace Pedro o se hace con su permiso):** en
*Settings → Pages*, pasar *Source* de «Deploy from a branch (gh-pages)» a **GitHub Actions**.
La rama `gh-pages` se conserva hasta comprobar que el nuevo despliegue funciona, y después se
borra.

## 8. Migración

1. Etiquetar el estado actual como `v1-react` para conservar el portfolio antiguo.
2. Trabajar en la rama `rediseno`. Se borra el código de CRA (`src/`, `public/` y dependencias
   viejas) y se crea el proyecto Astro.
3. Validar en local y en la PR (el workflow hace build y check).
4. Merge a `master`, cambiar la fuente de Pages y verificar en producción.

## 9. Material que tiene que aportar Pedro

- **CV en PDF actualizado** (el de la captura de LinkedIn), en español. Si hay versión en
  inglés, la web en inglés enlaza a esa; si no, ambas enlazan al PDF en español con la
  indicación «(ES)».
- Lo demás (textos, capturas y enlaces) sale del CV y del repo de BeerFinder.

## 10. Verificación

- `astro check` y `npm run build` sin errores.
- Playwright (Chromium local) para los smoke tests: `/` y `/en/` cargan, todas las secciones
  existen, el selector de idioma navega correctamente, ningún enlace interno da 404 y se
  generan capturas a 390 px (móvil) y 1280 px (escritorio) para revisión visual.
- Lighthouse CI ≥ 0.95 (en el workflow).
- Tras el despliegue: `https://pytocino.github.io/` y `/en/` responden 200, y la mini-terminal
  muestra el SHA del commit desplegado.

## Fuera de alcance

Modo oscuro, blog, más proyectos, formulario de contacto, analítica y dominio propio.
