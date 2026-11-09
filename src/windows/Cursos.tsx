import Window from "@/components/Window";
import { courses } from "@/data/portfolio";

export const Cursos = () => {
    return (
        <Window title="cursos.dat">
            <ul className="rows">
                {courses.map((c) => (
                    <li key={c.name}>
                        <span>{c.name}</span>
                        <span className={`mini-chip chip--${c.color}`}>{c.hours}</span>
                    </li>
                ))}
            </ul>
        </Window>
    )
};
