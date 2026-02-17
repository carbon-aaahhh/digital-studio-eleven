import { FadeIn } from "./AnimatedText";

const experiences = [
  { year: "2024", role: "Digital Systems Architect", place: "Independent" },
  { year: "2023", role: "Senior Software Engineer", place: "Product Studio" },
  { year: "2022", role: "Software Engineer", place: "Tech Collective" },
  { year: "2020", role: "Frontend Developer", place: "Agency" },
];

const Experience = () => {
  return (
    <section id="about" className="section-warm-alt py-32 md:py-48 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <span className="font-sans text-xs font-light tracking-[0.3em] uppercase text-muted-foreground">
            Experience
          </span>
        </div>

        {experiences.map((exp, i) => (
          <FadeIn key={exp.year} delay={i * 0.1}>
            <div className="relative border-t border-border py-10 md:py-14 grid grid-cols-1 md:grid-cols-12 gap-4 items-baseline">
              {/* Large background year */}
              <span className="absolute top-4 right-0 font-serif text-[8rem] md:text-[12rem] font-bold text-foreground/[0.03] leading-none select-none pointer-events-none">
                {exp.year}
              </span>

              <div className="md:col-span-2">
                <span className="font-sans text-sm font-light text-muted-foreground">
                  {exp.year}
                </span>
              </div>
              <div className="md:col-span-5">
                <h3 className="font-serif text-xl md:text-2xl font-medium text-foreground">
                  {exp.role}
                </h3>
              </div>
              <div className="md:col-span-5 md:text-right">
                <span className="font-sans text-sm font-light text-muted-foreground">
                  {exp.place}
                </span>
              </div>
            </div>
          </FadeIn>
        ))}
        <div className="border-t border-border" />
      </div>
    </section>
  );
};

export default Experience;
