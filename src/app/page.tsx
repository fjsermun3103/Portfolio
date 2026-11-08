import Window from "@/components/Window";
import { CheckIcon, GitHubIcon, LinkedInIcon, MailIcon, Sparkle } from "@/components/Icons";
import {
  about,
  courses,
  internship,
  languages,
  links,
  mernCalendar,
  stackGroups,
  studies,
  type Feature,
} from "@/data/portfolio";
import { NavBar } from "@/components/NavBar";
import { Bienvenido } from "@/windows/Bienvenido";
import { Burst } from "@/components/Burst";
import { Foto } from "@/windows/Foto";
import { Marquee } from "@/components/Marquee";
import { Stats } from "@/components/Stats";
import { Destacado } from '../windows/Destacado';







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

  return (
    <>
      <NavBar />

      <main className="page" id="inicio">
        {/* HERO */}
        <div className="hero">
          <Bienvenido />

          <Burst />

          <Foto />
        </div>

        {/* MARQUEE */}
        <Marquee />
   
        {/* STATS */}
        <Stats />

        <div id="proyectos" className="projects">
          {/* DESTACADO */}
          <Destacado/>
          {/* <Window title={blendus.path} bodyClassName="project">
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
          </Window> */}
          
          {/* PROYECTOS */}

          {/* <Window title={mernCalendar.path} bodyClassName="project project--reverse">
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
          </Window> */}
          
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
          {/* <Window title="practicas.log">
            <span className="badge badge--lime">{internship.badge}</span>
            <h2 className="card-title">{internship.company}</h2>
            <p className="muted">{internship.description}</p>
            <Tags items={internship.tags} />
          </Window> */}
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
