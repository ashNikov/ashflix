import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="max-w-xl w-full text-center">
        <div className="mx-auto w-12 h-12 rounded-md bg-black border border-red-600 flex items-center justify-center mb-4">
          <span className="text-red-600 font-extrabold text-lg">AF</span>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold mb-3">AshFlix</h1>
        <p className="text-sm text-zinc-300 mb-6">
          Demo streaming dashboard wey go later turn full DevSecOps/AWS deployment.
        </p>

        <button
          onClick={() => navigate("/browse")}
          className="inline-flex items-center gap-2 rounded-md bg-white text-black px-5 py-2 font-semibold hover:bg-zinc-200 transition-colors"
        >
          ▶ Enter Browse
        </button>
      </div>
    </div>
  );
}
