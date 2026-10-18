# pytocino.github.io

[![Build & deploy](https://github.com/pytocino/pytocino.github.io/actions/workflows/deploy.yml/badge.svg)](https://github.com/pytocino/pytocino.github.io/actions/workflows/deploy.yml)

Portfolio de **Pedro David García López**, DevOps & developer, en ES y EN → https://pytocino.github.io

## Stack

- [Astro](https://astro.build), con salida 100 % estática e i18n nativo (`/` ES, `/en/` EN)
- TypeScript estricto, con el contenido tipado en `src/content/{es,en}.ts`
- CSS propio y fuentes autoalojadas con Fontsource (Instrument Serif, Inter y JetBrains Mono)
- Playwright (e2e), `node --test` (unit) y Lighthouse CI

## Comandos

```bash
npm run dev        # servidor de desarrollo
npm run build      # compila a dist/
npm run check      # astro check (tipos)
npm run test:unit  # tests unitarios
npm run test:e2e   # tests e2e con Playwright (compila y sirve dist/)
npm run assets     # regenera los CV en PDF y las imágenes OG desde /print/
```

Para actualizar el contenido, edita `src/content/es.ts` y `src/content/en.ts`. Si cambias datos del CV, ejecuta después `npm run assets`.

## Cómo se despliega

Cada push a `master` lanza [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), que hace esto:
`astro check` → tests unitarios → tests e2e → build → Lighthouse CI (≥ 95 en rendimiento, accesibilidad, buenas prácticas y SEO) → despliegue en GitHub Pages.
En las pull requests se ejecuta todo menos el despliegue. El pie de la web muestra el commit desplegado.

La versión anterior (React + CRA) está en la etiqueta `v1-react`.
