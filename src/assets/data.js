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
      linkedIn: "https://www.linkedin.com/in/pytocino/",
      github: "https://www.github.com/pytocino",
      aMe: "Desarrollador apasionado con experiencia en tecnologías tanto de frontend como de backend, especializado en la creación de soluciones eficientes. Busco unirme a un equipo dinámico donde pueda continuar creciendo profesionalmente, aportando mis habilidades de desarrollo de software. Me considero una persona proactiva, con capacidad de trabajo en equipo y resolución de problemas.",
    },
  },
  {
    id: "technologies",
    title: "Tecnologías",
    description: "Lista de tecnologías que manejo.",
    bgColor: "#477998",
    textColor: "#ffffff",
    technologies: {
      backend: [
        {
          title: "Java",
          image: "java.png",
        },
        {
          title: "PHP",
          image: "php.png",
        },
        {
          title: "Python",
          image: "python.png",
        },
        {
          title: "C#",
          image: "csharp.png",
        },
      ],
      databases: [
        {
          title: "SQL (MySQL)",
          image: "mysql.png",
        },
      ],
      frontend: [
        {
          title: "JavaScript",
          image: "javascript.png",
        },
        {
          title: "HTML",
          image: "html.png",
        },
        {
          title: "CSS",
          image: "css.png",
        },
      ],
      frameworks: [
        {
          title: "React",
          image: "react.png",
        },
        {
          title: "Laravel",
          image: "laravel.png",
        },
        {
          title: "Flask",
          image: "flask.png",
        },
        {
          title: ".NET",
          image: "dotnet.png",
        },
      ],
      tools: [
        {
          title: "Git",
          image: "git.png",
        },
        {
          title: "Docker",
          image: "docker.png",
        },
        {
          title: "VS Code",
          image: "vscode.png",
        },
        {
          title: "Visual Studio",
          image: "visualstudio.png",
        },
        {
          title: "Bash",
          image: "bash.png",
        },
      ],
    },
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
          "Desarrollo FullStack con experiencia en backend (PHP, Laravel) y frontend (JavaScript, React), aplicando trabajo colaborativo mediante metodologías ágiles y control de versiones con Git y GitHub. He gestionado y optimizado el rendimiento de servidores, actualizando versiones del sistema operativo, PHP y WordPress. Además, he implementado sistemas de autenticación segura en aplicaciones web, diseñado páginas web utilizando herramientas como Figma o GIMP, producido plugins personalizados según necesidades, y creado páginas principalmente con el constructor visual Elementor.",
        years: "Abr 2024 - Jun 2024",
      },
      // Puedes agregar más experiencias si lo deseas
    ],
  },
  {
    id: "projects",
    title: "Proyectos",
    description:
      "Algunos de los proyectos más importantes que he desarrollado.",
    bgColor: "#f64740",
    textColor: "#291f1e",
    projects: [
      {
        title: "BEERFINDER",
        subtitle: "Aplicación web para localizar cervezas artesanales",
        description:
          "BEERFINDER es una aplicación web desarrollada con Laravel y React, con un sistema de autenticación y una API completamente funcional. La integración de React permite a los usuarios disfrutar de una experiencia interactiva y dinámica. El proyecto está versionado con Git para un control eficiente.",
        technologies: [
          "PHP",
          "Laravel",
          "JavaScript",
          "React",
          "Git",
          "API",
          "MySQL",
          "Docker",
          "Bash",
          "Apache",
        ],
      },
      {
        title: "Marca Personal FP",
        subtitle: "Desarrollo backend para la página web marcapersonalFP.es",
        description:
          "Proyecto colaborativo desarrollado con otros estudiantes de 2DAW. Con dos repositorios: uno para el recurso educativo abierto (REA) y otro para el código fuente. Participé en el desarrollo backend usando PHP y Laravel.",
        technologies: ["PHP", "Laravel", "Git", "MySQL"],
      },
    ],
  },
  {
    id: "education",
    title: "Formación",
    description: "Mi trayectoria académica.",
    bgColor: "#a3333d",
    textColor: "#ffffff",
    education: [
      {
        title: "Máster en Inteligencia Artificial y Big Data",
        venue: "CIFP Carlos III, Cartagena",
        description:
          "Actualmente cursando un máster de formación profesional en Inteligencia Artificial y Big Data.",
        years: "Sep 2024 - Presente",
      },
      {
        title: "Técnico Superior en Desarrollo de Aplicaciones Web",
        venue: "CIFP Carlos III, Cartagena",
        description:
          "Formación técnica enfocada en el desarrollo de aplicaciones web utilizando tecnologías modernas de frontend y backend.",
        years: "Sep 2022 - Jun 2024",
      },
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
