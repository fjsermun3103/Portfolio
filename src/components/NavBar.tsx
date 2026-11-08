import { StarLogo } from "./Icons";

export const NavBar = () => {
    return (
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
    )
}
