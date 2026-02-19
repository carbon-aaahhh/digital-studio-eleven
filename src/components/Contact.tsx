import { AnimatedText, FadeIn } from "./AnimatedText";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [wantsToAddNote, setWantsToAddNote] = useState(false);
  const [note, setNote] = useState("");
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setSending(true);
    // Simulate sending
    setTimeout(() => {
      setSending(false);
      setSent(true);
      toast({ title: "Message sent", description: "I'll get back to you soon." });
      setEmail("");
      setNote("");
      setWantsToAddNote(false);
      setTimeout(() => setSent(false), 3000);
    }, 1200);
  };

  return (
    <section id="contact" className="py-32 md:py-48 px-6 md:px-12">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-20">
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
        </div>

        <FadeIn delay={0.3}>
          <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-6">
            {/* Email field */}
            <div className="space-y-2">
              <label
                htmlFor="contact-email"
                className="font-sans text-xs font-medium tracking-widest uppercase text-muted-foreground"
              >
                Your email
              </label>
              <input
                id="contact-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full bg-transparent border-b border-foreground/20 py-3 font-sans text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-accent transition-colors duration-300"
              />
            </div>

            {/* Optional note toggle */}
            <div className="pt-2">
              <button
                type="button"
                onClick={() => setWantsToAddNote(!wantsToAddNote)}
                className="group flex items-center gap-2 font-sans text-xs tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                <span
                  className={`inline-block w-3 h-3 rounded-full border transition-all duration-300 ${
                    wantsToAddNote
                      ? "bg-accent border-accent"
                      : "border-foreground/30 group-hover:border-foreground/50"
                  }`}
                />
                Add a note
              </button>
            </div>

            {/* Expandable note field */}
            <AnimatePresence>
              {wantsToAddNote && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                  className="overflow-hidden"
                >
                  <div className="space-y-2 pt-2">
                    <label
                      htmlFor="contact-note"
                      className="font-sans text-xs font-medium tracking-widest uppercase text-muted-foreground"
                    >
                      Your note
                    </label>
                    <textarea
                      id="contact-note"
                      value={note}
                      onChange={(e) => setNote(e.target.value)}
                      placeholder="Tell me what's on your mind..."
                      rows={4}
                      className="w-full bg-transparent border border-foreground/10 rounded-lg p-3 font-sans text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-accent/50 transition-colors duration-300 resize-none"
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Submit */}
            <div className="pt-4">
              <motion.button
                type="submit"
                disabled={sending || !email.trim()}
                className="w-full font-sans text-sm font-medium tracking-widest uppercase py-4 rounded-full border border-foreground/20 text-foreground bg-transparent transition-all duration-500 hover:bg-accent hover:text-accent-foreground hover:border-accent disabled:opacity-40 disabled:cursor-not-allowed"
                whileHover={{ y: -2 }}
                transition={{ duration: 0.3 }}
              >
                {sending ? "Sending..." : sent ? "Sent ✓" : "Get in Touch"}
              </motion.button>
            </div>
          </form>
        </FadeIn>

        <FadeIn delay={0.6}>
          <p className="font-sans text-xs font-light tracking-wider text-muted-foreground/50 mt-24 text-center">
            © {new Date().getFullYear()} Dip Ojha
          </p>
        </FadeIn>
      </div>
    </section>
  );
};

export default Contact;
