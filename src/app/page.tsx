import { NavBar } from "@/components/NavBar";
import { Bienvenido } from "@/windows/Bienvenido";
import { Burst } from "@/components/Burst";
import { Foto } from "@/windows/Foto";
import { Marquee } from "@/components/Marquee";
import { Stats } from "@/components/Stats";
import { Destacado } from '../windows/Destacado';
import { Proyectos } from "@/windows/Proyectos";
import { Stack } from "@/windows/Stack";
import { About } from "@/windows/About";
import { Prácticas } from "@/windows/Prácticas";
import { Estudios } from "@/windows/Estudios";
import { Cursos } from "@/windows/Cursos";
import { Idiomas } from "@/windows/Idiomas";
import { Contacto } from "@/windows/Contacto";

export default function Home() {
  return (
    <>
      <NavBar />

      <main className="page" id="inicio">
        {/* HERO */}
        <div className="hero">
          <Bienvenido />

          <Burst />

          <Foto />
        </div>

        {/* MARQUEE */}
        <Marquee />

        {/* STATS */}
        <Stats />

        <div id="proyectos" className="projects">
          {/* DESTACADO */}
          <Destacado />

          {/* OTROS PROYECTOS */}
          <Proyectos />
        </div>

        {/* STACK */}
        <Stack />

        {/* SOBRE MÍ + PRÁCTICAS */}
        <div className="grid-2" id="sobre-mi">
          <About />

          <Prácticas />
        </div>

        {/* ESTUDIOS + CURSOS + IDIOMAS */}
        <div className="grid-3">
          <Estudios />
          <Cursos />
          <Idiomas />
        </div>

        {/* CONTACTO */}
        <Contacto />
      </main>

      <footer className="footer">
        <span>Portfolio.exe - Francisco José Serrano Muñoz</span>
        <span>2026</span>
      </footer>
    </>
  );
}
