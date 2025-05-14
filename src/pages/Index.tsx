
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import TechSection from "@/components/TechSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import gsap from "gsap";

const Index = () => {
  useEffect(() => {
    // Initial page animation
    gsap.to('body', { 
      opacity: 1,
      duration: 0.6,
      ease: 'power2.out'
    });
    
    // Add loader styles
    const style = document.createElement('style');
    style.textContent = `
      body {
        opacity: 0;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);
  
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <TechSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
};

export default Index;
