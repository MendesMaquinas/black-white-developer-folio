
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

export interface Project {
  id: number;
  title: string;
  shortDescription: string;
  fullDescription: string;
  thumbnail: string;
  images: string[];
  tags: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-commerce Platform",
    shortDescription: "Uma plataforma de e-commerce completa com painel administrativo.",
    fullDescription: "Desenvolvimento de uma plataforma de e-commerce completa com funcionalidades como carrinho de compras, pagamento integrado, sistema de avaliações de produtos e painel administrativo para gestão de produtos, pedidos e clientes.",
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    images: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
    ],
    tags: ["React", "Node.js", "MongoDB", "Stripe"]
  },
  {
    id: 2,
    title: "Dashboard Analytics",
    shortDescription: "Dashboard de análise de dados com visualizações interativas.",
    fullDescription: "Dashboard para análise de dados com visualizações interativas, filtros avançados e relatórios personalizados. Desenvolvido para uma empresa de marketing digital, permitindo visualização em tempo real do desempenho de campanhas.",
    thumbnail: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    images: [
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085"
    ],
    tags: ["Next.js", "Chart.js", "Firebase", "Tailwind CSS"]
  },
  {
    id: 3,
    title: "Social Network App",
    shortDescription: "Aplicativo de rede social com recursos de mensagens e feed de atividades.",
    fullDescription: "Aplicativo de rede social com feed de atividades, sistema de mensagens privadas, notificações em tempo real e perfis personalizáveis. Recursos de descoberta de conteúdo e conexão entre usuários.",
    thumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    images: [
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f"
    ],
    tags: ["React Native", "Express", "Socket.io", "MongoDB"]
  },
  {
    id: 4,
    title: "Project Management Tool",
    shortDescription: "Ferramenta de gerenciamento de projetos inspirada no Trello.",
    fullDescription: "Ferramenta de gerenciamento de projetos com quadros kanban, atribuição de tarefas, comentários, anexos de arquivos e sistema de notificações. Inspirada no Trello mas com funcionalidades adicionais para equipes de desenvolvimento.",
    thumbnail: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    images: [
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
    ],
    tags: ["React", "Redux", "Express", "PostgreSQL"]
  }
];

export const getProjects = () => projects;

const ProjectsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
    
    if (!sectionRef.current || !scrollContainerRef.current) return;
    
    // Animate section title
    gsap.fromTo(
      titleRef.current,
      { y: 30, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 0.5,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse"
        }
      }
    );
    
    // Set up horizontal scroll
    let horizontalScroll;
    
    if (window.innerWidth > 768) {
      horizontalScroll = gsap.to(scrollContainerRef.current, {
        x: () => -(scrollContainerRef.current!.scrollWidth - window.innerWidth + 48),
        ease: "none",
        scrollTrigger: {
          trigger: scrollContainerRef.current,
          start: "top 20%",
          end: () => `+=${scrollContainerRef.current!.scrollWidth - window.innerWidth}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true
        }
      });
    }
    
    // Animate each project card
    projectRefs.current.forEach((project, index) => {
      gsap.fromTo(
        project,
        { y: 30, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.6,
          delay: 0.1 * index,
          scrollTrigger: {
            trigger: project,
            start: "top 80%",
            toggleActions: "play none none reverse",
            containerAnimation: horizontalScroll
          }
        }
      );
    });
    
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
  
  return (
    <section 
      id="projects" 
      ref={sectionRef}
      className="py-24 bg-black text-white overflow-hidden"
    >
      <div className="px-6 md:px-12">
        <h2 
          ref={titleRef}
          className="text-3xl md:text-4xl font-bold mb-12 tracking-tight max-w-6xl mx-auto"
        >
          Projetos
        </h2>
        
        <div 
          ref={scrollContainerRef}
          className="flex md:min-h-[500px] pb-12 overflow-x-auto md:overflow-visible"
          style={{ scrollbarWidth: 'none' }} // Hide scrollbar for Firefox
        >
          <div className="flex gap-8 md:gap-12 px-6">
            {projects.map((project, index) => (
              <div 
                key={project.id}
                ref={el => projectRefs.current[index] = el}
                className="min-w-[280px] sm:min-w-[350px] md:min-w-[400px] flex-shrink-0"
              >
                <Link to={`/project/${project.id}`} className="block group">
                  <div className="mb-6 overflow-hidden">
                    <img 
                      src={project.thumbnail} 
                      alt={project.title}
                      className="w-full h-[250px] object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="text-xl font-medium mb-2 group-hover:text-gray-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4">
                    {project.shortDescription}
                  </p>
                  <div className="inline-flex items-center text-sm font-medium">
                    Ver projeto
                    <svg className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
