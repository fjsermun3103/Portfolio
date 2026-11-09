import FeatureList from "@/components/FeatureList";
import { GitHubIcon, Sparkle } from "@/components/Icons";
import Tags from "@/components/Tags";
import Window from "@/components/Window";
import { blendus, links } from "@/data/portfolio";
import Image from "next/image";

export const Destacado = () => {
    return (
        <Window title={blendus.path} bodyClassName="project">
            <div className="project__visual project__visual--lavender">
                <Sparkle size={30} className="sparkle sparkle--tr" />
                <figure className="shot">
                    <div className="shot__bar" aria-hidden="true">
                        <i />
                        <i />
                        <i />
                        <span className="shot__url">blendus.app</span>
                    </div>
                    <div className="shot__screen">
                        <Image
                            src="/blendus.png"
                            alt="Captura de la web de BlendUs"
                            fill
                            sizes="(max-width: 860px) 90vw, 440px"
                            className="shot__img"
                            loading="lazy"
                        />
                    </div>
                </figure>
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
    );
};
