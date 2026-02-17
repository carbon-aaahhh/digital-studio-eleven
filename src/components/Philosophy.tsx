import { AnimatedText, FadeIn } from "./AnimatedText";

const Philosophy = () => {
  return (
    <section className="py-32 md:py-48 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <AnimatedText>
            <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl font-medium leading-tight text-foreground">
              I build products that scale
            </h2>
          </AnimatedText>
          <AnimatedText delay={0.15}>
            <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl font-medium leading-tight text-foreground md:text-right mt-2">
              without losing <em className="text-accent">clarity.</em>
            </h2>
          </AnimatedText>
        </div>

        <FadeIn delay={0.4}>
          <div className="max-w-md ml-auto">
            <p className="font-sans text-base font-light leading-relaxed text-muted-foreground text-right">
              Every system I design begins with intention. I believe the best digital products
              are invisible — they work so well, you forget they're engineered.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Philosophy;
