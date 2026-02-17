import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";
import projectMeridian from "@/assets/project-meridian.jpg";
import projectContinuum from "@/assets/project-continuum.jpg";
import projectVertex from "@/assets/project-vertex.jpg";

const projects = [
  {
    name: "Meridian",
    description: "A system designed for clarity — where complexity dissolves into intuitive flows.",
    tags: ["Product Architecture", "Frontend Systems"],
    image: projectMeridian,
    layout: "overlay-left" as const,
    bgWord: "CLARITY",
  },
  {
    name: "Continuum",
    description: "Scalable infrastructure that breathes with the pace of its users.",
    tags: ["Engineering", "API Design"],
    image: projectContinuum,
    layout: "split-right" as const,
    bgWord: "SCALE",
  },
  {
    name: "Vertex",
    description: "Where data meets design — dashboards that tell stories, not spreadsheets.",
    tags: ["Data Visualization", "Product Design"],
    image: projectVertex,
    layout: "center-overlap" as const,
    bgWord: "INSIGHT",
  },
];

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: "-10%" });

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.08, 1, 1.04]);

  const renderLayout = () => {
    if (project.layout === "overlay-left") {
      return (
        <div className="relative h-[70vh] min-h-[500px] w-full">
          {/* Background word */}
          <span className="absolute top-8 right-8 font-serif text-[8rem] md:text-[14rem] font-bold text-foreground/[0.03] leading-none select-none pointer-events-none z-0">
            {project.bgWord}
          </span>

          {/* Image */}
          <motion.div
            className="absolute inset-0 overflow-hidden rounded-sm"
            style={{ y: imageY }}
          >
            <motion.img
              src={project.image}
              alt={project.name}
              className="w-full h-full object-cover"
              style={{ scale: imageScale }}
            />
            <div className="absolute inset-0 bg-foreground/20" />
          </motion.div>

          {/* Text overlay - bottom left */}
          <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12 z-10 max-w-md">
            <span className="font-sans text-xs font-light tracking-widest uppercase text-background/70 mb-3 block">
              0{index + 1}
            </span>
            <h3 className="font-serif text-4xl md:text-6xl font-medium text-background mb-4">
              {project.name}
            </h3>
            <p className="font-sans text-sm md:text-base font-light leading-relaxed text-background/80">
              {project.description}
            </p>
            <div className="flex gap-4 mt-4">
              {project.tags.map((tag) => (
                <span key={tag} className="font-sans text-[10px] font-light tracking-wider uppercase text-background/50">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      );
    }

    if (project.layout === "split-right") {
      return (
        <div className="relative min-h-[70vh]">
          <span className="absolute top-0 left-0 font-serif text-[10rem] md:text-[16rem] font-bold text-foreground/[0.03] leading-none select-none pointer-events-none z-0">
            {project.bgWord}
          </span>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center min-h-[70vh]">
            {/* Text - left */}
            <div className="md:col-span-4 z-10 order-2 md:order-1">
              <span className="font-sans text-xs font-light tracking-widest uppercase text-muted-foreground mb-6 block">
                0{index + 1}
              </span>
              <h3 className="font-serif text-5xl md:text-7xl font-medium text-foreground mb-6 md:text-right">
                {project.name}
              </h3>
              <p className="font-sans text-base font-light leading-relaxed text-muted-foreground md:text-right">
                {project.description}
              </p>
              <div className="flex gap-4 mt-6 md:justify-end">
                {project.tags.map((tag) => (
                  <span key={tag} className="font-sans text-[10px] font-light tracking-wider uppercase text-muted-foreground/60">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Image - right */}
            <div className="md:col-span-8 order-1 md:order-2">
              <motion.div className="overflow-hidden rounded-sm aspect-[16/10]" style={{ y: imageY }}>
                <motion.img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover"
                  style={{ scale: imageScale }}
                />
              </motion.div>
            </div>
          </div>
        </div>
      );
    }

    // center-overlap
    return (
      <div className="relative min-h-[70vh] flex flex-col items-center justify-center">
        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-serif text-[10rem] md:text-[18rem] font-bold text-foreground/[0.03] leading-none select-none pointer-events-none z-0 whitespace-nowrap">
          {project.bgWord}
        </span>

        {/* Title above image */}
        <div className="text-center mb-8 z-10">
          <span className="font-sans text-xs font-light tracking-widest uppercase text-muted-foreground mb-4 block">
            0{index + 1}
          </span>
          <h3 className="font-serif text-5xl md:text-8xl font-medium text-foreground">
            {project.name}
          </h3>
        </div>

        {/* Image centered */}
        <motion.div
          className="w-full max-w-4xl overflow-hidden rounded-sm aspect-[16/9] z-10"
          style={{ y: imageY }}
        >
          <motion.img
            src={project.image}
            alt={project.name}
            className="w-full h-full object-cover"
            style={{ scale: imageScale }}
          />
        </motion.div>

        {/* Description below */}
        <div className="text-center mt-8 max-w-lg z-10">
          <p className="font-sans text-base font-light leading-relaxed text-muted-foreground">
            {project.description}
          </p>
          <div className="flex gap-4 mt-4 justify-center">
            {project.tags.map((tag) => (
              <span key={tag} className="font-sans text-[10px] font-light tracking-wider uppercase text-muted-foreground/60">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
      className="mb-24 md:mb-40"
    >
      {renderLayout()}
    </motion.div>
  );
};

const SelectedWork = () => {
  const sectionRef = useRef(null);

  return (
    <section id="work" ref={sectionRef} className="py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 md:mb-32">
          <span className="font-sans text-xs font-light tracking-[0.3em] uppercase text-muted-foreground">
            Selected Work
          </span>
        </div>

        {projects.map((project, i) => (
          <ProjectCard key={project.name} project={project} index={i} />
        ))}
      </div>
    </section>
  );
};

export default SelectedWork;
