import { FadeIn } from "./AnimatedText";

const skillGroups = [
  {
    title: "Engineering",
    skills: ["TypeScript", "React", "Node.js", "Python", "System Design", "API Architecture"],
  },
  {
    title: "Frontend Systems",
    skills: ["Component Libraries", "Design Systems", "Performance", "Accessibility", "Animation", "State Management"],
  },
  {
    title: "Product Architecture",
    skills: ["Scalable Infrastructure", "Database Design", "Cloud Services", "CI/CD", "Testing", "Documentation"],
  },
];

const Skills = () => {
  return (
    <section className="py-32 md:py-48 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <span className="font-sans text-xs font-light tracking-[0.3em] uppercase text-muted-foreground">
            Capabilities
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          {skillGroups.map((group, i) => (
            <FadeIn key={group.title} delay={i * 0.15}>
              <div>
                <h3 className="font-serif text-xl md:text-2xl font-medium text-foreground mb-8">
                  {group.title}
                </h3>
                <ul className="space-y-3">
                  {group.skills.map((skill) => (
                    <li
                      key={skill}
                      className="font-sans text-sm font-light text-muted-foreground hover-tracking cursor-default"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
