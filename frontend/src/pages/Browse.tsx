import BackendDebugPanel from "../components/BackendDebugPanel";
import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import MovieDetailsModal from "../components/MovieDetailsModal";
import { getBackendStatus, getCatalogSections } from "../api/client";

type MovieItem = {
  id: string;
  title: string;
  tag?: string;
};

type SelectedMovie = {
  sectionTitle: string;
  item: MovieItem;
};

type CatalogSection = {
  id: string;
  title: string;
  items: MovieItem[];
};

// --- env helpers (Vite) ---
const MODE = import.meta.env.MODE; // "development" | "production" | "test"
const IS_PROD = MODE === "production";
const ENV_LABEL = IS_PROD ? "production" : "dev-local";

function safeHost(urlLike: string | undefined) {
  if (!urlLike) return "unknown";
  try {
    const u = new URL(urlLike);
    return u.host;
  } catch {
    // maybe it is already a host
    return urlLike.replace(/^https?:\/\//, "").replace(/\/+$/, "");
  }
}

const BACKEND_URL = (import.meta.env.VITE_BACKEND_URL as string | undefined) || "";
const BACKEND_HOST = safeHost(BACKEND_URL);

export default function Browse() {
  const [selected, setSelected] = useState<SelectedMovie | null>(null);
  const [backendStatus, setBackendStatus] = useState<any | null>(null);
  const [sections, setSections] = useState<CatalogSection[]>([]);
  const [catalogError, setCatalogError] = useState<string | null>(null);
  const [showAuth, setShowAuth] = useState(false);

  const navigate = useNavigate();

  // Single audio instance for Àh-boom
  const boomRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // prepare boom audio (served from public root by Vite/NGINX)
    boomRef.current = new Audio("/ah-boom.wav");
    if (boomRef.current) {
      boomRef.current.volume = 0.9;
    }

    // check backend health
    getBackendStatus().then(setBackendStatus);

    // fetch catalog sections from backend (NO local fallback)
    getCatalogSections()
      .then((data) => {
        if (data && Array.isArray(data.sections) && data.sections.length > 0) {
          setSections(data.sections as any);
          setCatalogError(null);
          return;
        }

        setSections([]);
        setCatalogError(
          "Catalog API no return data. Abeg confirm backend dey run and /api/catalog dey work."
        );
      })
      .catch(() => {
        setSections([]);
        setCatalogError("Catalog API fail. Check backend, CORS, and VITE_BACKEND_URL.");
      });
  }, []);

  const handlePlayDemo = () => {
    // play Àh-boom, then navigate to watch page
    if (boomRef.current) {
      try {
        boomRef.current.currentTime = 0;
        boomRef.current.play().catch(() => {
          // ignore autoplay / user gesture errors
        });
      } catch {
        // ignore
      }
    }

    navigate("/watch");
  };

  // Loading / Error screen (when no sections yet)
  if (!sections || sections.length === 0) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center text-zinc-400 py-20 max-w-xl px-6">
          {!catalogError ? (
            <div>Loading catalog from backend...</div>
          ) : (
            <>
              <div className="text-red-400 font-semibold mb-2">
                Backend catalog connection problem
              </div>
              <div className="text-zinc-400 text-sm">{catalogError}</div>

              <div className="mt-6 text-xs text-zinc-500 space-y-1">
                <div>Quick checks:</div>
                <div>- Backend: http://localhost:5001/health</div>
                <div>- Catalog: http://localhost:5001/api/catalog</div>
                <div>- Frontend env: VITE_BACKEND_URL</div>
                <div>
                  - Current MODE: <span className="text-zinc-300">{MODE}</span>
                </div>
              </div>

              <div className="mt-6">
                <button
                  onClick={() => window.location.reload()}
                  className="inline-flex items-center gap-2 rounded-md bg-zinc-800 text-white px-4 py-2 font-semibold border border-zinc-600 hover:bg-zinc-700 transition-colors text-sm"
                >
                  🔄 Reload
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-zinc-950 to-black text-white flex flex-col">
      {/* Top nav */}
      <header className="flex items-center justify-between px-8 py-4 border-b border-red-900/40 bg-black/60 backdrop-blur sticky top-0 z-20">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-md bg-black border border-red-600 flex items-center justify-center">
            <span className="text-red-600 font-extrabold text-lg">AF</span>
          </div>
          <span className="text-xl font-semibold tracking-wide">AshFlix</span>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm text-zinc-300">
          <button className="hover:text-white transition-colors">Home</button>
          <button className="hover:text-white transition-colors">Series</button>
          <button className="hover:text-white transition-colors">Films</button>
          <button className="hover:text-white transition-colors">New &amp; Hot</button>
        </nav>

        <div className="flex items-center gap-3 text-xs text-zinc-300">
          <button
            onClick={() => setShowAuth(true)}
            className="px-3 py-1 rounded-md border border-red-600/70 bg-black/40 hover:bg-red-600 hover:text-white transition-colors text-[11px] font-semibold"
          >
            Sign In
          </button>
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
              Powered by <span className="text-red-500 font-semibold">UWEM</span>
            </p>
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Where cinematic streams meet intelligent automation.
            </h1>
            <p className="text-sm md:text-base text-zinc-300 max-w-xl mb-6">
              This dashboard simulates a real streaming control center. Each row is backed by API
              data and can later be wired to real streams, AI-powered recommendations and
              observability.
            </p>
            <div className="flex flex-wrap gap-3 text-sm">
              <button
                onClick={handlePlayDemo}
                className="inline-flex items-center gap-2 rounded-md bg-white text-black px-4 py-2 font-semibold hover:bg-zinc-200 transition-colors"
              >
                ▶ Play Demo Stream
              </button>
              <button
                onClick={() => setShowAuth(true)}
                className="inline-flex items-center gap-2 rounded-md bg-zinc-800 text-white px-4 py-2 font-semibold border border-zinc-600 hover:bg-zinc-700 transition-colors"
              >
                🔐 Open Auth Panel
              </button>
            </div>
          </div>
        </section>

        {/* Rows (driven by backend sections) */}
        <main className="space-y-8 pb-10">
          {sections.map((section: any, index: number) => (
            <motion.section
              key={section.id}
              className="px-8"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.4,
                delay: index * 0.05,
                ease: "easeOut",
              }}
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
                    onClick={() => setSelected({ sectionTitle: section.title, item })}
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

        {/* DevOps backend debug panel */}
        <section className="px-8 pb-6">
          <BackendDebugPanel />
        </section>
      </div>

      {/* DevOps footer with backend status */}
      <footer className="border-t border-zinc-800 bg-black/80 px-8 py-3 text-[11px] text-zinc-500 flex flex-wrap gap-4 justify-between">
        <span>
          Region: eu-west-1 · Environment: {ENV_LABEL}
          {IS_PROD && BACKEND_HOST !== "unknown" ? (
            <>
              {" "}
              · Backend: <span className="text-zinc-300">{BACKEND_HOST}</span>
            </>
          ) : null}
        </span>

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

      {/* Auth slide-over panel */}
      {showAuth && (
        <div className="fixed inset-0 z-30 flex">
          <button
            className="flex-1 bg-black/60 backdrop-blur-sm"
            onClick={() => setShowAuth(false)}
          />
          <div className="w-full max-w-md bg-zinc-950 border-l border-red-900/50 px-6 py-6 flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-sm font-semibold">
                Sign in to <span className="text-red-500">AshFlix</span>
              </h2>
              <button
                onClick={() => setShowAuth(false)}
                className="text-zinc-400 hover:text-white text-xs"
              >
                ✕ Close
              </button>
            </div>

            <p className="text-xs text-zinc-400 mb-4">
              This is a demo authentication panel. Later, it can be wired to real identity (Cognito,
              JWT, or a custom auth service) as part of your DevSecOps pipeline.
            </p>

            <form
              className="space-y-3 text-xs"
              onSubmit={(e) => {
                e.preventDefault();
                alert("Demo only – real auth coming in DevSecOps phase.");
              }}
            >
              <div className="space-y-1">
                <label className="block text-zinc-400">Email</label>
                <input
                  type="email"
                  className="w-full rounded-md bg-black border border-zinc-700 px-2 py-1.5 text-xs focus:outline-none focus:ring-1 focus:ring-red-500"
                  placeholder="uwem@example.com"
                />
              </div>

              <div className="space-y-1">
                <label className="block text-zinc-400">Password</label>
                <input
                  type="password"
                  className="w-full rounded-md bg-black border border-zinc-700 px-2 py-1.5 text-xs focus:outline-none focus:ring-1 focus:ring-red-500"
                  placeholder="••••••••"
                />
              </div>

              <button
                type="submit"
                className="w-full mt-2 rounded-md bg-red-600 text-white py-2 text-xs font-semibold hover:bg-red-500 transition-colors"
              >
                Sign in (Demo)
              </button>

              <p className="text-[10px] text-zinc-500 mt-2">
                For portfolio purposes only. No real credentials are sent anywhere.
              </p>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
