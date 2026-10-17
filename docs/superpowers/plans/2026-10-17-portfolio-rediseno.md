# Rediseño del portfolio — plan de implementación

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Sustituir el portfolio de React (CRA) por una web estática bilingüe en Astro, con el estilo «Bento claro», que se compila y despliega sola con GitHub Actions en GitHub Pages.

**Architecture:** Una sola página por idioma (`/` ES y `/en/` EN), compuesta por los mismos componentes Astro. Cada componente recibe su contenido por props desde `src/content/{es,en}.ts`, tipados con `SiteContent`. JavaScript en cliente mínimo (menú móvil y aparición al hacer scroll). CI: check, build, Lighthouse y deploy.

**Tech Stack:** Astro 7.x, TypeScript estricto, CSS propio con variables, Fontsource (Inter, Instrument Serif, JetBrains Mono), `@astrojs/sitemap`, Playwright (smoke/e2e), `node --test` (unit, con type stripping de Node 24), Lighthouse CI (`@lhci/cli`), GitHub Actions.

**Spec:** `docs/superpowers/specs/2026-10-17-portfolio-rediseno-design.md`

## Global Constraints

- Node 24 (local: `~/.nvm/versions/node/v24.13.1/bin`; CI: `node-version: 24`). Antes de cada comando: `export PATH=$HOME/.nvm/versions/node/v24.13.1/bin:$PATH`.
- Rama de trabajo `rediseno`; la rama por defecto del repo es `master`.
- `site: "https://pytocino.github.io"`, sin `base`. i18n: `defaultLocale: "es"`, `locales: ["es","en"]`, `prefixDefaultLocale: false`, `trailingSlash: "ignore"`.
- Paleta: `--bg #f5f3ee`, `--ink #161616`, `--accent #e2553b`, `--card #ffffff`, `--line #e7e3da`.
- Fuentes autoalojadas con Fontsource; está prohibido usar Google Fonts o cualquier CDN externo.
- Solo tema claro. Todo movimiento se desactiva con `prefers-reduced-motion: reduce`.
- Nunca aparecen en la web: teléfono, fecha de nacimiento, carnet de conducir, Máster de IA, cifras de usuarios o check-ins de BeerFinder, ni información de SAES que no esté en el CV.
- LinkedIn: `https://www.linkedin.com/in/pedrodavidgarcialopez` · GitHub: `https://github.com/pytocino` · Email: `pedrodavidg88@gmail.com`.
- BeerFinder: App Store `https://apps.apple.com/es/app/beerfinder/id6793606688` · Google Play `https://play.google.com/store/apps/details?id=es.beerfinder.app` · Web `https://beerfinder.es`.
- Los textos de la web en español usan castellano de España, con todas sus tildes.
- Commits: autor `pytocino <pedrodavidg88@gmail.com>` y, al final del mensaje, `Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>`.
- No se hace push ni se cambian ajustes del repo en GitHub hasta la Task 10, y en esa tarea solo con confirmación explícita de Pedro.

## Review Focus

1. **La web funciona sin JavaScript:** con JS desactivado, todas las secciones se ven. La animación de aparición nunca deja contenido oculto (la clase que oculta la añade el propio JS). Test en la Task 8.
2. **Pantallas estrechas (320 px):** no hay scroll horizontal en ninguna página (`scrollWidth <= clientWidth`). Test en la Task 8.
3. **Cambio de idioma:** desde `/en/#experience` lleva a `/#experiencia`; los ids de sección son por idioma y el selector conserva la sección equivalente. Test en la Task 3.
4. **Enlaces rotos:** el botón del CV y todos los `href` internos (`/…`) devuelven 200 en el build servido. Test en la Task 7.
5. **Build sin `GITHUB_SHA`** (en local): la mini-terminal muestra `local` en vez de romperse o mostrar `undefined`. Test unitario en la Task 6.

---

### Task 1: Proyecto Astro base (sustituye a CRA)

