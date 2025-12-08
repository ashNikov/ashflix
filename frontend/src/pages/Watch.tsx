import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function Watch() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-zinc-950 to-black text-white flex flex-col">
      {/* Top bar */}
      <header className="flex items-center justify-between px-6 md:px-10 py-3 border-b border-red-900/40 bg-black/80 backdrop-blur">
        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate(-1)}
            className="text-zinc-400 hover:text-white text-sm mr-2"
          >
            ← Back
          </button>
          <div className="w-8 h-8 rounded-md bg-black border border-red-600 flex items-center justify-center">
            <span className="text-red-600 font-extrabold text-lg">AF</span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold tracking-wide">
              AshFlix
            </span>
            <span className="text-[10px] text-zinc-400">
              AI Streaming SaaS · DevSecOps Demo
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3 text-xs text-zinc-300">
          <span className="hidden md:inline text-zinc-400">Profile</span>
          <div className="w-8 h-8 rounded-full bg-zinc-800 border border-zinc-600" />
        </div>
      </header>

      {/* Player area */}
      <main className="flex-1 flex flex-col gap-4 md:gap-6 px-4 md:px-10 py-4 md:py-6">
        {/* Fake video frame */}
        <motion.div
          className="relative w-full aspect-video rounded-2xl bg-gradient-to-br from-zinc-900 via-black to-zinc-900 border border-zinc-800 overflow-hidden shadow-[0_0_60px_rgba(0,0,0,0.9)]"
          initial={{ opacity: 0, y: 20, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          {/* subtle glow */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40 pointer-events-none" />

          {/* center play icon */}
          <button className="absolute inset-0 flex items-center justify-center group">
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-black/70 border border-red-500/70 flex items-center justify-center group-hover:scale-105 transition-transform">
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-red-600 flex items-center justify-center shadow-[0_0_35px_rgba(248,113,113,0.9)]">
                <span className="ml-1 text-3xl md:text-4xl text-white">▶</span>
              </div>
            </div>
          </button>

          {/* bottom fake controls */}
          <div className="absolute bottom-0 left-0 right-0 px-4 md:px-6 pb-3 pt-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
            <div className="flex items-center gap-3 mb-2">
              <div className="h-1.5 flex-1 rounded-full bg-zinc-700 overflow-hidden">
                <div className="h-full w-1/3 rounded-full bg-red-600" />
              </div>
              <span className="text-[10px] text-zinc-300">00:42 / 02:15</span>
            </div>
            <div className="flex items-center justify-between text-xs text-zinc-300">
              <div className="flex items-center gap-3">
                <span>⏯</span>
                <span>⏮</span>
                <span>⏭</span>
                <span className="ml-2">🔊 75%</span>
              </div>
              <div className="flex items-center gap-3">
                <span>💬</span>
                <span>⚙️</span>
                <span>⛶</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Metadata + description */}
        <section className="grid md:grid-cols-[2fr,1fr] gap-6 items-start">
          <div className="space-y-3">
            <div className="flex flex-wrap items-center gap-2 text-xs text-zinc-400">
              <span className="px-2 py-0.5 rounded-full border border-zinc-600 text-[10px]">
                AshFlix Original
              </span>
              <span className="px-2 py-0.5 rounded-full bg-red-600/80 text-[10px]">
                DevSecOps
              </span>
              <span>2025</span>
              <span>PG-13</span>
              <span className="text-zinc-500">·</span>
              <span>1h 45m</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-semibold">
              AshFlix: Helix Origin — Cinematic DevSecOps in the Cloud
            </h1>
            <p className="text-sm md:text-base text-zinc-300">
              This demo stream walks through how AshFlix is designed as a
              production-grade DevSecOps &amp; Cloud Engineering platform:
              AHI intro, secure streaming frontends, observability, and an
              AWS-ready backend skeleton — all built and automated by UWEM.
            </p>
          </div>

          <div className="space-y-2 text-xs text-zinc-300 bg-zinc-900/60 border border-zinc-800 rounded-2xl p-4">
            <h2 className="text-sm font-semibold mb-1">Stream telemetry</h2>
            <div className="flex justify-between">
              <span>Region</span>
              <span className="text-zinc-400">eu-west-1</span>
            </div>
            <div className="flex justify-between">
              <span>Environment</span>
              <span className="text-zinc-400">dev-local</span>
            </div>
            <div className="flex justify-between">
              <span>Bitrate (simulated)</span>
              <span className="text-zinc-400">4.2 Mbps</span>
            </div>
            <div className="flex justify-between">
              <span>Latency (simulated)</span>
              <span className="text-zinc-400">38 ms</span>
            </div>
            <div className="pt-2 text-[11px] text-zinc-500">
              In a full deployment, these values would come from real playback
              analytics, CloudWatch metrics, and tracing dashboards.
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-800 bg-black/90 px-6 md:px-10 py-3 text-[11px] text-zinc-500 flex flex-wrap gap-4 justify-between">
        <span>AshFlix · Demo cinematic stream only · No real media served</span>
        <span>Built &amp; powered by UWEM · DevSecOps &amp; Cloud</span>
      </footer>
    </div>
  );
}

