import { CheckIcon, GitHubIcon, Sparkle } from "@/components/Icons";
import Window from "@/components/Window";
import { blendus, Feature, links } from "@/data/portfolio";
import Image from "next/image";

function Tags({ items }: { items: string[] }) {
    return (
        <ul className="tags">
            {items.map((t) => (
                <li key={t}>{t}</li>
            ))}
        </ul>
    );
};
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
export const Destacado = () => {
    return (
        <Window title={blendus.path} bodyClassName="project">
            <div className="project__visual project__visual--lavender">
                <Sparkle size={30} className="sparkle sparkle--tr" />
                <Image src="/fullpage.png" alt="blendus" width={500} height={600}/>
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
    )
};
