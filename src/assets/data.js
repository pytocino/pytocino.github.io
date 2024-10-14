// src/mocks/sectionsData.js
export const sectionsData = [
  {
    id: "about",
    title: "Sobre mí",
    description:
      "Desarrollador apasionado con experiencia en tecnologías tanto de frontend como de backend, especializado en la creación de soluciones eficientes.",
    bgColor: "#c4d6b0",
    textColor: "#291f1e",
    additionalInfo: {
      name: "Pedro David García López",
      mainSkill: "FullStack Developer",
      location: "Cartagena, España",
      email: "pedrodavidg88@gmail.com",
      phone: "+34 603 015 877",
      birthDate: "28/01/2000",
      driverLicense: "Carnet de conducir y vehículo propio",
      linkedIn: "LinkedIn",
      aMe: "Desarrollador apasionado con experiencia en tecnologías tanto de frontend como de backend, especializado en la creación de soluciones eficientes. Busco unirme a un equipo dinámico donde pueda continuar creciendo profesionalmente, aportando mis habilidades de desarrollo de software. Me considero una persona proactiva, con capacidad de trabajo en equipo y resolución de problemas.",
    },
  },
  {
    id: "technologies",
    title: "Tecnologías",
    description: "Lista de tecnologías que manejo.",
    bgColor: "#477998",
    textColor: "#ffffff",
    technologies: [
      "Java",
      "PHP",
      "SQL (MySQL)",
      "JavaScript",
      "HTML",
      "CSS",
      "Python",
      "C#",
      "React",
      "Laravel",
      "Flask",
      ".NET",
      "Git",
      "Docker",
      "VS Code",
    ],
  },
  {
    id: "experience",
    title: "Experiencia",
    description: "Experiencia laboral.",
    bgColor: "#291f1e",
    textColor: "#ffffff",
    experiences: [
      {
        title: "Desarrollador FullStack (Becario)",
        subtitle: "Universidad Politécnica de Cartagena",
        description:
          "Desarrollo FullStack: Experiencia tanto en backend (PHP, Laravel) como en frontend (JavaScript, React). Trabajo colaborativo implementando metodologías ágiles y control de versiones con Git y GitHub. Mantenimiento y optimización de servidores, gestión y mejora del rendimiento de servidores.",
        years: "Abr 2024 - Jun 2024",
      },
      // Puedes agregar más experiencias si lo deseas
    ],
  },
  {
    id: "projects",
    title: "Proyectos",
    description: "Proyectos que he realizado.",
    bgColor: "#f64740",
    textColor: "#291f1e",
    projects: [
      {
        title: "BeerFinder",
        subtitle: "Aplicación FullStack para localizar cervezas artesanales",
        description:
          "Desarrollé una aplicación full stack para localizar cervezas artesanales en diversos establecimientos, implementando autenticación de usuario con Laravel/Breeze y visualizando datos geográficos y estadísticos con ChartJS y Leaflet.",
        technologies: [
          "Laravel",
          "React",
          "Python",
          "JavaScript",
          "Docker",
          "Nginx",
          "MySQL",
        ],
      },
      // Agrega más proyectos según sea necesario
    ],
  },
  {
    id: "education",
    title: "Formación",
    description: "Educación y títulos obtenidos.",
    bgColor: "#a3333d",
    textColor: "#ffffff",
    education: [
      {
        title: "CFGS Desarrollo de Aplicaciones Web",
        subtitle: "CIFP Carlos III",
        description:
          "Formación en desarrollo de aplicaciones web, cubriendo tecnologías frontend y backend.",
        years: "Sep 2022 - Jun 2024",
      },
      // Agrega más formaciones según sea necesario
    ],
  },
  {
    id: "extra",
    title: "Extra",
    description: "Información adicional.",
    bgColor: "#e3857a",
    textColor: "#291f1e",
    extraInfo: [
      {
        title: "Habilidades blandas",
        description:
          "Comunicación, resolución de problemas, adaptabilidad, trabajo en equipo, gestión del tiempo, empatía, creatividad, resiliencia y paciencia.",
      },
      // Agrega más información extra según sea necesario
    ],
  },
];
