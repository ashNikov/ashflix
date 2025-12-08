import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { movieSections, type MovieItem } from "../data/movies";
import MovieDetailsModal from "../components/MovieDetailsModal";
import { getBackendStatus, getCatalogSections } from "../api/client";

type SelectedMovie = {
  sectionTitle: string;
  item: MovieItem;
};

export default function Browse() {
  const [selected, setSelected] = useState<SelectedMovie | null>(null);
  const [backendStatus, setBackendStatus] = useState<any | null>(null);

  // frontend state for sections – start with local demo data as fallback
  const [sections, setSections] = useState(movieSections);

  const navigate = useNavigate();

  useEffect(() => {
    // check backend health
    getBackendStatus().then(setBackendStatus);

    // fetch catalog sections from backend
    getCatalogSections().then((data) => {
      if (data && Array.isArray(data.sections)) {
        setSections(data.sections);
      } else {
        // if API fails, we just keep using local movieSections
        console.warn("Using local fallback sections – catalog API unavailable.");
      }
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-zinc-950 to-black text-white flex flex-col">
      {/* Top nav */}
      <header className="flex items-center justify-between px-8 py-4 border-b border-red-900/40 bg-black/60 backdrop-blur sticky top-0 z-20">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-md bg-black border border-red-600 flex items-center justify-center">
            <span className="text-red-600 font-extrabold text-lg">AF</span>
          </div>
          <span className="text-xl font-semibold tracking-wide">
            AshFlix
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm text-zinc-300">
          <button className="hover:text-white transition-colors">Home</button>
          <button className="hover:text-white transition-colors">Series</button>
          <button className="hover:text-white transition-colors">Films</button>
          <button className="hover:text-white transition-colors">
            New &amp; Hot
          </button>
        </nav>

        <div className="flex items-center gap-3 text-xs text-zinc-300">
          <span className="hidden sm:inline text-zinc-400">Profile</span>
          <div className="w-8 h-8 rounded-full bg-zinc-800 border border-zinc-600" />
        </div>
      </header>

      {/* Scrollable content */}
      <div className="flex-1 overflow-y-auto">
        {/* Hero */}
        <section className="relative px-8 py-10 md:py-16">
          <div className="max-w-3xl">
            <p className="uppercase text-[11px] tracking-[0.3em] text-red-500">
              AshFlix Original · AI Curated
            </p>
            <p className="text-[10px] tracking-wider text-zinc-500 mb-3">
              Powered by{" "}
              <span className="text-red-500 font-semibold">UWEM</span>
            </p>
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Where cinematic streams meet intelligent automation.
            </h1>
            <p className="text-sm md:text-base text-zinc-300 max-w-xl mb-6">
              This dashboard simulates a real streaming control center. Each row
              will be wired to live APIs, AI-powered recommendations and
              DevSecOps observability as the project grows.
            </p>
            <div className="flex flex-wrap gap-3 text-sm">
              <button
                onClick={() => navigate("/watch")}
                className="inline-flex items-center gap-2 rounded-md bg-white text-black px-4 py-2 font-semibold hover:bg-zinc-200 transition-colors"
              >
                ▶ Play Demo Stream
              </button>
              <button className="inline-flex items-center gap-2 rounded-md bg-zinc-800 text-white px-4 py-2 font-semibold border border-zinc-600 hover:bg-zinc-700 transition-colors">
                ⓘ View Architecture
              </button>
            </div>
          </div>
        </section>

        {/* Rows (now driven by backend sections) */}
        <main className="space-y-8 pb-10">
          {sections.map((section: any, index: number) => (
            <motion.section
              key={section.id}
              className="px-8"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.4, delay: index * 0.05, ease: "easeOut" }}
            >
              <motion.h2
                className="text-lg font-semibold mb-3 flex items-center gap-2"
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.35, delay: 0.05, ease: "easeOut" }}
              >
                <span>{section.title}</span>
                <span className="h-px w-10 bg-red-600/70 rounded-full" />
              </motion.h2>
              <div className="flex gap-3 overflow-x-auto pb-2">
                {section.items.map((item: any) => (
                  <button
                    key={item.id}
                    onClick={() =>
                      setSelected({ sectionTitle: section.title, item })
                    }
                    className="
                      group relative w-40 h-24 md:w-52 md:h-32 flex-shrink-0 rounded-md
                      bg-zinc-900 border border-zinc-800 overflow-hidden
                      transition-all duration-300 ease-out
                      hover:scale-[1.06]
                      hover:border-red-600
                      hover:shadow-[0_0_20px_rgba(248,113,113,0.45)]
                    "
                  >
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-40 transition-opacity duration-300 bg-gradient-to-t from-red-900/40 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <span className="absolute bottom-2 left-2 text-[11px] text-zinc-200 font-medium group-hover:translate-y-[-2px] transition-all">
                      {item.title}
                    </span>
                    {item.tag && (
                      <span className="absolute top-2 left-2 text-[10px] px-2 py-0.5 rounded-full bg-red-600/80 text-white group-hover:scale-110 transition-transform">
                        {item.tag}
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </motion.section>
          ))}
        </main>
      </div>

      {/* DevOps footer with backend status */}
      <footer className="border-t border-zinc-800 bg-black/80 px-8 py-3 text-[11px] text-zinc-500 flex flex-wrap gap-4 justify-between">
        <span>Region: eu-west-1 · Environment: dev-local</span>
        <span>
          Backend:{" "}
          {backendStatus?.status === "running"
            ? `✔️ OK (${backendStatus.region})`
            : "❌ Offline"}
        </span>
      </footer>

      {/* Movie details modal */}
      {selected && (
        <MovieDetailsModal
          sectionTitle={selected.sectionTitle}
          item={selected.item}
          onClose={() => setSelected(null)}
        />
      )}
    </div>
  );
}

