
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

export interface Project {
  id: number;
  title: string;
  shortDescription: string;
  fullDescription: string;
  thumbnail: string;
  images: string[];
  tags: string[];
}

// Keep the projects data
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
    thumbnail: "/public/controlafabrica/status.png",
    images: [
      "/public/controlafabrica/login.png",
      "/public/controlafabrica/of.png",
      "/public/controlafabrica/scan.png",
      "/public/controlafabrica/status.png",
      "/public/controlafabrica/done.png",
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
      "/public/controlesiderurgico/login.png",
      "/public/controlesiderurgico/menu.png",
      "/public/controlesiderurgico/enter.png",
      "/public/controlesiderurgico/fragment.png",
      "/public/controlesiderurgico/scanner.png",
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
    thumbnail: "/public/controlesolicitacoescampo/registers.png",
    images: [
      "/public/controlesolicitacoescampo/login.png",
      "/public/controlesolicitacoescampo/creation.png",
      "/public/controlesolicitacoescampo/creation2.png",
      "/public/controlesolicitacoescampo/inputimages.png",
      "/public/controlesolicitacoescampo/registers.png",
      "/public/controlesolicitacoescampo/table.png",
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
    thumbnail: "/public/despacho/dashboard.png",
    images: [
      "/public/despacho/login.png",
      "/public/despacho/creation.png",
      "/public/despacho/dashboard.png",
      "/public/despacho/creation.png"
    ],
    tags: ["React.js", "Typescript"]
  },
  {
    id: 7,
    title: "App de Controle Despachos",
    shortDescription: `App de controle de emissão de despachos.`,
    fullDescription: `App mobile no qual são emitidos os registros de despachos, fazendo uma relação direta 
          com o site de despachos.`,
    thumbnail: "/public/despacho-app/menu.png",
    images: [
      "/public/despacho-app/login.png",
      "/public/despacho-app/menu.png",
      "/public/despacho-app/image.png",
      "/public/despacho-app/new.png",
      "/public/despacho-app/new2.png",
      "/public/despacho-app/registers.png",
    ],
    tags: ["React.js", "Typescript"]
  },
  {
    id: 8,
    title: "App de Controle Notificações",
    shortDescription: `App de controle de notificaçôes internas.`,
    fullDescription: `App de controle de notificações internas. A partir dele são emitidos todos os registros de não conformidades, junto com o plano de resolução, que acompanha o registro da mesma. Esse sistema teve um impacto muito significativo pois simplificou um processo que era muito burocrático além de 
          possibilitar para os gestores uma visualização completa das maiores fontes e causas dos problemas dentro da empresa.`,
    thumbnail: "/public/notificacao/Captura de tela 2023-11-21 142713.png",
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
  
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    // Simple animation just for the title
    if (!titleRef.current || !sectionRef.current) return;
    
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
    
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
  
  return (
    <section 
      id="projects" 
      ref={sectionRef}
      className="py-24 bg-black text-white"
    >
      <div className="px-6 md:px-12 max-w-7xl mx-auto">
        <h2 
          ref={titleRef}
          className="text-3xl md:text-4xl font-bold mb-12 tracking-tight"
        >
          Projetos
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {projects.map((project) => (
            <Card 
              key={project.id}
              className="bg-zinc-900 border-zinc-800 hover:border-zinc-700 transition-colors overflow-hidden h-full"
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img 
                  src={project.thumbnail} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              
              <CardContent className="p-5">
                <h3 className="text-xl font-medium mb-2 text-white">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                  {project.shortDescription}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-2">
                  {project.tags.slice(0, 3).map((tag, index) => (
                    <span 
                      key={index}
                      className="text-xs px-2 py-1 bg-zinc-800 text-zinc-300 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="text-xs px-2 py-1 bg-zinc-800 text-zinc-300 rounded-full">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>
              </CardContent>
              
              <CardFooter className="p-5 pt-0">
                <Link 
                  to={`/project/${project.id}`}
                  className="inline-flex items-center text-sm font-medium text-white hover:text-gray-300 transition-colors group"
                >
                  Ver projeto
                  <svg className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
