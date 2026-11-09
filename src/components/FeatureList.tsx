import { Feature } from "@/data/portfolio";
import { CheckIcon } from "./Icons";

export default function FeatureList({ features }: { features: Feature[] }) {
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
};