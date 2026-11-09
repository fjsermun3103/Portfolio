import FeatureList from '@/components/FeatureList';
import { GitHubIcon, Sparkle } from '@/components/Icons';
import Tags from '@/components/Tags';
import Window from '@/components/Window';
import { links, mernCalendar } from '@/data/portfolio';

export const Proyectos = () => {
    return (
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
                {/* <CalendarIllustration /> */}
            </div>
        </Window>
    )
};