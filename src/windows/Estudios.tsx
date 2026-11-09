import Window from "@/components/Window";
import { studies } from "@/data/portfolio";

export const Estudios = () => {
    return (
        <Window title="estudios.dat">
            <p className="pixel-meta">{studies.meta}</p>
            <h3 className="card-title card-title--sm">{studies.title}</h3>
            <p className="muted small">{studies.description}</p>
        </Window>
    )
};
