import type { SiteContent } from "./types.ts";
import { stackDev, stackInfra, techBeerfinder, techSaes, techUpct } from "./shared.ts";

export const en: SiteContent = {
  meta: {
    title: "Pedro David García — DevOps & Developer",
    description:
      "Infrastructure engineer and developer based in Cartagena, Spain. Docker, GitLab CI/CD, Prometheus and Grafana, plus apps built with Laravel, React and .NET.",
  },
  sectionIds: {
    inicio: "home",
    experiencia: "experience",
    beerfinder: "beerfinder",
    stack: "stack",
    formacion: "education",
    contacto: "contact",
  },
  nav: {
    items: [
      { key: "experiencia", label: "Experience" },
      { key: "beerfinder", label: "Project" },
      { key: "stack", label: "Stack" },
      { key: "formacion", label: "Education" },
      { key: "contacto", label: "Contact" },
    ],
    langLabel: "Language",
    menuLabel: "Menu",
  },
  cvHref: "/cv/CV-PedroDavidGarcia-EN.pdf",
  hero: {
    kicker: "hello",
    titleBefore: "DevOps & developer who ",
    titleEmphasis: "ships",
    titleAfter: " what I build.",
    subtitle:
      "Infrastructure engineer at SAES. I run container platforms, CI/CD pipelines and monitoring, and I write the applications that run on top of them.",
    ctaCv: "Download CV",
    ctaLinkedin: "LinkedIn",
    ctaGithub: "GitHub",
    stats: [
      { value: "~60", label: "containers in production" },
      { value: "Daily", label: "deployments with GitLab CI/CD" },
      { value: "140", label: "users on apps I've built" },
      { value: "iOS + Android", label: "BeerFinder live on the stores" },
    ],
  },
  experience: {
    kicker: "experience",
    title: "Experience",
    jobs: [
      {
        company: "SAES, S.M.E.",
        role: "Digital Infrastructure Engineer",
        place: "Cartagena, Spain",
        period: "Mar 2025 – present",
        summary:
          "Container platform and CI/CD, observability, Microsoft systems, and development of the internal applications I deploy.",
        groups: [
          {
            title: "Container platform & CI/CD",
            bullets: [
              "Deployed and run in production a single-node Docker Swarm platform managed with Portainer: around 60 active containers, stacks, overlay networks and an Nginx Proxy Manager reverse proxy with TLS termination using the corporate CA.",
              "Containerised and shipped in-house services to production: an ASP.NET Core API with PostgreSQL, a Python microservice and a Laravel + React web platform.",
              "GitLab CI/CD pipelines for testing, building and automatically deploying containers, with deployments to production almost every day.",
              "Administration of self-hosted GitLab CE: migration to HTTPS, SSO with Entra ID (OIDC), major upgrades and maintenance.",
              "Proposed the design of a Kubernetes (kubeadm) infrastructure on five bare-metal nodes in an air-gapped environment.",
            ],
          },
          {
            title: "Observability",
            bullets: [
              "Rolled out monitoring with Prometheus and Grafana, which many colleagues across the company now use as the basis for their dashboards and alerts.",
            ],
          },
          {
            title: "Systems",
            bullets: [
              "Administration of a hybrid Microsoft environment (Active Directory, Entra ID, Intune, GPO, corporate PKI) and automation with PowerShell and Python.",
            ],
          },
          {
            title: "Development",
            bullets: [
              "Built the internal applications I deploy: a people-management platform with 140 users (Laravel + React + MySQL) and an expeditions app (.NET 10, ASP.NET Core, EF Core, PostgreSQL, Entra ID authentication).",
            ],
          },
        ],
        tech: techSaes,
      },
      {
        company: "Universidad Politécnica de Cartagena",
        role: "Full-Stack Developer Intern",
        place: "Cartagena, Spain",
        period: "Apr 2024 – Jun 2024",
        summary: "Web server maintenance and full-stack development (Laravel, React).",
        groups: [],
        tech: techUpct,
      },
    ],
  },
  project: {
    kicker: "featured project",
    title: "BeerFinder",
    tagline: "The social network for beer lovers, on iOS and Android.",
    description:
      "Log what you drink, rate bars and level up. Check-ins with photo and rating, a map of bars, a community-built beer menu for each venue and a game layer with levels, badges, streaks and leaderboards. I designed, built and shipped it on my own, from the API to the app stores.",
    ctaAppStore: "App Store",
    ctaPlay: "Google Play",
    ctaWeb: "beerfinder.es",
    archTitle: "Architecture",
    arch: {
      app: "Mobile app · Expo + React Native",
      edge: "Cloudflare",
      api: "Laravel 13 API + Sanctum",
      data: "MySQL + Redis",
      push: "Push · FCM / APNs",
    },
    tech: techBeerfinder,
    screenshotsAlt: [
      "BeerFinder feed with friends' check-ins",
      "Map of nearby bars in BeerFinder",
      "User profile with level and stats",
      "Collection of unlockable badges",
    ],
  },
  stack: {
    kicker: "stack",
    title: "Stack",
    groups: [
      { label: "Infrastructure", items: stackInfra },
      { label: "Development", items: stackDev },
    ],
  },
  education: {
    kicker: "education",
    title: "Education",
    items: [
      {
        title: "Deploying applications with Docker — Docker Certified Associate (DCA)",
        detail: "30-hour course · 2026 · certification exam in October 2026",
      },
      { title: "Higher Vocational Diploma in Web Application Development", detail: "CIFP Carlos III, Cartagena · 2022 – 2024" },
      { title: "Advanced English", detail: "Cambridge B2" },
    ],
  },
  contact: {
    kicker: "contact",
    title: "Let's talk",
    text: "I'm looking for teams where I can move between infrastructure and code. Drop me a line and I'll get back to you soon.",
    location: "Cartagena, Región de Murcia, Spain",
    terminalNote: "this site builds, audits and deploys itself with GitHub Actions",
  },
};
