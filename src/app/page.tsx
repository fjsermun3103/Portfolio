import Image from "next/image";
import Window from "@/components/Window";
import { CheckIcon, GitHubIcon, LinkedInIcon, MailIcon, Sparkle, StarLogo } from "@/components/Icons";
import {
  about,
  blendus,
  courses,
  internship,
  languages,
  links,
  marqueeItems,
  mernCalendar,
  stackGroups,
  stats,
  studies,
  type Feature,
} from "@/data/portfolio";

function FeatureList({ features }: { features: Feature[] }) {
  return (
    <ul className="features">
      {features.map((f) => (
        <li key={f.strong}>
          <span className="features__check">
            <CheckIcon />
          </span>
          <span>
            {f.before}
            <strong>{f.strong}</strong>
            {f.rest}
          </span>
        </li>
      ))}
    </ul>
  );
}

function Tags({ items }: { items: string[] }) {
  return (
    <ul className="tags">
      {items.map((t) => (
        <li key={t}>{t}</li>
      ))}
    </ul>
  );
}

function ChatIllustration() {
  return (
    <div className="illo illo--chat" aria-hidden="true">
      <div className="illo__card">
        <div className="chat__head">
          <span className="chat__avatar" />
          <span className="chat__line chat__line--short" />
        </div>
        <div className="chat__bubble chat__bubble--in">
          <span className="chat__line" />
          <span className="chat__line chat__line--mid" />
        </div>
        <div className="chat__bubble chat__bubble--out">
          <span className="chat__line chat__line--dark" />
        </div>
        <div className="chat__bubble chat__bubble--ai">
          <span className="chat__ai-tag">IA</span>
          <span className="chat__line chat__line--dark" />
          <span className="chat__line chat__line--dark chat__line--mid" />
        </div>
      </div>
    </div>
  );
}

