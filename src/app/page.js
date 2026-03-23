"use client";
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Museum() {
  const [hasEntered, setHasEntered] = useState(false);
  const audioRef = useRef(null);

  const handleEnter = () => {
    setHasEntered(true);
    if (audioRef.current) {
      // Sets the system volume to 30% automatically
      audioRef.current.volume = 0.1; 
      audioRef.current.play().catch(e => console.log("Audio failed:", e));
    }
  };

  return (
    <main className="min-h-screen w-full selection:bg-[#F9F7F2] selection:text-[#160D1A] bg-[#0B060D] overflow-x-hidden">
      
      {/* 1. THE ENTRY SCREEN (Triggers Audio & Entry) */}
      <AnimatePresence>
        {!hasEntered && (
          <motion.div 
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-100 flex flex-col items-center justify-center bg-[#0B060D] px-6 text-center"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 1.2 }}
              className="space-y-16"
            >
              <div className="space-y-4">
                <span className="uppercase tracking-[0.6em] text-[9px] text-[#B888BA]/60 block mb-2">
                  Digital Archive • 2026
                </span>
                <h2 className="text-[#F9F7F2] font-serif italic text-3xl md:text-4xl tracking-tight font-light">
                  The Steadfastness
                </h2>
              </div>

              <button 
                onClick={handleEnter}
                className="group relative px-14 py-5 overflow-hidden rounded-full border border-[#B888BA]/30 hover:border-[#B888BA] transition-all duration-700 active:scale-95"
              >
                <span className="relative z-10 text-[#F9F7F2] uppercase tracking-[0.4em] text-[10px] transition-colors group-hover:text-[#0B060D] font-medium">
                  Enter Exhibit
                </span>
                <motion.div 
                  className="absolute inset-0 bg-[#B888BA] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"
                />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. BACKGROUND AUDIO (Fixed Filename: bg_music.mp3) */}
      <audio ref={audioRef} loop src="/bg_music.mp3"></audio>

      {/* 3. THE MUSEUM CONTENT */}
      <motion.div 
        animate={{ opacity: hasEntered ? 1 : 0 }}
        transition={{ duration: 2.5, ease: "easeOut" }}
        className={hasEntered ? "pointer-events-auto" : "opacity-0 pointer-events-none"}
      >
        
        {/* HERO SECTION */}
        <section className="relative h-[110vh] w-full flex flex-col items-center justify-center px-6">
          <motion.div 
            initial={false}
            animate={hasEntered ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 2, delay: 0.5 }}
            className="text-center z-10"
          >
            <span className="uppercase tracking-[0.4em] text-xs text-[#B888BA] font-semibold mb-8 block">
              Exhibit • Private Collection
            </span>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif text-[#F9F7F2] italic leading-tight drop-shadow-2xl">
              The Steadfastness
            </h1>
            <p className="mt-12 text-xs md:text-sm font-light tracking-[0.3em] text-[#F9F7F2]/50 max-w-xl mx-auto uppercase leading-loose text-center">
              An archive dedicated to the one who endures the heavy parts and remains a fountain of love.
            </p>
          </motion.div>
          <div className="absolute bottom-12 w-px h-24 bg-linear-to-b from-[#B888BA]/50 to-transparent" />
        </section>

        {/* GALLERY SECTION */}
        <section className="w-full max-w-6xl mx-auto px-6 py-40 space-y-56">
          
          <div className="flex flex-col md:flex-row items-center gap-16 md:gap-32">
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.5 }}
              className="w-full md:w-1/2 aspect-4/5 bg-[#160D1A] relative overflow-hidden ring-1 ring-[#F9F7F2]/5 shadow-2xl"
            >
              <img 
                src="/pic1.jpeg" 
                alt="First Exhibit"
                className="object-cover w-full h-full grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-1500 scale-105 hover:scale-100"
              />
            </motion.div>
            <div className="w-full md:w-1/2 space-y-8">
              <span className="text-[#B888BA] text-xs uppercase tracking-[0.3em] opacity-70">The Enduring Force</span>
              <h2 className="text-4xl md:text-5xl font-serif italic text-[#F9F7F2] font-light">Grace Under Pressure</h2>
              <p className="text-lg leading-relaxed text-[#F9F7F2]/60 font-light italic">
                {"Why do you doubt yourself? You are the one who stood strong against those who tried to torment you. Knowing yourself for 20+ years, do not doubt yourself. Whatever I said was my past; I am not that anymore. I praise and look up to you. Stay strong. You are the best."}
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row-reverse items-center gap-16 md:gap-32">
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.5 }}
              className="w-full md:w-1/2 aspect-square bg-[#160D1A] relative overflow-hidden ring-1 ring-[#F9F7F2]/5 shadow-2xl"
            >
              <img 
                src="/pic2.jpeg" 
                alt="Second Exhibit"
                className="object-cover w-full h-full grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-1500 scale-105 hover:scale-100"
              />
            </motion.div>
            <div className="w-full md:w-1/2 space-y-8 text-left md:text-right">
              <span className="text-[#B888BA] text-xs uppercase tracking-[0.3em] opacity-70">The Silent Support</span>
              <h2 className="text-4xl md:text-5xl font-serif italic text-[#F9F7F2] font-light">Invisible Architecture</h2>
              <p className="text-lg leading-relaxed text-[#F9F7F2]/60 font-light italic">
                {"To be considerate is to see the invisible. To be mature is to hold the heavy. You always supported and took care; I failed at that, but I will not fail again. Take care and have a good day."}
              </p>
            </div>
          </div>

        </section>

        {/* CURATOR'S NOTE */}
        <section className="w-full min-h-screen flex flex-col items-center justify-center px-6 py-40 bg-linear-to-b from-transparent to-[#050306]">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            className="max-w-3xl text-center space-y-16"
          >
            <span className="uppercase tracking-[0.5em] text-[10px] text-[#B888BA]">Final Installation</span>
            <p className="text-3xl md:text-5xl font-serif italic leading-[1.6] text-[#F9F7F2]/90 font-light">
              Some people are anchors; they keep you in place. You are a fountain; you keep us moving, even when the water is heavy. I see it, and I am grateful for it.
            </p>
            
            <div className="pt-10 space-y-4">
              <p className="text-[10px] font-light tracking-[0.3em] text-[#B888BA]/40 uppercase italic">
                (Pics or koi thi nhi mere pas sadly...)
              </p>
              <div className="w-16 h-px bg-linear-to-r from-transparent via-[#B888BA]/30 to-transparent mx-auto"></div>
            </div>
          </motion.div>
        </section>

      </motion.div>

    </main>
  );
}