**Files:**
- Delete: `src/**`, `public/**`, `package-lock.json`, `README.md` (se reescribe en la Task 9)
- Create: `package.json`, `astro.config.mjs`, `tsconfig.json`, `src/styles/global.css`, `src/layouts/Base.astro`, `src/pages/index.astro`, `src/pages/en/index.astro`, `public/favicon.svg`, `playwright.config.ts`, `tests/e2e/smoke.spec.ts`
- Modify: `.gitignore` (añadir `dist/`, `.astro/`, `test-results/`, `playwright-report/`, `.lighthouseci/`)

**Interfaces:**
- Produces: `Base.astro` con props `{ lang: "es" | "en"; title: string; description: string }` y `<slot />`; aplica `global.css` y las fuentes.
- Produces: scripts npm `dev`, `build`, `preview`, `check` (`astro check`), `test:unit` (`node --test tests/unit/`), `test:e2e` (`playwright test`).
- Produces: Playwright con `webServer: npm run build && npm run preview -- --port 4321`, `baseURL http://localhost:4321` y los proyectos `mobile` (390×844) y `desktop` (1280×800).

- [ ] **Step 1:** `git tag v1-react master` (conserva el portfolio antiguo).
- [ ] **Step 2:** Borrar los archivos de CRA y crear el proyecto Astro con las dependencias del Tech Stack. Usar la versión de `typescript` que `@astrojs/check` admita como peer.
- [ ] **Step 3: Test que falla:** `tests/e2e/smoke.spec.ts` → `"/ y /en/ responden con el idioma correcto"`: visitar `/` → status 200 y `html[lang="es"]`; visitar `/en/` → 200 y `html[lang="en"]`; además, `/en` (sin barra final) también da 200.
- [ ] **Step 4:** `npx playwright install chromium` y `npm run test:e2e` → FAIL (todavía no hay páginas).
- [ ] **Step 5:** Implementar `Base.astro`, las dos páginas (por ahora solo un `<h1>` con el nombre) y `global.css` con las variables de la paleta, el reset y las familias tipográficas (`--font-serif: "Instrument Serif"`, `--font-sans: "Inter"`, `--font-mono: "JetBrains Mono"`).
- [ ] **Step 6:** `npm run check && npm run test:e2e` → PASS.
- [ ] **Step 7:** Commit `feat: proyecto Astro base bilingüe`.

### Task 2: Modelo de contenido ES/EN

**Files:**
- Create: `src/content/types.ts`, `src/content/shared.ts`, `src/content/es.ts`, `src/content/en.ts`, `src/content/index.ts`, `tests/unit/content.test.ts`

**Interfaces:**
- Produces: `type Locale = "es" | "en"` y `interface SiteContent` con: `meta {title, description}`, `nav {items: {id, label}[], langLabel}`, `hero {kicker, titleBefore, titleEmphasis, titleAfter, subtitle, ctaCv, ctaLinkedin, ctaGithub, stats: {value, label}[]}`, `experience {kicker, title, jobs: Job[]}` (con `Job {company, role, place, period, summary, groups: {title, bullets: string[]}[], tech: string[]}`), `project {kicker, title, description, ctaAppStore, ctaPlay, ctaWeb, archTitle, screenshotsAlt: string[]}`, `stack {kicker, title, groups: {label, items: string[]}[]}`, `education {kicker, title, items: {title, detail}[]}`, `contact {kicker, title, location, terminalNote}`, `sectionIds: Record<"inicio"|"experiencia"|"beerfinder"|"stack"|"formacion"|"contacto", string>`, `cvHref: string`.
- Produces: `shared.ts` exporta `links` (las URLs de Global Constraints) y `email`.
- Produces: `getContent(locale: Locale): SiteContent` en `index.ts`.
- IDs de sección ES: `inicio, experiencia, beerfinder, stack, formacion, contacto`; EN: `home, experience, beerfinder, stack, education, contact`.

