import { GitHubIcon } from "@/components/Icons";
import Window from "@/components/Window";
import { links } from "@/data/portfolio";

export const Bienvenido = () => {
    return (
        <Window title="bienvenido.exe" className="hero__main" bodyClassName="hero__body">
            <p className="pill-label">Junior Full-Stack Developer</p>
            <h1 className="hero__title">Hola, soy Paco.</h1>
            <p className="hero__subtitle">
                Desarrollador <mark>full-stack</mark>.
            </p>
            <p className="hero__text">
                Especializado en React, TypeScript y Node.js. Construyo aplicaciones web completas y APIs
                REST, con pagos, bases de datos, Docker e IA.
            </p>
            <div className="btn-row">
                <a href="#proyectos" className="btn btn--pink">Ver proyectos</a>
                <a href={links.github} target="_blank" rel="noopener noreferrer" className="btn btn--white">
                    <GitHubIcon /> GitHub
                </a>
            </div>
        </Window>
    )
};
