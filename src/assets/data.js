// src/mocks/sectionsData.js
import javaPNG from "../assets/java.png";
import phpPNG from "../assets/php.png";
import pythonPNG from "../assets/python.png";
import csharpPNG from "../assets/csharp.png";
import mysqlPNG from "../assets/mysql.png";
import jsPNG from "../assets/js.png";
import htmlPNG from "../assets/html.png";
import cssPNG from "../assets/css.png";
import reactPNG from "../assets/react.png";
import laravelPNG from "../assets/laravel.png";
import bootstrapPNG from "../assets/bootstrap.png";
import wordpressPNG from "../assets/wordpress.png";
import gitPNG from "../assets/git.png";
import dockerPNG from "../assets/docker.png";
import vscodePNG from "../assets/vscode.png";
import visualstudioPNG from "../assets/visualstudio.png";
import bashPNG from "../assets/bash.png";
import figmaPNG from "../assets/figma.png";
import gimpPNG from "../assets/gimp.png";
import inkscapePNG from "../assets/inkscape.png";
import photoshopPNG from "../assets/photoshop.png";
import mplogoPNG from "../assets/mplogo.png";
import bflogo from "../assets/perfil.png";
import logoCole from "../assets/logosoloblanco.png";
import logoUPCT from "../assets/upct.png";
import portfolioPNG from "../assets/portfolio.png";
import cvPDF from "../assets/CV.pdf";
import beerfinderGIF from "../assets/beerfinder2.gif";

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
      cv: cvPDF,
      mainSkill: "FullStack Developer",
      location: "Cartagena, España",
      email: "pedrodavidg88@gmail.com",
      phone: "+34 603 015 877",
      birthDate: "28/01/2000",
      driverLicense: "Carnet de conducir y vehículo propio",
      linkedIn: "https://www.linkedin.com/in/pytocino/",
      github: "https://www.github.com/pytocino",
      aMe: "Desarrollador con experiencia en tecnologías tanto de frontend como de backend. Busco unirme a un equipo dinámico donde pueda continuar creciendo profesionalmente, aportando mis habilidades de desarrollo de software. Me considero una persona proactiva, con capacidad de trabajo en equipo y resolución de problemas.",
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
          image: javaPNG,
        },
        {
          title: "PHP",
          image: phpPNG,
        },
        {
          title: "Python",
          image: pythonPNG,
        },
        {
          title: "C#",
          image: csharpPNG,
        },
      ],
      databases: [
        {
          title: "SQL (MySQL)",
          image: mysqlPNG,
        },
      ],
      frontend: [
        {
          title: "JavaScript",
          image: jsPNG,
        },
        {
          title: "HTML",
          image: htmlPNG,
        },
        {
          title: "CSS",
          image: cssPNG,
        },
      ],
      frameworks: [
        {
          title: "React",
          image: reactPNG,
        },
        {
          title: "Laravel",
          image: laravelPNG,
        },

        {
          title: "Bootstrap",
          image: bootstrapPNG,
        },
        {
          title: "WordPress",
          image: wordpressPNG,
        },
      ],
      tools: [
        {
          title: "Git",
          image: gitPNG,
        },
        {
          title: "Docker",
          image: dockerPNG,
        },
        {
          title: "VS Code",
          image: vscodePNG,
        },
        {
          title: "Visual Studio",
          image: visualstudioPNG,
        },
        {
          title: "Bash",
          image: bashPNG,
        },
      ],
      graphicTools: [
        {
          title: "Figma",
          image: figmaPNG,
        },
        {
          title: "GIMP",
          image: gimpPNG,
        },
        {
          title: "Inkscape",
          image: inkscapePNG,
        },
        {
          title: "Photoshop",
          image: photoshopPNG,
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
        image: logoUPCT,
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
        image: bflogo,
        subtitle: "Aplicación web para localizar cervezas en tu ciudad",
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
        gif: beerfinderGIF,
      },
      {
        title: "Marca Personal FP",
        image: mplogoPNG,
        subtitle: "Desarrollo backend para la página web marcapersonalFP.es",
        description:
          "Proyecto colaborativo desarrollado con otros estudiantes de 2DAW. Con dos repositorios: uno para el recurso educativo abierto (REA) y otro para el código fuente. Participé en el desarrollo backend usando PHP y Laravel.",
        technologies: ["PHP", "Laravel", "Git", "MySQL"],
      },
      {
        title: "Portafolio Personal",
        subtitle: "Portafolio interactivo y responsivo",
        image: portfolioPNG,
        description: `Desarrollé este portafolio personal utilizando React, Bootstrap y CSS. El proyecto incluye navegación entre secciones, es completamente responsivo, e incorpora enlaces a mis redes sociales. Desplegado en GitHub Pages.`,
        technologies: ["React", "Bootstrap", "CSS", "GitHub Pages"],
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
        image: logoCole,
        venue: "CIFP Carlos III, Cartagena",
        description:
          "Programar y aplicar sistemas inteligentes que optimizan la gestión de la información y la explotación de datos masivos, garantizando el acceso a los datos de forma segura y cumpliendo los criterios de accesibilidad, usabilidad y calidad exigidas en los estándares establecidos, así como los principios éticos y legales.",
        years: "Sep 2024 - Presente",
      },
      {
        title: "Técnico Superior en Desarrollo de Aplicaciones Web",
        image: logoCole,
        venue: "CIFP Carlos III, Cartagena",
        description:
          "Desarrollar, implantar, y mantener aplicaciones web, con independencia del modelo empleado y utilizando tecnologías específicas, garantizando el acceso a los datos de forma segura y cumpliendo los criterios de accesibilidad, usabilidad y calidad exigidas en los estándares establecidos.",
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
