
import { useEffect, useRef, useState } from "react";
import { useParams, Link } from "react-router-dom";
import gsap from "gsap";
import { Project, getProjects } from "@/components/ProjectsSection";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = getProjects().find((p) => p.id === Number(id));

  const headerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);

  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [imageOrientation, setImageOrientation] = useState<"landscape" | "portrait">("landscape");

  useEffect(() => {
    if (!headerRef.current) return;

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.fromTo(
      headerRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.8 },
      0
    )
      .fromTo(
        contentRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5 },
        0.3
      )
      .fromTo(
        galleryRef.current?.querySelectorAll("img"),
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4, stagger: 0.15 },
        0.5
      );

    return () => {
      tl.kill();
    };
  }, [project]);

  const handleImageClick = (image: string) => {
    setSelectedImage(image);
    
    // Determine orientation for the dialog display
    const img = new Image();
    img.onload = () => {
      setImageOrientation(img.width >= img.height ? "landscape" : "portrait");
    };
    img.src = image;
  };

  const handleCloseDialog = () => {
    setSelectedImage(null);
  };

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Projeto não encontrado</h1>
          <Link to="/" className="text-blue-600 underline">
            Voltar para a página inicial
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Back button at top left */}
      <div className="absolute top-20 left-6 z-20">
        <Link to="/#projects">
          <Button variant="outline" size="sm" className="gap-1">
            <ArrowLeft size={16} />
            Voltar para projetos
          </Button>
        </Link>
      </div>
      
      <div
        ref={headerRef}
        className="w-full h-[50vh] bg-black relative flex items-center justify-center"
      >
        <div className="absolute inset-0 opacity-70">
          <img
            src={project.thumbnail}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 text-center px-6">
          <h1 className="text-white text-4xl md:text-5xl font-bold mb-4">
            {project.title}
          </h1>
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {project.tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-white/10 text-white text-sm rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div ref={contentRef} className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold mb-6">Sobre o Projeto</h2>
        <p className="text-lg text-gray-700 mb-12 leading-relaxed">
          {project.fullDescription}
        </p>

        <h2 className="text-2xl font-bold mb-6">Galeria</h2>
        <div
          ref={galleryRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
        >
          {project.images.map((image, index) => {
            return (
              <div
                key={index}
                className="overflow-hidden rounded-lg cursor-pointer transition-all hover:shadow-lg"
                onClick={() => handleImageClick(image)}
              >
                <div className="w-full h-[250px] relative">
                  <img
                    src={image}
                    alt={`${project.title} - imagem ${index + 1}`}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
      
      <Dialog open={!!selectedImage} onOpenChange={handleCloseDialog}>
        <DialogContent
          className="max-w-5xl p-0 bg-black border-none overflow-hidden"
          onPointerDownOutside={handleCloseDialog}
        >
          <div className="w-full flex items-center justify-center p-2">
            {selectedImage && (
              <div className={`max-w-full max-h-[80vh] ${imageOrientation === "portrait" ? "w-auto h-auto" : "w-full"}`}>
                <img
                  src={selectedImage}
                  alt="Imagem expandida"
                  className="w-full h-full object-contain"
                />
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ProjectDetail;
