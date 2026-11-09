import { Sparkle } from '@/components/Icons';
import Window from '@/components/Window';
import Image from 'next/image';

export const Foto = () => {
    return (
        <Window title="foto.jpg" className="hero__photo" bodyClassName="photo__body">
            <div className="photo__frame">
                <Image
                    src="/foto.jpg"
                    alt="Foto de Perfil"
                    fill
                    priority
                    sizes="(max-width: 860px) 90vw, 300px"
                    className="photo__img"
                    loading="eager"
                />
            </div>
            <Sparkle size={30} className="sparkle sparkle--tr" />
            <Sparkle size={20} className="sparkle sparkle--bl" />
        </Window>
    )
};
