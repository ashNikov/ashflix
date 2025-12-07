import React from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: replace with real auth later
    navigate("/browse");
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-black flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-black/70 border border-red-700/40 rounded-2xl p-8 shadow-2xl shadow-red-900/40 backdrop-blur">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-md bg-black border border-red-600 flex items-center justify-center">
            <span className="text-red-600 font-extrabold text-xl">AF</span>
          </div>
          <div>
            <h1 className="text-2xl font-semibold text-white">AshFlix</h1>
            <p className="text-xs text-zinc-400">AI Streaming SaaS · DevSecOps Demo</p>
          </div>
        </div>

        <h2 className="text-lg font-medium text-white mb-2">
          Sign in to continue
        </h2>
        <p className="text-xs text-zinc-400 mb-6">
          Use any username & password for now. We’ll wire real auth later.
        </p>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-xs text-zinc-300 mb-1">
              Username or email
            </label>
            <input
              className="w-full rounded-md bg-zinc-900/80 border border-zinc-700 px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
              placeholder="ashnikov@example.com"
              required
            />
          </div>

          <div>
            <label className="block text-xs text-zinc-300 mb-1">
              Password
            </label>
            <input
              type="password"
              className="w-full rounded-md bg-zinc-900/80 border border-zinc-700 px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
              placeholder="••••••••"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full mt-2 inline-flex justify-center items-center rounded-md bg-red-600 hover:bg-red-700 transition-colors px-3 py-2 text-sm font-semibold text-white shadow-lg shadow-red-900/40"
          >
            Sign In
          </button>

          <p className="text-[11px] text-zinc-500 text-center pt-2">
            This is a demo AshFlix account flow. In the real app, this will be
            backed by secure auth + tokens.
          </p>
        </form>
      </div>
    </div>
  );
}