function CalendarIllustration() {
  const highlights: Record<number, string> = { 2: "lime", 10: "lavender", 14: "lime", 22: "pink" };
  return (
    <div className="illo illo--calendar" aria-hidden="true">
      <div className="illo__card cal">
        <div className="cal__head">
          <span className="cal__bar" />
          <span className="cal__btns">
            <i />
            <i />
          </span>
        </div>
        <div className="cal__grid">
          {Array.from({ length: 28 }, (_, i) => (
            <span key={i} className={`cal__cell ${highlights[i] ? `cal__cell--${highlights[i]}` : ""}`} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const marquee = [...marqueeItems, ...marqueeItems];

  return (
    <>
      <nav className="nav">
        <a href="#inicio" className="nav__brand">
          <StarLogo />
          <span>Portfolio.exe</span>
        </a>
        <ul className="nav__links">
          <li><a href="#proyectos">Proyectos</a></li>
          <li><a href="#stack">Stack</a></li>
          <li><a href="#sobre-mi">Sobre mí</a></li>
          <li><a href="#contacto">Contacto</a></li>
        </ul>
        <a href="#contacto" className="btn btn--pink btn--sm">Hablemos</a>
      </nav>

      <main className="page" id="inicio">
        {/* HERO */}
        <div className="hero">
          <Window title="bienvenido.exe" className="hero__main" bodyClassName="hero__body">
            <p className="pill-label">Junior Full-Stack Developer / Granada</p>
            <h1 className="hero__title">Hola, soy Paco.</h1>
            <p className="hero__subtitle">
              Desarrollador <mark>full-stack</mark>.
            </p>
            <p className="hero__text">
              Especializado en React, TypeScript y Node.js. Construyo aplicaciones web completas y APIs
              REST, con pagos, bases de datos, Docker e IA integrada.
            </p>
            <div className="btn-row">
              <a href="#proyectos" className="btn btn--pink">Ver proyectos</a>
              <a href={links.github} target="_blank" rel="noopener noreferrer" className="btn btn--white">
                <GitHubIcon /> GitHub
              </a>
            </div>
          </Window>

          <div className="burst" aria-label="Abierto a ofertas">
            <span>Abierto<br />a ofertas</span>
          </div>

          <Window title="foto.jpg" className="hero__photo" bodyClassName="photo__body">
            <div className="photo__frame">
              <Image
                src="/foto.jpg"
                alt="Foto de Paco Serrano"
                fill
                priority
                sizes="(max-width: 860px) 90vw, 300px"
                className="photo__img"
              />
            </div>
            <Sparkle size={30} className="sparkle sparkle--tr" />
            <Sparkle size={20} className="sparkle sparkle--bl" />
          </Window>
        </div>

        {/* MARQUEE */}
        <div className="marquee" aria-label={marqueeItems.join(", ")}>
          <div className="marquee__track" aria-hidden="true">
            {marquee.map((item, i) => (
              <span key={i}>
                {item} <b>+</b>
              </span>
            ))}
          </div>
        </div>

        {/* STATS */}
        <ul className="stats">
          {stats.map((s) => (
            <li key={s.label} className="stat">
              <span className="stat__value">{s.value}</span>
              <span className="stat__label">{s.label}</span>
            </li>
          ))}
        </ul>

        {/* PROYECTOS */}
        <div id="proyectos" className="projects">
          <Window title={blendus.path} bodyClassName="project">
            <div className="project__visual project__visual--lavender">
              <Sparkle size={30} className="sparkle sparkle--tr" />
              <ChatIllustration />
            </div>
            <div className="project__info">
              <span className="badge badge--lime">{blendus.badge}</span>
              <h2 className="project__title">{blendus.title}</h2>
              <p className="project__desc">{blendus.description}</p>
              <FeatureList features={blendus.features} />
              <Tags items={blendus.tags} />
              <div className="btn-row">
                <a href={links.blendus} target="_blank" rel="noopener noreferrer" className="btn btn--pink">
                  <GitHubIcon /> Ver código
                </a>
              </div>
            </div>
          </Window>

          <Window title={mernCalendar.path} bodyClassName="project project--reverse">
            <div className="project__info">
              <span className="badge badge--lavender">{mernCalendar.badge}</span>
              <h2 className="project__title">{mernCalendar.title}</h2>
              <p className="project__desc">{mernCalendar.description}</p>
              <FeatureList features={mernCalendar.features} />
              <Tags items={mernCalendar.tags} />
              <div className="btn-row">
                <a href={links.mernFrontend} target="_blank" rel="noopener noreferrer" className="btn btn--pink">
                  <GitHubIcon /> Código frontend
                </a>
                <a href={links.mernBackend} target="_blank" rel="noopener noreferrer" className="btn btn--white">
                  <GitHubIcon /> Código backend
                </a>
              </div>
            </div>
            <div className="project__visual project__visual--lime">
              <Sparkle size={30} className="sparkle sparkle--tl" />
              <CalendarIllustration />
            </div>
          </Window>
        </div>

        {/* STACK */}
        <Window title="stack.exe" id="stack" bodyClassName="stack">
          {stackGroups.map((g) => (
            <div key={g.title} className="stack__group">
              <h3 className="pixel-heading">{g.title}</h3>
              <ul className="chips">
                {g.items.map((item) => (
                  <li key={item} className={`chip chip--${g.color}`}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </Window>

        {/* SOBRE MÍ + PRÁCTICAS */}
        <div className="grid-2" id="sobre-mi">
          <Window title="sobre_mi.txt" bodyClassName="prose">
            {about.map((p) => (
              <p key={p.slice(0, 20)}>{p}</p>
            ))}
          </Window>
          <Window title="practicas.log">
            <span className="badge badge--lime">{internship.badge}</span>
            <h2 className="card-title">{internship.company}</h2>
            <p className="muted">{internship.description}</p>
            <Tags items={internship.tags} />
          </Window>
        </div>

        {/* ESTUDIOS + CURSOS + IDIOMAS */}
        <div className="grid-3">
          <Window title="estudios.dat">
            <p className="pixel-meta">{studies.meta}</p>
            <h3 className="card-title card-title--sm">{studies.title}</h3>
            <p className="muted small">{studies.description}</p>
          </Window>
          <Window title="cursos.dat">
            <ul className="rows">
              {courses.map((c) => (
                <li key={c.name}>
                  <span>{c.name}</span>
                  <span className={`mini-chip chip--${c.color}`}>{c.hours}</span>
                </li>
              ))}
            </ul>
          </Window>
          <Window title="idiomas.cfg">
            <ul className="rows">
              {languages.map((l) => (
                <li key={l.name}>
                  <span>{l.name}</span>
                  <span className={`mini-chip chip--${l.color}`}>{l.level}</span>
                </li>
              ))}
            </ul>
          </Window>
        </div>

        {/* CONTACTO */}
        <Window title="contacto.msg" id="contacto" bodyClassName="contact">
          <div>
            <h2 className="contact__title">¿Hablamos?</h2>
            <p className="muted">Disponible en remoto, híbrido o con reubicación, en España y Europa.</p>
            <a className="contact__email" href={`mailto:${links.email}`}>{links.email}</a>
          </div>
          <div className="btn-row">
            <a href={`mailto:${links.email}`} className="btn btn--pink">
              <MailIcon /> Escríbeme
            </a>
            <a href={links.github} target="_blank" rel="noopener noreferrer" className="btn btn--white">
              <GitHubIcon /> GitHub
            </a>
            <a href={links.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn--white">
              <LinkedInIcon /> LinkedIn
            </a>
          </div>
        </Window>
      </main>

      <footer className="footer">
        <span>Portfolio.exe · Francisco José Serrano Muñoz</span>
        <span>Granada, España · 2026</span>
      </footer>
    </>
  );
}
