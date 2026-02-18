import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { AnimatedText, FadeIn } from "./AnimatedText";

const experiences = [
  {
    year: "2024",
    role: "Digital Systems Architect",
    place: "Independent",
    narrative: "Designing end-to-end digital ecosystems — where strategy meets engineering. Building products that think ahead.",
    focus: ["System Design", "Product Strategy", "Technical Leadership"],
  },
  {
    year: "2023",
    role: "Senior Software Engineer",
    place: "Product Studio",
    narrative: "Led frontend architecture for products serving thousands. Learned that the best code is the code nobody notices.",
    focus: ["Frontend Architecture", "Performance", "Team Mentorship"],
  },
  {
    year: "2022",
    role: "Software Engineer",
    place: "Tech Collective",
    narrative: "Shipped fast, iterated faster. Discovered the balance between velocity and craft — and chose both.",
    focus: ["Full-Stack Development", "Agile Systems", "API Design"],
  },
  {
    year: "2020",
    role: "Frontend Developer",
    place: "Agency",
    narrative: "Where it all began. Translating design into interaction, pixel by pixel. Fell in love with the invisible details.",
    focus: ["UI Engineering", "Responsive Design", "Animation"],
  },
];

const ExperienceCard = ({
  exp,
  index,
}: {
  exp: (typeof experiences)[0];
  index: number;
}) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const yearY = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.3, 1, 1, 0.3]);

  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      style={{ opacity }}
      className="relative py-20 md:py-28"
    >
      {/* Large background year */}
      <motion.span
        style={{ y: yearY }}
        className={`absolute top-1/2 -translate-y-1/2 font-serif text-[10rem] md:text-[18rem] lg:text-[22rem] font-bold text-foreground/[0.025] leading-none select-none pointer-events-none ${
          isEven ? "left-0 md:-left-8" : "right-0 md:-right-8"
        }`}
      >
        {exp.year}
      </motion.span>

      <div
        className={`relative z-10 max-w-2xl ${
          isEven ? "ml-0 md:ml-[10%]" : "ml-auto md:mr-[10%]"
        }`}
      >
        {/* Year label */}
        <FadeIn delay={0.05}>
          <span className="font-sans text-xs font-light tracking-[0.3em] uppercase text-accent">
            {exp.year}
          </span>
        </FadeIn>

        {/* Role */}
        <AnimatedText delay={0.1}>
          <h3 className="font-serif text-3xl md:text-5xl font-medium text-foreground mt-4 leading-tight">
            {exp.role}
          </h3>
        </AnimatedText>

        {/* Place */}
        <FadeIn delay={0.2}>
          <span className="inline-block font-sans text-sm font-light text-muted-foreground mt-3 tracking-wide">
            {exp.place}
          </span>
        </FadeIn>

        {/* Narrative */}
        <FadeIn delay={0.3}>
          <p
            className={`font-sans text-base md:text-lg font-light leading-relaxed text-muted-foreground mt-8 max-w-md ${
              isEven ? "" : "md:ml-auto md:text-right"
            }`}
          >
            {exp.narrative}
          </p>
        </FadeIn>

        {/* Focus areas */}
        <FadeIn delay={0.4}>
          <div
            className={`flex flex-wrap gap-3 mt-8 ${
              isEven ? "" : "md:justify-end"
            }`}
          >
            {exp.focus.map((item) => (
              <span
                key={item}
                className="font-sans text-[11px] font-light tracking-[0.15em] uppercase text-foreground/50 border border-border/60 px-4 py-2 rounded-full"
              >
                {item}
              </span>
            ))}
          </div>
        </FadeIn>
      </div>
    </motion.div>
  );
};

const Experience = () => {
  return (
    <section id="about" className="py-32 md:py-48 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-8">
          <FadeIn>
            <span className="font-sans text-xs font-light tracking-[0.3em] uppercase text-muted-foreground">
              Journey
            </span>
          </FadeIn>
        </div>

        <AnimatedText>
          <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl font-medium leading-tight text-foreground max-w-3xl">
            Every role shaped how I{" "}
            <em className="text-accent">think</em> today.
          </h2>
        </AnimatedText>

        <FadeIn delay={0.2}>
          <p className="font-sans text-base font-light leading-relaxed text-muted-foreground mt-8 max-w-md">
            Not a list of titles — a story of becoming more intentional
            with every line of code.
          </p>
        </FadeIn>

        {/* Experience cards */}
        <div className="mt-24 md:mt-32">
          {experiences.map((exp, i) => (
            <ExperienceCard key={exp.year} exp={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