- [ ] **Step 1: Test que falla:** `tests/unit/content.test.ts`:
  - `"es y en tienen la misma forma"`: compara la estructura de claves y la longitud de cada array de `getContent("es")` y `getContent("en")`, recursivamente.
  - `"no hay datos privados"`: el JSON de ambos idiomas no contiene `603`, `28/01/2000`, `Máster`, `Master`, `carnet` ni `driver`.
  - `"cifras del hero"`: los `stats` de ES tienen valores `["~60", "Diario", "140", "iOS + Android"]`.
- [ ] **Step 2:** `npm run test:unit` → FAIL (no existe el módulo).
- [ ] **Step 3:** Escribir los tipos y el contenido. Los textos salen del CV (spec §4) y de la maqueta aprobada; el titular ES es «DevOps & developer que *despliega* lo que programa.» y el EN, «DevOps & developer who *ships* what I build.». Las viñetas de SAES, copiadas literalmente del CV en sus 4 grupos (Plataforma de contenedores y CI/CD · Observabilidad · Sistemas · Desarrollo). El grupo «Observabilidad» se separa del primero con la viñeta de Prometheus/Grafana. Al inglés se traduce con naturalidad, no palabra por palabra.
- [ ] **Step 4:** `npm run test:unit && npm run check` → PASS.
- [ ] **Step 5:** Commit `feat: contenido tipado en español e inglés`.

### Task 3: Barra de navegación, selector de idioma, portada y bento

**Files:**
- Create: `src/components/Nav.astro`, `src/components/LangSwitch.astro`, `src/components/Hero.astro`, `src/components/Bento.astro`, `src/components/SectionHeader.astro`, `src/scripts/nav.ts`, `tests/e2e/nav.spec.ts`
- Modify: `src/pages/index.astro`, `src/pages/en/index.astro`

**Interfaces:**
- Consumes: `getContent`, `SiteContent`, `Locale`.
- Produces: `SectionHeader.astro` con props `{ kicker: string; title: string }`, que pinta `// kicker` en mono y acento y el `<h2>` en serifa. Lo reutilizan las Tasks 4–6.
- Produces: `LangSwitch.astro` con props `{ locale: Locale }`. Son enlaces a `/` y `/en/`, y `nav.ts` reescribe el hash al id equivalente del otro idioma usando un mapa `{experiencia: "experience", …}` exportado desde `src/content/index.ts` como `sectionIdMap`.

- [ ] **Step 1: Tests que fallan** (`tests/e2e/nav.spec.ts`):
  - `"la portada muestra titular, CTAs y 4 cifras"`: en `/` es visible un `h1` que contiene `despliega`; los enlaces CV, LinkedIn y GitHub tienen los `href` de Global Constraints; hay `.bento > *` con 4 elementos.
  - `"el selector conserva la sección"`: ir a `/en/#experience`, pulsar «ES» → la URL acaba en `/#experiencia`.
  - `"menú móvil"` (solo en el proyecto mobile): el botón ☰ abre la lista de secciones (`aria-expanded="true"`), y al pulsar una sección se cierra.
- [ ] **Step 2:** `npm run test:e2e -- nav` → FAIL.
- [ ] **Step 3:** Implementar los componentes según la maqueta aprobada (`.superpowers/brainstorm/*/content/estructura-pagina.html`). Barra fija con fondo crema translúcido. Bento: 2 columnas en móvil y 4 a partir de 768 px. La primera tarjeta es la oscura y lleva la cifra en acento.
- [ ] **Step 4:** `npm run test:e2e -- nav && npm run check` → PASS.
- [ ] **Step 5:** Commit `feat: navegación, selector de idioma y portada`.

### Task 4: Experiencia

**Files:**
- Create: `src/components/Experience.astro`, `src/components/Chips.astro`, `tests/e2e/experience.spec.ts`
- Modify: las dos páginas

**Interfaces:**
- Produces: `Chips.astro` con props `{ items: string[] }`, en mono y con estilo de chip. Lo reutilizan las Tasks 5 y 6.

