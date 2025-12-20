import { useEffect, useState } from "react";
import { getBackendStatus, getCatalogSections } from "../api/client";

type LoadState = "idle" | "loading" | "success" | "error";

type HealthResponse = {
  service?: string;
  status?: string;
  region?: string;
  poweredBy?: string;
  uptimeSeconds?: number;
};

type CatalogItem = {
  id: string;
  title: string;
  tag?: string;
};

type CatalogSection = {
  id: string;
  title: string;
  items: CatalogItem[];
};

type CatalogResponse = {
  sections?: CatalogSection[];
};

export default function BackendDebugPanel() {
  const [state, setState] = useState<LoadState>("idle");
  const [health, setHealth] = useState<HealthResponse | null>(null);
  const [catalog, setCatalog] = useState<CatalogResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;

    async function run() {
      try {
        setState("loading");

        const [h, c] = await Promise.all([
          getBackendStatus(),
          getCatalogSections(),
        ]);

        if (!mounted) return;

        setHealth((h ?? null) as HealthResponse | null);
        setCatalog((c ?? null) as CatalogResponse | null);
        setError(null);
        setState("success");
      } catch (err: unknown) {
        console.error("Backend debug error:", err);
        if (!mounted) return;

        const msg =
          err instanceof Error ? err.message : "Unknown error (check logs)";
        setError(msg);
        setState("error");
      }
    }

    run();
    return () => {
      mounted = false;
    };
  }, []);

  const sections = catalog?.sections ?? [];

  return (
    <div
      style={{
        marginTop: "2rem",
        padding: "1rem",
        borderRadius: "0.75rem",
        background: "#111827",
        color: "#e5e7eb",
        fontSize: "0.85rem",
      }}
    >
      <strong>Backend connection debug</strong>

      <div style={{ marginTop: "0.5rem" }}>
        State:{" "}
        <span
          style={{
            color:
              state === "success"
                ? "#22c55e"
                : state === "error"
                ? "#ef4444"
                : "#e5e7eb",
          }}
        >
          {state}
        </span>
      </div>

      {error && (
        <div style={{ marginTop: "0.5rem", color: "#f97316" }}>
          Error: {error}
        </div>
      )}

      {health && (
        <div style={{ marginTop: "0.5rem" }}>
          {health.service && <div>Service: {health.service}</div>}
          {health.status && <div>Status: {health.status}</div>}
          {health.region && <div>Region: {health.region}</div>}
          {health.poweredBy && <div>Powered by: {health.poweredBy}</div>}
          {typeof health.uptimeSeconds === "number" && (
            <div>Uptime (s): {health.uptimeSeconds}</div>
          )}
        </div>
      )}

      <div style={{ marginTop: "0.75rem" }}>
        <div>Sections from backend: {sections.length}</div>

        {sections.length > 0 && (
          <ul style={{ marginTop: "0.25rem", paddingLeft: "1.2rem" }}>
            {sections.slice(0, 3).map((s) => (
              <li key={s.id}>
                {s.title} ({s.items?.length ?? 0} items)
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
