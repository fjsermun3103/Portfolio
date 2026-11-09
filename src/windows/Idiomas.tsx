import Window from "@/components/Window";
import { languages } from "@/data/portfolio";

export const Idiomas = () => {
    return (
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
    )
};
