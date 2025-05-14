
import { useEffect, useRef } from "react";
import gsap from "gsap";

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const titleRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    
    const tl = gsap.timeline({
      defaults: { ease: "power3.out" }
    });
    
    tl.fromTo(
      nameRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1 },
      0
    ).fromTo(
      titleRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: 0.3 },
      0
    );
    
    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="h-screen flex flex-col justify-center items-center relative bg-white text-black"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="h-full w-full bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      </div>
      
      <div className="text-center z-10 px-4">
        <h1 
          ref={nameRef}
          className="text-5xl md:text-7xl font-bold tracking-tight mb-6"
        >
          João Silva
        </h1>
        <p 
          ref={titleRef}
          className="text-xl md:text-2xl text-gray-700 max-w-2xl mx-auto"
        >
          Desenvolvedor Full Stack especializado em criar experiências digitais excepcionais e interfaces interativas.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
