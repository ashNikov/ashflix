import React from "react";
import { movieSections } from "../data/movies";

export default function Browse() {
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
            <p className="uppercase text-[11px] tracking-[0.3em] text-red-500 mb-3">
              AshFlix Original · AI Curated
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
              <button className="inline-flex items-center gap-2 rounded-md bg-white text-black px-4 py-2 font-semibold hover:bg-zinc-200 transition-colors">
                ▶ Play Demo Stream
              </button>
              <button className="inline-flex items-center gap-2 rounded-md bg-zinc-800 text-white px-4 py-2 font-semibold border border-zinc-600 hover:bg-zinc-700 transition-colors">
                ⓘ View Architecture
              </button>
            </div>
          </div>
        </section>

        {/* Rows */}
        <main className="space-y-8 pb-10">
          {movieSections.map((section) => (
            <section key={section.id} className="px-8">
              <h2 className="text-lg font-semibold mb-3">{section.title}</h2>
              <div className="flex gap-3 overflow-x-auto pb-2">
                {section.items.map((item) => (
                  <button
                    key={item.id}
                    className="relative w-40 h-24 md:w-52 md:h-32 flex-shrink-0 rounded-md bg-zinc-900 border border-zinc-800 overflow-hidden hover:border-red-600 hover:-translate-y-1 transition-all duration-150"
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <span className="absolute bottom-2 left-2 text-[11px] text-zinc-200 font-medium">
                      {item.title}
                    </span>
                    {item.tag && (
                      <span className="absolute top-2 left-2 text-[10px] px-2 py-0.5 rounded-full bg-red-600/80 text-white">
                        {item.tag}
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </section>
          ))}
        </main>
      </div>

      {/* DevOps footer (D) */}
      <footer className="border-t border-zinc-800 bg-black/80 px-8 py-3 text-[11px] text-zinc-500 flex flex-wrap gap-4 justify-between">
        <span>Region: eu-west-1 · Environment: dev-local</span>
        <span>Build: v0.1.0 · Deploy: GitHub Actions (planned)</span>
      </footer>
    </div>
  );
}
