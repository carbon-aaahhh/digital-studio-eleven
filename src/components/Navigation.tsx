import { motion } from "framer-motion";

const Navigation = () => {
  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 1.5 }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-6 md:px-12 flex justify-between items-center mix-blend-difference"
    >
      <span className="font-sans text-sm font-medium tracking-widest uppercase text-primary-foreground">
        Dip Ojha
      </span>
      <div className="flex gap-8">
        {["Work", "About", "Contact"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="font-sans text-sm font-light tracking-wide text-primary-foreground link-underline hover-tracking"
          >
            {item}
          </a>
        ))}
      </div>
    </motion.nav>
  );
};

export default Navigation;
