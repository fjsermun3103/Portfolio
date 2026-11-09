import Tags from "@/components/Tags";
import Window from "@/components/Window";
import { internship } from "@/data/portfolio";

export const Prácticas = () => {
    return (
        <Window title="practicas.log">
            <span className="badge badge--lime">{internship.badge}</span>
            <h2 className="card-title">{internship.company}</h2>
            <p className="muted">{internship.description}</p>
            <Tags items={internship.tags} />
        </Window>
    )
};
