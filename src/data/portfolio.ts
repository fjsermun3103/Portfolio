// Contenido del portfolio. Edita aquí textos y enlaces sin tocar los componentes.

export const links = {
  // TODO: sustituye por tus URLs reales
  github: "https://github.com/",
  linkedin: "https://www.linkedin.com/",
  blendus: "https://github.com/",
  mernFrontend: "https://github.com/",
  mernBackend: "https://github.com/",
  email: "fsermun3103@gmail.com",
};

export const marqueeItems = [
  "React",
  "TypeScript",
  "Next.js",
  "Node.js",
  "Express",
  "Laravel",
  "Docker",
  "Ollama",
  "Stripe",
  "MongoDB",
  "PostgreSQL",
];

export const stats = [
  { value: "3", label: "agentes de IA con Ollama" },
  { value: "2", label: "proyectos full-stack" },
  { value: "5", label: "meses de prácticas en e-learning" },
  { value: "3", label: "idiomas: ES, EN y FR" },
];

export type Feature = { before?: string; strong: string; rest: string };

export const blendus = {
  path: "C:/proyectos/blendus",
  badge: "Proyecto destacado",
  title: "BlendUs",
  description:
    "Red social full-stack para comunidades gastronómicas, diseñada y desarrollada de principio a fin.",
  features: [
    {
      strong: "3 agentes de IA con Ollama",
      rest: " para recomendaciones, generación automática de recetas y asistencia culinaria.",
    },
    { strong: "Pagos con Stripe", rest: " y webhooks." },
    {
      strong: "Mensajería en tiempo real",
      rest: " para grupos y conversaciones individuales.",
    },
    {
      strong: "Todo dockerizado:",
      rest: " frontend, backend, Ollama y Stripe se levantan automáticamente.",
    },
    { strong: "Tests E2E", rest: " con Playwright." },
  ] as Feature[],
  tags: ["React", "TypeScript", "Laravel", "Docker", "Ollama", "Stripe", "Astro", "Playwright"],
};

export const mernCalendar = {
  path: "C:/proyectos/mern-calendar",
  badge: "Proyecto",
  title: "MERN Calendar",
  description:
    "Gestor de eventos con autenticación JWT, con frontend y backend en repositorios independientes.",
  features: [
    { strong: "Autenticación JWT", rest: " y gestión de eventos mediante API REST." },
    { before: "Persistencia en ", strong: "MongoDB Atlas", rest: "." },
    { before: "Frontend con ", strong: "React, TypeScript y Redux Toolkit", rest: "." },
    { before: "Backend con ", strong: "Node.js y Express", rest: "." },
  ] as Feature[],
  tags: ["React", "TypeScript", "Redux Toolkit", "Node.js", "Express", "MongoDB Atlas"],
};

export type ChipColor = "lavender" | "lime" | "white" | "pink";

export const stackGroups: { title: string; color: ChipColor; items: string[] }[] = [
  {
    title: "Frontend",
    color: "lavender",
    items: ["React", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS", "Redux Toolkit", "Astro"],
  },
  {
    title: "Backend",
    color: "lime",
    items: ["Node.js", "Express", "Laravel", "PHP", "APIs REST", "JWT"],
  },
  { title: "Bases de datos", color: "white", items: ["SQL", "MongoDB", "MySQL", "PostgreSQL"] },
  { title: "DevOps y herramientas", color: "pink", items: ["Docker", "Git", "GitHub", "AWS"] },
  { title: "Integraciones e IA", color: "lime", items: ["Ollama", "Stripe", "Webhooks"] },
  { title: "Testing", color: "lavender", items: ["Playwright", "Jest", "Vitest"] },
];

export const about = [
  "Soy Francisco José Serrano, Paco, desarrollador junior full-stack en Granada. Me muevo entre React, TypeScript y Node.js construyendo aplicaciones web completas y APIs REST, con autenticación JWT, pagos con Stripe, Docker e IA integrada.",
  "Soy Técnico Superior en Desarrollo de Aplicaciones Web (bilingüe) y busco posiciones junior en España y Europa, en remoto, híbrido o con reubicación.",
  "Vengo del mundo audiovisual: dos ciclos superiores y años de trabajo en sonido, vídeo y foto.",
];

export const internship = {
  badge: "Prácticas · 5 meses · 2026",
  company: "Conecta13",
  description:
    "Diseño y maquetación de cursos e-learning desde cero para una consultora especializada en innovación educativa y formación profesional docente: contenido digital interactivo, itinerarios formativos y gestión de cursos en Moodle.",
  tags: ["Moodle", "Articulate Rise", "Articulate Storyline", "HTML", "CSS", "JavaScript"],
};

export const studies = {
  meta: "2026 · IES Zaidín-Vergeles",
  title: "Técnico Superior en Desarrollo de Aplicaciones Web",
  description:
    "Programación en Python, Laravel y React, gestión de bases de datos en HeidiSQL y diseño web con HTML, CSS y JavaScript.",
};

export const courses: { name: string; hours: string; color: ChipColor }[] = [
  { name: "React: De cero a Experto", hours: "50h", color: "lavender" },
  { name: "Curso de Git", hours: "7h", color: "lime" },
  { name: "Introducción a Docker", hours: "18h", color: "pink" },
];

export const languages: { name: string; level: string; color: ChipColor }[] = [
  { name: "Español", level: "Nativo", color: "lime" },
  { name: "Inglés", level: "B2", color: "lavender" },
  { name: "Francés", level: "Básico", color: "white" },
];
