import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
      <div className="text-center max-w-4xl mx-auto">
        {/* Name */}
        <div className="overflow-hidden mb-4">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="font-serif text-6xl md:text-8xl lg:text-9xl font-medium tracking-tight text-foreground"
          >
            Dip Ojha
          </motion.h1>
        </div>

        {/* Subtitle */}
        <div className="overflow-hidden mb-16">
          <motion.p
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            className="font-sans text-sm md:text-base font-light tracking-[0.3em] uppercase text-muted-foreground"
          >
            Digital Systems Architect
          </motion.p>
        </div>

        {/* Statement */}
        <div className="overflow-hidden">
          <motion.p
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="font-serif text-2xl md:text-3xl lg:text-4xl font-normal leading-relaxed text-foreground"
          >
            Here's what <em className="text-accent">thoughtful</em> engineering looks like.
          </motion.p>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-12 bg-muted-foreground/30"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
