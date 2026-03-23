"use client";
import { motion } from "framer-motion";

export default function Museum() {
  return (
    <main className="min-h-screen w-full selection:bg-[#F9F7F2] selection:text-[#160D1A]">
      
      {/* 1. THE FOYER (HERO) */}
      <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-center z-10 flex flex-col items-center"
        >
          <span className="uppercase tracking-[0.4em] text-xs text-[#B888BA] font-semibold mb-6 block">
            Exhibit • Private Collection
          </span>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif text-[#F9F7F2] italic leading-tight drop-shadow-lg">
            The Steadfastness
          </h1>
          <p className="mt-8 text-sm md:text-base font-light tracking-widest text-[#F9F7F2]/70 max-w-lg text-center uppercase">
            An archive dedicated to the one who endures the heavy parts and remains a fountain of love.
          </p>
        </motion.div>

        <motion.div 
          animate={{ height: ["0%", "100%"] }}
          transition={{ duration: 2, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-0 w-px h-32 bg-linear-to-b from-[#B888BA]/50 to-transparent"
        />
      </section>

      {/* 2. THE GALLERY */}
      <section className="w-full max-w-6xl mx-auto px-6 py-32 space-y-40">
        
        {/* Gallery Item 1 */}
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-24">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2 }}
            className="w-full md:w-1/2 aspect-4/5 bg-gray-900 relative overflow-hidden ring-1 ring-[#F9F7F2]/10"
          >
            <img 
              src="/pic1.jpeg" 
              alt="Metaphor for a fountain"
              className="object-cover w-full h-full grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-1000"
            />
          </motion.div>
          <div className="w-full md:w-1/2 space-y-6">
            <span className="text-[#B888BA] text-sm uppercase tracking-[0.2em]">The Enduring Force</span>
            <h2 className="text-4xl md:text-5xl font-serif italic text-[#F9F7F2]">Grace Under Pressure</h2>
            <p className="text-lg leading-relaxed text-[#F9F7F2]/70 font-light">
              "Why do you doubt yourself hah, you are the one who stood strong against the bad people, ones who try to torment you you backfired at them and knowing yourself for 20+ years don't doubt yourself because of a nobody like me, whatever I said, that was my past. I am not that anymore. I praise and look up to you for problems, you shouldn't feel weak bcz of anything. Stay strong. You're the best."
            </p>
          </div>
        </div>

        {/* Gallery Item 2 */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-12 md:gap-24">
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2 }}
            className="w-full md:w-1/2 aspect-square bg-gray-900 relative overflow-hidden ring-1 ring-[#F9F7F2]/10"
          >
            <img 
              src="/pic2.jpeg" 
              alt="Metaphor for mature strength"
              className="object-cover w-full h-full grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-1000"
            />
          </motion.div>
          <div className="w-full md:w-1/2 space-y-6">
            <span className="text-[#B888BA] text-sm uppercase tracking-[0.2em]">The Silent Support</span>
            <h2 className="text-4xl md:text-5xl font-serif italic text-[#F9F7F2]">Invisible Architecture</h2>
            <p className="text-lg leading-relaxed text-[#F9F7F2]/70 font-light">
              "To be considerate is to see the invisible. To be mature is to hold the heavy. You always supported and took care, I failed at that, but I failed and I am not failing again. Take care and have a good Day."
            </p>
          </div>
        </div>
      </section>

      {/* 3. THE CURATOR'S NOTE */}
      <section className="w-full min-h-[70vh] flex flex-col items-center justify-center px-6 py-24 bg-[#0B060D] text-[#F9F7F2]">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-2xl text-center space-y-12"
        >
          <span className="uppercase tracking-[0.3em] text-xs text-[#B888BA]">Curator's Note</span>
          <p className="text-2xl md:text-4xl font-serif italic leading-relaxed text-[#F9F7F2]/90">
            "Some people are anchors; they keep you in place. You are a fountain; you keep us moving, even when the water is heavy. I see it, and I am grateful for it."
          </p>
          <p className="text-sm md:text-base font-light tracking-wide text-[#B888BA]/70 italic mt-4">
            (Pics or koi thi nhi mere pas sadly...)
          </p>
          <div className="w-12 h-px bg-[#B888BA] mx-auto mt-12"></div>
        </motion.div>
      </section>

    </main>
  );
}