- [ ] **Step 1: Test que falla:** `"SAES con 4 bloques desplegables"`: en `/`, la sección `#experiencia` contiene 2 puestos; el primero contiene `SAES` y `mar 2025`, y tiene 4 `details`, todos cerrados; al hacer clic en el primer `summary`, su `details` pasa a tener el atributo `open` y se ve una viñeta que contiene `Docker Swarm`.
- [ ] **Step 2:** Ejecutar → FAIL.
- [ ] **Step 3:** Implementar la línea temporal con borde izquierdo de 2 px en acento y los `details` nativos con un marcador +/− en CSS.
- [ ] **Step 4:** Ejecutar → PASS.
- [ ] **Step 5:** Commit `feat: sección de experiencia`.

### Task 5: BeerFinder (capturas y diagrama de arquitectura)

**Files:**
- Create: `src/assets/beerfinder/{01-feed,02-mapa,04-perfil,05-insignias}.png` (copiadas de `~/beerfinder/store-screenshots/phone/`), `src/components/Project.astro`, `src/components/ArchitectureDiagram.astro`, `tests/e2e/project.spec.ts`
- Modify: las dos páginas

**Interfaces:**
- Consumes: `SiteContent["project"]`, `links`, `Chips`, `SectionHeader`.

- [ ] **Step 1: Test que falla:** `"BeerFinder con capturas, tiendas y diagrama"`: la sección `#beerfinder` tiene 4 `img`, todos con `alt` no vacío y con `src` en formato `.webp` o `.avif`; hay enlaces exactos a App Store, Google Play y beerfinder.es; contiene un `svg` con `role="img"` y un `<title>`; el texto de la sección no contiene la palabra `usuarios` (ni `users` en `/en/`).
- [ ] **Step 2:** Ejecutar → FAIL.
- [ ] **Step 3:** Las capturas se procesan con `<Picture>` de `astro:assets` (formats `["avif","webp"]`, `widths [240, 480]`) y van en un carrusel horizontal con `scroll-snap-type: x mandatory` en móvil, y en fila de 4 en escritorio. El diagrama es un SVG inline con 4 cajas y flechas (App → Cloudflare → API → MySQL + Redis) y una rama FCM/APNs → App. Usa la paleta y la tipografía mono, y las etiquetas salen del contenido.
- [ ] **Step 4:** Ejecutar → PASS.
- [ ] **Step 5:** Commit `feat: caso de estudio de BeerFinder`.

### Task 6: Stack, formación, contacto y mini-terminal del build

**Files:**
- Create: `src/components/Stack.astro`, `src/components/Education.astro`, `src/components/Contact.astro`, `src/components/BuildTerminal.astro`, `src/lib/buildInfo.ts`, `tests/unit/buildInfo.test.ts`, `tests/e2e/sections.spec.ts`
- Modify: las dos páginas

**Interfaces:**
- Produces: `getBuildInfo(env: Record<string, string | undefined>, now: Date): { sha: string; date: string; runUrl: string | null }`. `sha` son los 7 primeros caracteres de `env.GITHUB_SHA` o `"local"`; `date` va en formato `YYYY-MM-DD`; `runUrl` es `${GITHUB_SERVER_URL}/${GITHUB_REPOSITORY}/actions/runs/${GITHUB_RUN_ID}` si están las 3 variables, y `null` si falta alguna.

- [ ] **Step 1: Tests que fallan:**
  - unit `"sin variables de CI"`: `getBuildInfo({}, new Date("2026-10-17T10:00:00Z"))` → `{sha:"local", date:"2026-10-17", runUrl:null}`.
  - unit `"en CI"`: con `GITHUB_SHA="1fdb1d6abc…"`, `GITHUB_SERVER_URL="https://github.com"`, `GITHUB_REPOSITORY="pytocino/pytocino.github.io"` y `GITHUB_RUN_ID="42"` → `sha "1fdb1d6"` y `runUrl "https://github.com/pytocino/pytocino.github.io/actions/runs/42"`.
  - e2e `"secciones finales"`: `#stack` tiene 2 grupos y el primero contiene `Docker`; `#formacion` contiene `Docker Certified Associate` y `Cambridge B2`; `#contacto` tiene un `a[href="mailto:pedrodavidg88@gmail.com"]` y la terminal contiene `commit local`.
