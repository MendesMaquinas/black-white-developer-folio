
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
    id: 2,
    company: "Mendes Máquinas",
    role: "Proframador de Sistemas de Informação",
    period: "2024 - Atual",
    description: "Desenvolvendo aplicações que garantam a visualização da produção e controle do produto da empresa. Principal projeto foi uma aplicação full stack que buscou otimizar processos industriais e fornecer visualizações valiosos para a tomada de decisões, consiste em uma plataforma completa para gestão da produção em uma serraria. É uma solução que permite visualizar em tempo real o status da produção, gerar relatórios personalizados, identificar e solucionar problemas de forma ágil, controlar a manutenção de forma preventiva e preditiva e acompanhar o desempenho de cada máquina. Essa aplicação proporcionou uma visão completa do processo produtivo, facilitando a tomada de decisões estratégicas."
  },
  {
    id: 3,
    company: "Mendes Máquinas",
    role: "Estagiário de Automação",
    period: "2023 - 2024",
    description: "Grande enfoque no desenvolvimento de apicações que auxiliem no controle, tanto dentro quanto fora da empresa, voltados para soluções internas e para o cliente. Como principais projetos podem ser citados alguns sistemas de controle de estoque, despacho de mercadoras, solicitações de pendências de campo, apontamento de horas de máquina, etc."
  },
  {
    id: 4,
    company: "Mendes Máquinas",
    role: "Estagiário de PCP",
    period: "2022 - 2023",
    description: "Desenvolvi aplicações full stack focadas na otimização e controle de processos industriais. Como principal projeto, construí um aplicativo para gerenciar todas as etapas de produção, controlando todas as etadas das ordens de fabricação até a entrega do produto final. A partir disso foi possível visualizar em tempo real o progresso de cada produto, auxiliando a gestão na tomada de decisões estratégicas. Essa solução além de inovadora dentro da empresa, resultou não só na visualização dos dados pelos gestores, mas também deixou em evidência alguns processos que não eram vantajosos, além de proporcionar a criação de vários outros novos."
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
