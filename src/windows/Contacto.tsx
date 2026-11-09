import { GitHubIcon, LinkedInIcon, MailIcon } from '@/components/Icons';
import Window from '@/components/Window';
import { links } from '@/data/portfolio';

export const Contacto = () => {
    return (
        <Window title="contacto.msg" id="contacto" bodyClassName="contact">
            <div>
                <h2 className="contact__title">¿Hablamos?</h2>
                <p className="muted">Disponible en remoto, híbrido o con reubicación.</p>
                <a className="contact__email" href={links.emailCompose} target="_blank" rel="noopener noreferrer">
                    {links.email}
                </a>
            </div>
            <div className="btn-row">
                <a href={links.emailCompose} target="_blank" rel="noopener noreferrer" className="btn btn--pink">
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
    )
};
