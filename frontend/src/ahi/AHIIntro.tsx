import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function AHIIntro() {
  const hasPlayedRef = useRef(false);

  const playBoom = () => {
    if (hasPlayedRef.current) return;

    const boom = new Audio("/ah-boom.wav");
    boom.volume = 1.0;
    boom
      .play()
      .then(() => {
        hasPlayedRef.current = true;
      })
      .catch(() => {
        console.log("Autoplay blocked. Will try again on user click.");
      });
  };

  useEffect(() => {
    // Try autoplay on mount
    playBoom();
  }, []);

  return (
    <div
      className="w-full h-screen bg-black flex items-center justify-center overflow-hidden"
      onClick={playBoom} // Fallback: first click will trigger sound
    >
      {/* subtle vignette */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_55%),radial-gradient(circle_at_top_left,rgba(248,113,113,0.15),transparent_55%),radial-gradient(circle_at_bottom_right,rgba(248,113,113,0.15),transparent_55%)]" />

      {/* red helix ribbon */}
      <motion.div
        className="absolute w-[140%] h-[140%] -rotate-12"
        initial={{ x: "-10%", opacity: 0 }}
        animate={{ x: "10%", opacity: 1 }}
        transition={{ duration: 1.4, ease: "easeInOut" }}
      >
        <motion.div
          className="w-full h-full"
          initial={{ clipPath: "inset(50% 50% 50% 50%)" }}
          animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
          transition={{ duration: 1.3, ease: "easeInOut" }}
        >
          <div className="w-full h-full bg-gradient-to-tr from-red-900 via-red-700 to-red-500 opacity-60 blur-2xl" />
        </motion.div>
      </motion.div>

      {/* AF tile */}
      <motion.div
        className="relative z-10 flex flex-col items-center gap-4"
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
      >
        <motion.div
          className="w-24 h-24 rounded-2xl border border-red-600 bg-black flex items-center justify-center shadow-[0_0_80px_rgba(248,113,113,0.7)]"
          initial={{ boxShadow: "0 0 0 rgba(0,0,0,0)" }}
          animate={{
            boxShadow: [
              "0 0 0 rgba(0,0,0,0)",
              "0 0 80px rgba(248,113,113,0.8)",
              "0 0 45px rgba(248,113,113,0.6)",
            ],
          }}
          transition={{ delay: 0.7, duration: 1.1 }}
        >
          <span className="text-4xl font-extrabold tracking-tight text-red-500">
            AF
          </span>
        </motion.div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.4 }}
        >
          <p className="text-sm tracking-[0.25em] uppercase text-red-400">
            AshFlix Helix Ident
          </p>
          <p className="text-xs text-zinc-400 mt-1">
            Àh-heeeeeee · AI Streaming SaaS
          </p>
        </motion.div>
      </motion.div>

      {/* Powered by UWEM footer (animated) */}
      <motion.div
        className="absolute bottom-6 inset-x-0 text-center text-xs tracking-[0.2em] uppercase text-red-300"
        initial={{ opacity: 0, y: 10 }}
        animate={{
          opacity: 0.6,
          y: 0,
          transition: { delay: 1.4, duration: 0.5, ease: "easeOut" },
        }}
      >
        <motion.span
          initial={{ opacity: 0.6 }}
          animate={{
            opacity: [0.6, 1, 0.6],
            scale: [1, 1.03, 1],
          }}
          transition={{
            delay: 1.9,
            duration: 2,
            repeat: Infinity,
            repeatType: "mirror",
          }}
        >
          Powered by <span className="font-bold text-red-400">UWEM</span>
        </motion.span>
      </motion.div>
    </div>
  );
}

