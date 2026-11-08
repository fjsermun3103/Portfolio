import { marqueeItems } from '@/data/portfolio';

export const Marquee = () => {
    const marquee = [...marqueeItems, ...marqueeItems];

    return (
        <div className="marquee" aria-label={marqueeItems.join(", ")}>
            <div className="marquee__track" aria-hidden="true">
                {marquee.map((item, i) => (
                    <span key={i}>
                        {item} <b>·</b>
                    </span>
                ))}
            </div>
        </div>
    )
};