- [ ] **Step 2:** `npm run test:unit && npm run test:e2e -- sections` → FAIL.
- [ ] **Step 3:** Implementar. `BuildTerminal` llama a `getBuildInfo(process.env, new Date())` en el frontmatter y pinta `$ git push origin master` / `✔ build · check · deploy → GitHub Pages` / `commit <sha> · <date>`, más la nota del contenido; si hay `runUrl`, enlaza a él. Fondo `--ink`, `✔` en verde `#3ee08f` y `$` en acento.
- [ ] **Step 4:** Ejecutar → PASS.
- [ ] **Step 5:** Commit `feat: stack, formación, contacto y terminal del build`.

### Task 7: SEO, metadatos, CV y enlaces

**Files:**
- Create: `public/og/og-es.png`, `public/og/og-en.png` (1200×630; se generan con una captura Playwright de `src/pages/og/[lang].astro`, que se excluye del sitemap y lleva `noindex`), `public/robots.txt`, `public/cv/CV-PedroDavidGarcia.pdf` (o un marcador de posición, ver Step 3), `tests/e2e/seo.spec.ts`
- Modify: `src/layouts/Base.astro`, `astro.config.mjs` (integración sitemap)

- [ ] **Step 1: Tests que fallan** (`seo.spec.ts`):
  - `"metadatos"`: en `/` y `/en/` → `title` contiene `Pedro David García`; hay `meta[name=description]`, `link[rel=canonical]`, `link[rel=alternate][hreflang]` para `es`, `en` y `x-default`, `meta[property="og:image"]` absoluto y un `script[type="application/ld+json"]` que parsea a `@type: "Person"` con `sameAs` incluyendo LinkedIn y GitHub.
  - `"sin enlaces internos rotos"`: recoger todos los `a[href^="/"]` de `/` y `/en/` y hacer request a cada uno (sin el hash) → 200. Incluye el CV.
  - `"sitemap"`: `/sitemap-index.xml` responde 200.
- [ ] **Step 2:** Ejecutar → FAIL.
- [ ] **Step 3:** Implementar los metadatos en `Base.astro`. CV: si Pedro ya ha pasado el PDF, copiarlo a `public/cv/CV-PedroDavidGarcia.pdf`; si no, generar un PDF temporal de una página («CV en preparación») con el mismo nombre y apuntarlo como pendiente para la Task 10. `cvHref = "/cv/CV-PedroDavidGarcia.pdf"` en ambos idiomas; en EN, la etiqueta del botón es «Download CV (ES)» salvo que haya PDF en inglés.
- [ ] **Step 4:** Ejecutar → PASS.
- [ ] **Step 5:** Commit `feat: SEO, imagen OG, sitemap y CV`.

### Task 8: Movimiento, responsive y revisión visual

**Files:**
- Create: `src/scripts/reveal.ts`, `tests/e2e/robustness.spec.ts`, `tests/e2e/screenshots.spec.ts`
- Modify: `src/styles/global.css`, componentes que necesiten ajustes

- [ ] **Step 1: Tests que fallan** (`robustness.spec.ts`):
  - `"sin JavaScript todo se ve"`: contexto con `javaScriptEnabled: false` → los 6 `section` de `/` tienen `opacity` computada `1` y son visibles.
  - `"sin scroll horizontal a 320 px"`: viewport 320×640, en `/` y `/en/` → `document.documentElement.scrollWidth <= clientWidth`.
  - `"reduced motion"`: con `reducedMotion: "reduce"` → ninguna sección tiene `transition-duration` distinto de `0s`.
