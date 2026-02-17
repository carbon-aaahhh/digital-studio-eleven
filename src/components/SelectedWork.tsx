import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    name: "Meridian",
    description: "A system designed for clarity — where complexity dissolves into intuitive flows.",
    tags: ["Product Architecture", "Frontend Systems"],
  },
  {
    name: "Continuum",
    description: "Scalable infrastructure that breathes with the pace of its users.",
    tags: ["Engineering", "API Design"],
  },
  {
    name: "Vertex",
    description: "Where data meets design — dashboards that tell stories, not spreadsheets.",
    tags: ["Data Visualization", "Product Design"],
  },
];

const ProjectBlock = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
      className="group border-t border-border py-12 md:py-16"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-start">
        <div>
          <span className="font-sans text-xs font-light tracking-widest uppercase text-muted-foreground mb-4 block">
            0{index + 1}
          </span>
          <h3 className="font-serif text-3xl md:text-5xl font-medium text-foreground group-hover:text-accent transition-colors duration-500">
            {project.name}
          </h3>
        </div>
        <div className="md:pt-8">
          <p className="font-sans text-base md:text-lg font-light leading-relaxed text-muted-foreground mb-6">
            {project.description}
          </p>
          <div className="flex gap-4">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="font-sans text-xs font-light tracking-wider uppercase text-muted-foreground/60"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const SelectedWork = () => {
  return (
    <section id="work" className="py-32 md:py-48 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <span className="font-sans text-xs font-light tracking-[0.3em] uppercase text-muted-foreground">
            Selected Work
          </span>
        </div>

        {projects.map((project, i) => (
          <ProjectBlock key={project.name} project={project} index={i} />
        ))}

        <div className="border-t border-border" />
      </div>
    </section>
  );
};

export default SelectedWork;
