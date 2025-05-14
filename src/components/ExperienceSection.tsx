
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface Experience {
  id: number;
  company: string;
  role: string;
  period: string;
  description: string;
}

const experiences: Experience[] = [
  {
    id: 1,
    company: "TechCorp",
    role: "Senior Frontend Developer",
    period: "2021 - Atual",
    description: "Desenvolvimento de aplicações web com React.js e Next.js. Implementação de arquitetura de componentes escalável e desenvolvimento de interfaces responsivas."
  },
  {
    id: 2,
    company: "WebSolutions",
    role: "Full Stack Developer",
    period: "2019 - 2021",
    description: "Desenvolvimento de aplicações web completas utilizando Node.js no backend e React no frontend. Integração com APIs externas e implementação de autenticação e autorização."
  },
  {
    id: 3,
    company: "CreativeLabs",
    role: "Frontend Developer",
    period: "2017 - 2019",
    description: "Criação de interfaces responsivas com HTML, CSS e JavaScript. Desenvolvimento de animações interativas e otimização de performance."
  },
  {
    id: 4,
    company: "DigitalStartup",
    role: "Web Developer",
    period: "2015 - 2017",
    description: "Desenvolvimento de websites e landing pages para clientes de diversos setores. Implementação de SEO e otimização para buscadores."
  }
];

const ExperienceSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const tableRef = useRef<HTMLDivElement>(null);
  const rowRefs = useRef<(HTMLDivElement | null)[]>([]);
  
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
      titleRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5 },
      0
    );
    
    rowRefs.current.forEach((row, index) => {
      tl.fromTo(
        row,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4, delay: 0.1 * index },
        0.3
      );
    });
    
    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
  
  return (
    <section 
      id="experience" 
      ref={sectionRef}
      className="py-24 bg-black text-white"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <h2 
          ref={titleRef}
          className="text-3xl md:text-4xl font-bold mb-12 tracking-tight"
        >
          Experiência
        </h2>
        
        <div 
          ref={tableRef}
          className="overflow-x-auto"
        >
          <div className="min-w-full border-t border-white/10">
            {experiences.map((exp, index) => (
              <div 
                key={exp.id}
                ref={el => rowRefs.current[index] = el}
                className="grid grid-cols-1 md:grid-cols-12 border-b border-white/10 py-8"
              >
                <div className="md:col-span-4 lg:col-span-3 mb-4 md:mb-0">
                  <h3 className="text-xl font-medium text-white">{exp.company}</h3>
                  <p className="text-gray-400 mt-1">{exp.period}</p>
                </div>
                <div className="md:col-span-8 lg:col-span-9">
                  <h4 className="text-lg font-medium text-white mb-2">{exp.role}</h4>
                  <p className="text-gray-300">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
