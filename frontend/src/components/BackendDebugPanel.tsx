// frontend/src/components/BackendDebugPanel.tsx

import { useEffect, useState } from "react";
import { getBackendStatus, getCatalogSections } from "../api/client";

type LoadState = "idle" | "loading" | "success" | "error";

// Local type definitions (to match what the backend returns)
type HealthResponse = {
  service: string;
  status: string;
  region: string;
  poweredBy: string;
  uptimeSeconds: number;
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
  sections: CatalogSection[];
};

export default function BackendDebugPanel() {
  const [state, setState] = useState<LoadState>("idle");
  const [health, setHealth] = useState<HealthResponse | null>(null);
  const [catalog, setCatalog] = useState<CatalogResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function run() {
      try {
        setState("loading");
        const [h, c] = await Promise.all([
          getBackendStatus(),
          getCatalogSections(),
        ]);
        setHealth(h);
        setCatalog(c);
        setState("success");
      } catch (err: any) {
        console.error("Backend debug error:", err);
        setError(err?.message || "Unknown error");
        setState("error");
      }
    }

    run();
  }, []);

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
          <div>Service: {health.service}</div>
          <div>Status: {health.status}</div>
          <div>Region: {health.region}</div>
          <div>Powered by: {health.poweredBy}</div>
          <div>Uptime (s): {health.uptimeSeconds}</div>
        </div>
      )}

      {catalog && (
        <div style={{ marginTop: "0.75rem" }}>
          <div>Sections from backend: {catalog.sections.length}</div>
          <ul style={{ marginTop: "0.25rem", paddingLeft: "1.2rem" }}>
            {catalog.sections.slice(0, 3).map((s) => (
              <li key={s.id}>
                {s.title} ({s.items.length} items)
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

