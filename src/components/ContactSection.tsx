
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ContactSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
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
      titleRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5 },
      0
    ).fromTo(
      contentRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, delay: 0.2 },
      0
    );
    
    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
  
  return (
    <section 
      id="contact" 
      ref={sectionRef}
      className="py-24 bg-white"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <h2 
          ref={titleRef}
          className="text-3xl md:text-4xl font-bold mb-12 tracking-tight text-center"
        >
          Entre em Contato
        </h2>
        
        <div 
          ref={contentRef}
          className="max-w-4xl mx-auto text-center"
        >
          <p className="text-xl mb-8">
            Interessado em trabalhar juntos? Entre em contato pelos canais abaixo.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
            <div className="p-6 border border-gray-200 rounded-lg">
              <div className="text-2xl mb-3">📧</div>
              <h3 className="text-lg font-medium mb-1">Email</h3>
              <p className="text-gray-600">rafaelfontanabg@gmail.com</p>
            </div>
            
            <div className="p-6 border border-gray-200 rounded-lg">
              <div className="text-2xl mb-3">📱</div>
              <h3 className="text-lg font-medium mb-1">Telefone</h3>
              <p className="text-gray-600">+55 (49) 9 9102-4062</p>
            </div>
            
            <div className="p-6 border border-gray-200 rounded-lg">
              <div className="text-2xl mb-3">🌐</div>
              <h3 className="text-lg font-medium mb-1">Social</h3>
              <div className="flex justify-center space-x-4 mt-2">
                <a href="#" className="text-gray-800 hover:text-gray-600 transition">
                  LinkedIn
                </a>
                <a href="#" className="text-gray-800 hover:text-gray-600 transition">
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <footer className="border-t border-gray-200 mt-12 pt-8 pb-8">
        <div className="max-w-6xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 mb-4 md:mb-0">
            © 2025 Rafael Gois. Todos os direitos reservados.
          </p>
          <div className="flex space-x-6">
            <a href="https://www.linkedin.com/in/rafaelfbgois/" target="_blank" className="text-gray-600 hover:text-gray-900 transition">
              LinkedIn
            </a>
            <a href="https://github.com/RafaGois" target="_blank" className="text-gray-600 hover:text-gray-900 transition">
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default ContactSection;
