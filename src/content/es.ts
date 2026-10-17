import type { SiteContent } from "./types.ts";
import { stackDev, stackInfra, techBeerfinder, techSaes, techUpct } from "./shared.ts";

export const es: SiteContent = {
  meta: {
    title: "Pedro David García — DevOps & Developer",
    description:
      "Técnico de infraestructura y desarrollador en Cartagena. Docker, CI/CD con GitLab, Prometheus y Grafana, y aplicaciones con Laravel, React y .NET.",
  },
  sectionIds: {
    inicio: "inicio",
    experiencia: "experiencia",
    beerfinder: "beerfinder",
    stack: "stack",
    formacion: "formacion",
    contacto: "contacto",
  },
  nav: {
    items: [
      { key: "experiencia", label: "Experiencia" },
      { key: "beerfinder", label: "Proyecto" },
      { key: "stack", label: "Stack" },
      { key: "formacion", label: "Formación" },
      { key: "contacto", label: "Contacto" },
    ],
    langLabel: "Idioma",
    menuLabel: "Menú",
  },
  cvHref: "/cv/CV-PedroDavidGarcia-ES.pdf",
  hero: {
    kicker: "hola",
    titleBefore: "DevOps & developer que ",
    titleEmphasis: "despliega",
    titleAfter: " lo que programa.",
    subtitle:
      "Técnico de infraestructura en SAES. Opero plataformas de contenedores, pipelines de CI/CD y monitorización, y programo las aplicaciones que corren encima.",
    ctaCv: "Descargar CV",
    ctaLinkedin: "LinkedIn",
    ctaGithub: "GitHub",
    stats: [
      { value: "~60", label: "contenedores en producción" },
      { value: "Diario", label: "despliegues con GitLab CI/CD" },
      { value: "140", label: "usuarios en apps que he desarrollado" },
      { value: "iOS + Android", label: "BeerFinder publicada en las tiendas" },
    ],
  },
  experience: {
    kicker: "experiencia",
    title: "Experiencia",
    jobs: [
      {
        company: "SAES, S.M.E.",
        role: "Técnico en Infraestructura Digital",
        place: "Cartagena, Región de Murcia",
        period: "mar 2025 – actualidad",
        summary:
          "Plataforma de contenedores y CI/CD, observabilidad, sistemas Microsoft y desarrollo de las aplicaciones internas que despliego.",
        groups: [
          {
            title: "Plataforma de contenedores y CI/CD",
            bullets: [
              "Despliegue y administración en producción de una plataforma Docker Swarm (nodo único) gestionada con Portainer: unos 60 contenedores activos, stacks, redes overlay y reverse proxy con Nginx Proxy Manager con terminación TLS mediante la CA corporativa.",
              "Contenerización y despliegue en producción de servicios propios: API ASP.NET Core con PostgreSQL, microservicio Python y plataforma web Laravel + React.",
              "Pipelines CI/CD en GitLab para pruebas, build y despliegue automatizado de contenedores, con despliegues prácticamente diarios a producción.",
              "Administración de GitLab CE autoalojado: migración a HTTPS, SSO con Entra ID (OIDC), actualizaciones mayores y mantenimiento.",
              "Propuesta de diseño de infraestructura Kubernetes (kubeadm) sobre cinco nodos bare-metal en entorno aislado (air-gapped).",
            ],
          },
          {
            title: "Observabilidad",
            bullets: [
              "Implantación de la monitorización con Prometheus y Grafana, que hoy usan muchos compañeros de la empresa como base de sus dashboards y alertas.",
            ],
          },
          {
            title: "Sistemas",
            bullets: [
              "Administración de entorno híbrido Microsoft (Active Directory, Entra ID, Intune, GPO, PKI corporativa) y automatización con PowerShell y Python.",
            ],
          },
          {
            title: "Desarrollo",
            bullets: [
              "Desarrollo de las aplicaciones internas que despliego: plataforma de gestión de personas con 140 usuarios (Laravel + React + MySQL) y aplicación de expediciones (.NET 10, ASP.NET Core, EF Core, PostgreSQL, autenticación Entra ID).",
            ],
          },
        ],
        tech: techSaes,
      },
      {
        company: "Universidad Politécnica de Cartagena",
        role: "Becario Desarrollo Full-Stack",
        place: "Cartagena, Región de Murcia",
        period: "abr 2024 – jun 2024",
        summary: "Mantenimiento de servidores web y desarrollo full-stack (Laravel, React).",
        groups: [],
        tech: techUpct,
      },
    ],
  },
  project: {
    kicker: "proyecto destacado",
    title: "BeerFinder",
    tagline: "La red social de los cerveceros, en iOS y Android.",
    description:
      "Apunta lo que bebes, puntúa bares y sube de nivel. Check-ins con foto y valoración, mapa de bares, carta de cervezas hecha entre todos y una capa de juego con niveles, insignias, rachas y ranking. La he diseñado, programado y publicado yo solo: de la API a las tiendas.",
    ctaAppStore: "App Store",
    ctaPlay: "Google Play",
    ctaWeb: "beerfinder.es",
    archTitle: "Arquitectura",
    arch: {
      app: "App móvil · Expo + React Native",
      edge: "Cloudflare",
      api: "API Laravel 13 + Sanctum",
      data: "MySQL + Redis",
      push: "Push · FCM / APNs",
    },
    tech: techBeerfinder,
    screenshotsAlt: [
      "Feed de check-ins de amigos en BeerFinder",
      "Mapa de bares cercanos en BeerFinder",
      "Perfil de usuario con nivel y estadísticas",
      "Colección de insignias desbloqueables",
    ],
  },
  stack: {
    kicker: "stack",
    title: "Stack",
    groups: [
      { label: "Infraestructura", items: stackInfra },
      { label: "Desarrollo", items: stackDev },
    ],
  },
  education: {
    kicker: "formación",
    title: "Formación",
    items: [
      {
        title: "Despliegue de aplicaciones con Docker — Docker Certified Associate (DCA)",
        detail: "Curso de 30 h · 2026 · examen de certificación en octubre de 2026",
      },
      { title: "FP Desarrollo de Aplicaciones Web", detail: "CIFP Carlos III, Cartagena · 2022 – 2024" },
      { title: "Inglés avanzado", detail: "Cambridge B2" },
    ],
  },
  contact: {
    kicker: "contacto",
    title: "¿Hablamos?",
    text: "Busco equipos donde pueda moverme entre la infraestructura y el código. Escríbeme y te respondo pronto.",
    location: "Cartagena, Región de Murcia",
    terminalNote: "esta web se compila, se audita y se despliega sola con GitHub Actions",
  },
};
