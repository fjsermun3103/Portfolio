import Window from "@/components/Window";
import { stackGroups } from "@/data/portfolio";

export const Stack = () => {
    return (
        <Window title="stack.exe" id="stack" bodyClassName="stack">
            {stackGroups.map((g) => (
                <div key={g.title} className="stack__group">
                    <h3 className="pixel-heading">{g.title}</h3>
                    <ul className="chips">
                        {g.items.map((item) => (
                            <li key={item} className={`chip chip--${g.color}`}>{item}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </Window>
    )
};