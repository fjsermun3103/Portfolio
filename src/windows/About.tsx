import Window from "@/components/Window";
import { about } from "@/data/portfolio";

export const About = () => {
    return (
        <Window title="sobre_mi.txt" bodyClassName="prose">
            {about.map((p) => (
                <p key={p.slice(0, 20)}>{p}</p>
            ))}
        </Window>
    )
};