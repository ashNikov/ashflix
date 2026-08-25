import { motion } from "framer-motion";
import type { MovieItem } from "../data/movies";

type MovieDetailsModalProps = {
  sectionTitle: string;
  item: MovieItem;
  onClose: () => void;
};

export default function MovieDetailsModal({
  sectionTitle,
  item,
  onClose,
}: MovieDetailsModalProps) {
  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/70 backdrop-blur-sm">
      {/* Clickable backdrop */}
      <button
        className="absolute inset-0 w-full h-full cursor-default"
        onClick={onClose}
      />

      <motion.div
        className="relative z-50 w-full max-w-lg rounded-2xl bg-zinc-950 border border-red-700/40 shadow-2xl shadow-red-900/40 overflow-hidden"
        initial={{ opacity: 0, y: 30, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.96 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
      >
        {/* Header strip */}
        <div className="px-5 py-3 border-b border-zinc-800 flex items-center justify-between bg-gradient-to-r from-red-900/60 via-black to-zinc-900">
          <div className="flex flex-col">
            <span className="text-[11px] uppercase tracking-[0.25em] text-red-300">
              {sectionTitle}
            </span>
            <span className="text-xs text-zinc-400">AshFlix · Detail View</span>
          </div>
          <button
            onClick={onClose}
            className="text-zinc-400 hover:text-white text-sm px-2 py-1 rounded-md hover:bg-zinc-800/80"
          >
            ✕
          </button>
        </div>

        {/* Content */}
        <div className="px-5 py-4 space-y-4">
          <div>
            <h2 className="text-xl font-semibold text-white mb-1">
              {item.title}
            </h2>
            <div className="flex flex-wrap items-center gap-2 text-[11px] text-zinc-400">
              {item.year && <span>{item.year}</span>}
              {item.rating && (
                <span className="px-1.5 py-0.5 rounded border border-zinc-600 text-[10px]">
                  {item.rating}
                </span>
              )}
              {item.tag && (
                <span className="px-2 py-0.5 rounded-full bg-red-700/80 text-[10px] text-white">
                  {item.tag}
                </span>
              )}
            </div>
          </div>

          <p className="text-sm text-zinc-300">
            {item.description ??
              "This is a cinematic AshFlix placeholder description. In a full version, this would be pulled from a catalog service or content API."}
          </p>

          <div className="flex flex-wrap gap-3 pt-1">
            <button className="inline-flex items-center gap-2 rounded-md bg-white text-black px-4 py-2 text-sm font-semibold hover:bg-zinc-200 transition-colors">
              ▶ Play Demo Stream
            </button>
            <button className="inline-flex items-center gap-2 rounded-md bg-zinc-800 text-white px-3 py-1.5 text-xs font-medium border border-zinc-600 hover:bg-zinc-700 transition-colors">
              ⓘ View Technical Details
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="px-5 py-3 border-t border-zinc-800 text-[11px] text-zinc-500 flex justify-between">
          <span>AshFlix · AI Streaming SaaS</span>
          <span>Powered by UWEM</span>
        </div>
      </motion.div>
    </div>
  );
}

