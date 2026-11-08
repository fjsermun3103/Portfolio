// Contenido del portfolio. Edita aquí textos y enlaces sin tocar los componentes.

export const links = {
  // TODO: sustituye por tus URLs reales
  github: "https://github.com/fjsermun3103",
  linkedin: "https://www.linkedin.com/in/fsermun3103/",
  blendus: "https://github.com/fjsermun3103/BlendUs",
  mernFrontend: "https://github.com/fjsermun3103/MERN-calendar",
  mernBackend: "https://github.com/fjsermun3103/calendar-backend",
  email: "fsermun3103@gmail.com",
};

export const marqueeItems = [
  "React",
  "TypeScript",
  "Next.js",
  "PHP",
  "Node.js",
  "Express",
  "Laravel",
  "Docker",
  "Ollama",
  "Stripe",
  "MongoDB",
  "PostgreSQL",
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

export type Stat = {
  /** Número (se anima contando) o texto fijo como "B2". */
  value: number | string;
  suffix?: string;
  kicker: string;
  label: string;
  detail: string;
  color: ChipColor;
};

// Se calcula a partir del stack para que nunca se desincronice.
const techCount = stackGroups.reduce((n, g) => n + g.items.length, 0);

export const stats: Stat[] = [
  {
    value: 3,
    kicker: "IA",
    label: "agentes de IA integrados",
    detail: "LLMs locales con Ollama en BlendUs",
    color: "lime",
  },
  {
    value: techCount,
    suffix: "+",
    kicker: "Stack",
    label: "tecnologías en mi stack",
    detail: "Front, back, bases de datos, DevOps y testing",
    color: "lavender",
  },
  {
    value: 5,
    kicker: "Empresa",
    label: "meses de experiencia real",
    detail: "Prácticas en Conecta13 (e-learning)",
    color: "pink",
  },
  {
    value: "B2",
    kicker: "Idiomas",
    label: "de inglés",
    detail: "Listo para equipos en España y Europa",
    color: "white",
  },
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
