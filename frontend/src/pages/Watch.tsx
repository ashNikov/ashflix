import React from "react";
import { useNavigate } from "react-router-dom";

export default function Watch() {
  const navigate = useNavigate();

  // Primary local demo source (if you copy a file into public/demo)
  const localDemoSrc = "/demo/ashflix-demo.mp4";

  // Backup remote demo stream (small sample clip)
  const fallbackDemoSrc =
    "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4";

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-zinc-950 to-black text-white flex flex-col">
      {/* Top nav */}
      <header className="flex items-center justify-between px-6 md:px-10 py-4 border-b border-red-900/40 bg-black/70 backdrop-blur sticky top-0 z-20">
        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate("/browse")}
            className="flex items-center gap-2 group"
          >
            <div className="w-9 h-9 rounded-md bg-black border border-red-600 flex items-center justify-center">
              <span className="text-red-600 font-extrabold text-lg">AF</span>
            </div>
            <span className="text-lg md:text-xl font-semibold tracking-wide group-hover:text-red-400 transition-colors">
              AshFlix
            </span>
          </button>
        </div>

        <div className="flex items-center gap-4 text-xs text-zinc-300">
          <span className="hidden sm:inline text-zinc-400">
            Streaming · DevSecOps Demo
          </span>
          <div className="w-8 h-8 rounded-full bg-zinc-800 border border-zinc-600" />
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1 px-4 md:px-10 py-6 grid gap-8 lg:grid-cols-[minmax(0,2.1fr)_minmax(0,1fr)]">
        {/* Video player */}
        <section className="space-y-4">
          <div className="w-full rounded-2xl overflow-hidden border border-red-900/60 bg-black/60 shadow-[0_0_40px_rgba(248,113,113,0.35)]">
            <div className="relative w-full pb-[56.25%] bg-black">
              <video
                className="absolute inset-0 w-full h-full object-cover"
                controls
                autoPlay
                muted
                // Try local demo first, then fall back to remote sample
                src={localDemoSrc}
                onError={(e) => {
                  const video = e.currentTarget;
                  if (video.src !== fallbackDemoSrc) {
                    video.src = fallbackDemoSrc;
                    video.play().catch(() => undefined);
                  }
                }}
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          {/* Title + meta */}
          <div className="space-y-2">
            <h1 className="text-xl md:text-2xl font-semibold">
              AshFlix DevOps Stream · Demo Playback
            </h1>
            <p className="text-xs md:text-sm text-zinc-400 max-w-2xl">
              This screen simulates a real streaming session powered by your
              own backend and infrastructure. Later, this player can be wired
              to real assets in S3, CloudFront, or a Kubernetes cluster.
            </p>

            <div className="flex flex-wrap gap-2 text-[11px] md:text-xs text-zinc-300">
              <span className="px-2 py-0.5 rounded-full bg-red-600/80 text-white">
                UWEM · DevSecOps
              </span>
              <span className="px-2 py-0.5 rounded-full bg-zinc-800 border border-zinc-600">
                4K · Dolby-ish 🤫
              </span>
              <span className="px-2 py-0.5 rounded-full bg-zinc-800 border border-zinc-600">
                Demo Stream · Non-production
              </span>
            </div>
          </div>
        </section>

        {/* Stream + DevOps sidebar */}
        <aside className="space-y-4">
          <div className="rounded-2xl border border-zinc-800 bg-black/60 px-4 py-4">
            <h2 className="text-sm font-semibold mb-2">Stream Details</h2>
            <dl className="space-y-1 text-xs text-zinc-300">
              <div className="flex justify-between">
                <dt className="text-zinc-500">Title</dt>
                <dd className="text-right">“AshFlix: Helix Intro Demo”</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-zinc-500">Profile</dt>
                <dd className="text-right">UWEM · Owner</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-zinc-500">Source</dt>
                <dd className="text-right">Local /demo or sample URL</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-zinc-500">Playback</dt>
                <dd className="text-right">HTML5 Player</dd>
              </div>
            </dl>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-black/60 px-4 py-4">
            <h2 className="text-sm font-semibold mb-2">DevOps Telemetry (Mock)</h2>
            <div className="grid grid-cols-2 gap-3 text-xs text-zinc-300">
              <div className="space-y-0.5">
                <p className="text-zinc-500">Region</p>
                <p className="font-medium">eu-west-1</p>
              </div>
              <div className="space-y-0.5">
                <p className="text-zinc-500">Environment</p>
                <p className="font-medium">dev-local</p>
              </div>
              <div className="space-y-0.5">
                <p className="text-zinc-500">Latency</p>
                <p className="font-medium">&lt; 40 ms (mock)</p>
              </div>
              <div className="space-y-0.5">
                <p className="text-zinc-500">Edge POP</p>
                <p className="font-medium">LHR50 (simulated)</p>
              </div>
              <div className="space-y-0.5">
                <p className="text-zinc-500">Status</p>
                <p className="font-medium text-emerald-400">
                  Healthy · 200 OK
                </p>
              </div>
              <div className="space-y-0.5">
                <p className="text-zinc-500">Stream ID</p>
                <p className="font-medium truncate">
                  ashflix-demo-stream-uwem
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-red-900/60 bg-black/70 px-4 py-3 text-[11px] text-zinc-300">
            <p className="mb-1">
              <span className="text-red-400 font-semibold">Powered by UWEM</span>{" "}
              · This page will later be wired to real infra: S3, CloudFront,
              Lambda or Kubernetes, plus full DevSecOps pipeline.
            </p>
            <p className="text-zinc-500">
              For now, it acts as a cinematic demo to show recruiters how you
              think about streaming + observability.
            </p>
          </div>
        </aside>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-800 bg-black/80 px-6 md:px-10 py-3 text-[11px] text-zinc-500 flex flex-wrap gap-4 justify-between">
        <span>Region: eu-west-1 · Environment: dev-local</span>
        <span>AshFlix Watch · Built &amp; Powered by UWEM</span>
      </footer>
    </div>
  );
}

