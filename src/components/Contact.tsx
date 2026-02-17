import { AnimatedText, FadeIn } from "./AnimatedText";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="section-warm-alt py-32 md:py-48 px-6 md:px-12">
      <div className="max-w-4xl mx-auto text-center">
        <AnimatedText>
          <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl font-medium text-foreground leading-tight">
            Let's build something
          </h2>
        </AnimatedText>
        <AnimatedText delay={0.15}>
          <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl font-medium leading-tight">
            <em className="text-accent">intentional.</em>
          </h2>
        </AnimatedText>

        <FadeIn delay={0.4}>
          <div className="mt-16">
            <motion.a
              href="mailto:hello@dipojha.com.np"
              className="inline-block font-sans text-sm font-medium tracking-widest uppercase px-10 py-4 rounded-full border border-foreground/20 text-foreground bg-transparent transition-all duration-500 hover:bg-accent hover:text-accent-foreground hover:border-accent hover:shadow-lg"
              whileHover={{ y: -2 }}
              transition={{ duration: 0.3 }}
            >
              Get in Touch
            </motion.a>
          </div>
        </FadeIn>

        <FadeIn delay={0.6}>
          <p className="font-sans text-xs font-light tracking-wider text-muted-foreground/50 mt-24">
            © {new Date().getFullYear()} Dip Ojha
          </p>
        </FadeIn>
      </div>
    </section>
  );
};

export default Contact;
