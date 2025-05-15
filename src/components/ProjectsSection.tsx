
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
    id: 2,
    title: "Controle de Serraria",
    shortDescription: "Sistema de controle e BI de serrarias",
    fullDescription: `Desenvolvimento de uma plataforma de controle de todos os processo envolvendo uma serraria, desde a visaulização com telas e gráficos customizaveis sobre a produção,
    até a geração de relatórios dos demais processos, como por exemplo de paradas de linha de produção, com gráficos de pareto indicanto as maiores causas e áreas das paradas, rastreio e
    controle de pacotes, etc. A partir desse sistema a gestão pode ter uma visaulização completa não só do que foi produzido, mas também dos demais indicadores que envolvem os demais escopos
    envovidos em todo o processo. Foi Nesse projeto que desenvolvi minhas habilidades de processamento e representação dos dados, pois em cada cliente existem alterações e customizações únicas, como relatórios e gráficos referentes aos mais diferentes escopos.`,
    thumbnail: "/public/controleserraria/currentdashboard.png",
    images: [
      "/public/controleserraria/stopsdashboard.png",
      "/public/controleserraria/stopsscreen.png",
      "/public/controleserraria/autostoppopup.png",
      "/public/controleserraria/currentdashboard.png",
      "/public/controleserraria/mobiledashboard.png",
      "/public/controleserraria/mobilenavbar.png",
      "/public/controleserraria/mobileregister.png",
    ],
    tags: ["Next.js", "Typescript", "Node.js", "MS SQL Server", "Prisma.js", "Express"]
  },
  {
    id: 3,
    title: "Controla Fábrica",
    shortDescription: "Aplicativo mobile de controle de ordens de fabricação.",
    fullDescription: `Aplicativo que funciona no 'chão de fábrica', envolve o escopo de planejamento e controle de processos e 
    se comunica com as ordens de fabricação referentes a máquina, possibilitando a atualização do status atual referente a mesma.
    A partir do uso desse aplicativo foi possível criar os registros de como a situação de cada peça estava dentro da fábrica, e a partir dos dados
    gerados e movimentados por ele criar BIs que mostrassem o quão pronta uma máquina estava, desde o escopo geral como um todo a até 
    individuamlente pelos seus conjuntos. Acredito que até hoje essa foi uma das minahs soluções mais impactantes, pois garantiu pra a gestão uma visaulização segura e confiante de
    como estava a sitaução da máquina em geral, podendo principalmente disponibilizar uma análise de como está a presente situação para que sejam tomadas decisões de como agir no futuro.`,
    thumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    images: [
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f"
    ],
    tags: ["Android", "Java", "Spring", "Android Studio"]
  },
  {
    id: 4,
    title: "Controle Siderurgico",
    shortDescription: "Aplicativo de controle de matéria prima de siderurgicos",
    fullDescription: `Aplicativo que faz o controle do estoque das matérias primas de siderurgicos, a apartir dele e de etiquetas vinculadas ao produto 
    os operadores podem movimentar o consumo do estoque, possibilitando para os setores de compras e engenharia uma visualização segura da sitaução atual, podendo garantir planos de ação, como por exemplo a antecipação ou prorrogação da compra de algum material.`,
    thumbnail: "/public/controlesiderurgico/menu.png",
    images: [
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
    ],
    tags: ["Android", "Java", "Android Studio", "Javascript", "Node.js", "Express"]
  },
  {
    id: 5,
    title: "Controle de solicitações de campo",
    shortDescription: `Sistema de controle de solicitações de campo.`,
    fullDescription: `Sistema de controle de solicitações de campo, onde os usuários podem criar uma solicitação e destinar para um responsável a partir de uma pré aprovação do gestor do mesmo feita dentro do próprio sistema, 
    a aprtir da aprovação o responsável irá movimentar o status daquela pendência, 
    chegando até a sua conclusão. Esse sistema teve um impacto muito significativo, pois através dele conseguiu-se ter o controle e a resolução do problema,
    além de disponibilizar os dados que mostraram os setores da empresa e motivos de maior não conformidades, garantindo uma ferramenta poderona para planos de ação mais inteligentes.`,
    thumbnail: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    images: [
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
    ],
    tags: ["Next.js", "Typescript", "Express", "Node.js", "MS SQL Server", "Sequelize"]
  },
  {
    id: 6,
    title: "Dashboard Controle Despachos",
    shortDescription: `Sistema de controle de despachos de almoxarifado.`,
    fullDescription: `Sistema de controle de despachos que funciona no almoxarifado da empresa e possibilita a emissão, visaulização e controle de
           todos os despachos emitidos. Foi o meu primeiro sistema que trabalhou com imagens e arquivos .svg, onde ao ser criado um despacho é anexado imagens do mesmo
           junto com a assinatura do responsável pelo transporte. Essa função possibilitou para o setor uma grande melhora na confiabilidade e segurança no trabalho, 
           pois além de possibilitar o controle do processo, eliminou os extravios e consequente prejuízos e retrabalhos. `,
    thumbnail: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    images: [
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
    ],
    tags: ["React.js", "Typescript"]
  },
  {
    id: 7,
    title: "App de Controle Despachos",
    shortDescription: `App de controle de emissão de despachos.`,
    fullDescription: `App mobile no qual são emitidos os registros de despachos, fazendo uma relação direta 
          com o site de despachos.`,
    thumbnail: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    images: [
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
    ],
    tags: ["React.js", "Typescript"]
  },
  {
    id: 8,
    title: "App de Controle Notificações",
    shortDescription: `App de controle de notificaçôes internas.`,
    fullDescription: `App de controle de notificações internas. A partir dele são emitidos todos os registros de não conformidades, junto com o plano de resolução, que acompanha o registro da mesma. Esse sistema teve um impacto muito significativo pois simplificou um processo que era muito burocrático além de 
          possibilitar para os gestores uma visualização completa das maiores fontes e causas dos problemas dentro da empresa.`,
    thumbnail: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    images: [
      "/public/notificacao/Captura de tela 2023-11-21 142618.png",
      "/public/notificacao/Captura de tela 2023-11-21 142713.png",
      "/public/notificacao/Captura de tela 2023-11-21 142801.png",
      "/public/notificacao/Captura de tela 2023-11-21 142829.png",
      "/public/notificacao/Captura de tela 2023-11-21 142933.png",
      "/public/notificacao/Captura de tela 2023-11-21 142903.png",
      "/public/notificacao/Captura de tela 2023-11-21 142928.png",
      "/public/notificacao/Captura de tela 2023-11-21 143120.png",
      "/public/notificacao/Captura de tela 2023-11-29 080746.png",
      "/public/notificacao/Captura de tela 2023-11-29 080809.png",
      "/public/notificacao/Captura de tela 2023-11-29 080840.png",
      "/public/notificacao/Captura de tela 2023-11-29 080854.png",
    ],
    tags: ["Android", "Java", "Android Studio", "Javascript", "Node.js", "Express"]
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
