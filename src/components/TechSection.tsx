
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface Technology {
  name: string;
  icon: string;
}

const technologies: Technology[] = [
  { name: "HTML", icon: "html5" },
  { name: "CSS", icon: "css3-alt" },
  { name: "JavaScript", icon: "js" },
  { name: "TypeScript", icon: "typescript" },
  { name: "React.js", icon: "react" },
  { name: "Next.js", icon: "next-js" },
  { name: "Node.js", icon: "node-js" },
  { name: "Express", icon: "server" }
];

const TechSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const techRefs = useRef<(HTMLDivElement | null)[]>([]);
  
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
    
    techRefs.current.forEach((tech, index) => {
      tl.fromTo(
        tech,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4, stagger: 0.1 },
        0.3 + (index * 0.05)
      );
    });
    
    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
  
  return (
    <section 
      id="tech"
      ref={sectionRef}
      className="py-24 bg-white"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <h2 
          ref={titleRef}
          className="text-3xl md:text-4xl font-bold mb-12 tracking-tight text-center"
        >
          Tecnologias
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {technologies.map((tech, index) => (
            <div 
              key={tech.name}
              ref={el => techRefs.current[index] = el}
              className="flex flex-col items-center p-6 bg-gray-50 border border-gray-100 rounded-lg transition-transform duration-200 hover:-translate-y-1"
            >
              <div className="text-4xl mb-4 text-black">
                <i className={`devicon-${tech.icon}`}>{tech.name[0]}</i>
              </div>
              <p className="font-medium">{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechSection;
