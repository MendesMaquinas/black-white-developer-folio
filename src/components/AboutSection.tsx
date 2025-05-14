
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    if (!sectionRef.current) return;
    
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    });
    
    tl.fromTo(
      imgRef.current,
      { x: -50, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.8 },
      0
    ).fromTo(
      contentRef.current,
      { x: 50, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.8, delay: 0.2 },
      0
    );
    
    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
  
  return (
    <section 
      id="about" 
      ref={sectionRef} 
      className="py-24 bg-white"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div ref={imgRef} className="relative">
            <div className="aspect-[4/5] bg-gray-100 w-full max-w-md mx-auto md:mr-0">
              <img 
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
                alt="Desenvolvedor" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 border-2 border-black -translate-x-4 -translate-y-4 z-[-1]"></div>
          </div>
          
          <div ref={contentRef}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">Sobre Mim</h2>
            <p className="text-lg text-gray-700 mb-4">
              Sou um desenvolvedor full stack apaixonado por criar aplicações web modernas e responsivas. Com mais de 3 anos de experiência, tenho trabalhado em diversos projetos utilizando as mais recentes tecnologias do mercado.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              Minha jornada no desenvolvimento começou com HTML, CSS e JavaScript, mas rapidamente evoluí para frameworks como React.js e Next.js. No backend, trabalho principalmente com Node.js e Express.
            </p>
            <p className="text-lg text-gray-700">
              Acredito que o código limpo e bem estruturado é tão importante quanto uma interface bonita. Meu objetivo é sempre entregar projetos que não apenas atendam aos requisitos, mas que também sejam escaláveis e fáceis de manter.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