- [ ] **Step 2:** Ejecutar → FAIL (en al menos el primero, cuando se añada `reveal`, o en el de 320 px si algo desborda).
- [ ] **Step 3:** `reveal.ts` añade la clase `js-reveal` a `<html>` y usa IntersectionObserver para poner `.is-visible`. El CSS solo oculta con `.js-reveal section:not(.is-visible)` (fade + translateY de 12 px y 400 ms). Hover de tarjetas: `translateY(-2px)` y una sombra suave. Corregir cualquier desbordamiento a 320 px.
- [ ] **Step 4:** Ejecutar → PASS.
- [ ] **Step 5:** `screenshots.spec.ts` guarda capturas de página completa de `/` y `/en/` en mobile y desktop en `test-results/screenshots/`. Revisarlas visualmente comparándolas con la maqueta aprobada y corregir lo que desentone (jerarquía, espaciados, contraste).
- [ ] **Step 6:** Commit `feat: animaciones suaves y ajustes responsive`.

### Task 9: CI/CD con GitHub Actions, Lighthouse y README

**Files:**
- Create: `.github/workflows/deploy.yml`, `lighthouserc.json`, `README.md`

- [ ] **Step 1:** `lighthouserc.json`: `ci.collect.staticDistDir: "./dist"`, URLs `/index.html` y `/en/index.html`, `settings.preset` móvil (por defecto); `ci.assert.assertions`: `categories:performance`, `categories:accessibility`, `categories:best-practices` y `categories:seo` → `["error", {"minScore": 0.95}]`; `upload.target: "temporary-public-storage"`.
- [ ] **Step 2:** Verificación local: `npm run build && CHROME_PATH=$(node -e "console.log(require('playwright').chromium.executablePath())") npx lhci autorun` → todas las aserciones pasan. Si alguna categoría baja de 0.95, corregir la causa (no bajar el umbral).
- [ ] **Step 3:** `deploy.yml` según spec §7. Disparadores: `push` a `master`, `pull_request` y `workflow_dispatch`. Job `build`: checkout, setup-node 24 con caché npm, `npm ci`, `npm run check`, `npm run test:unit`, `npm run build`, `npx lhci autorun` y `actions/upload-pages-artifact` con `path: dist`. Job `deploy`: `needs: build`, `if: github.ref == 'refs/heads/master' && github.event_name != 'pull_request'`, `environment: github-pages`, `permissions: {pages: write, id-token: write}`, `concurrency: {group: pages, cancel-in-progress: false}` y `actions/deploy-pages`. Las versiones de las actions, las últimas majors.
- [ ] **Step 4:** Validar la sintaxis: `npx --yes @action-validator/cli .github/workflows/deploy.yml` (o `actionlint` si está disponible) → sin errores.
- [ ] **Step 5:** `README.md`: badge del workflow, una línea de qué es, stack, comandos (`npm run dev/build/test:e2e`) y «cómo se despliega».
- [ ] **Step 6:** Commit `ci: build, Lighthouse y despliegue en GitHub Pages`.

### Task 10: Publicación (requiere confirmación de Pedro)

- [ ] **Step 1:** Si el CV real todavía no está en el repo, pedírselo a Pedro y sustituir el marcador; `npm run test:e2e -- seo` → PASS.
- [ ] **Step 2:** Pasada final completa: `npm run check && npm run test:unit && npm run test:e2e` → todo PASS.
- [ ] **Step 3:** Con el OK de Pedro: `git push -u origin rediseno` y abrir la PR `rediseno → master`. El workflow corre en la PR (sin desplegar) → verde.
- [ ] **Step 4:** Con el OK de Pedro: cambiar la fuente de Pages a GitHub Actions (`gh api -X PUT repos/pytocino/pytocino.github.io/pages -f build_type=workflow`) y hacer merge de la PR.
- [ ] **Step 5:** Verificación en producción: el workflow de `master` termina en verde; `curl -s -o /dev/null -w "%{http_code}"` a `https://pytocino.github.io/`, `/en/` y `/cv/CV-PedroDavidGarcia.pdf` → `200`; la home contiene `commit <sha corto del merge>`.
- [ ] **Step 6:** Con el OK de Pedro, borrar la rama `gh-pages` del remoto.
