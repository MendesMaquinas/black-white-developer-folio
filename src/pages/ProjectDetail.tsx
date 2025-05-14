import { useEffect, useRef, useState } from "react";
import { useParams, Link } from "react-router-dom";
import gsap from "gsap";
import { Project, getProjects } from "@/components/ProjectsSection";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = getProjects().find((p) => p.id === Number(id));

  const headerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

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
          <Link to="/#projects" className="inline-flex items-center text-white">
            <svg
              className="mr-2 w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Voltar para projetos
          </Link>
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
          {project.images.map((image, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg cursor-pointer transition-all hover:shadow-lg"
              onClick={() => handleImageClick(image)}
            >
              <img
                src={image}
                alt={`${project.title} - imagem ${index + 1}`}
                className="w-full h-[250px] object-cover transition-transform hover:scale-105 duration-500"
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link
            to="/#contact"
            className="inline-flex items-center justify-center px-6 py-3 bg-black text-white rounded-md transition hover:bg-gray-800"
          >
            Vamos trabalhar juntos
            <svg
              className="ml-2 w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </Link>
        </div>
      </div>
      <Dialog open={!!selectedImage} onOpenChange={handleCloseDialog}>
        <DialogContent
          className="max-w-5xl p-0 bg-black border-none overflow-hidden"
          onPointerDownOutside={handleCloseDialog}
        >
          <div className="w-full flex items-center justify-center p-2">
            <AspectRatio ratio={16 / 9} className="w-full">
              {selectedImage && (
                <img
                  src={selectedImage}
                  alt="Imagem expandida"
                  className="w-full h-full object-contain"
                />
              )}
            </AspectRatio>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ProjectDetail;
