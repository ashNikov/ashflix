// src/api/client.ts

const BASE_URL =
  import.meta.env.VITE_BACKEND_URL || "http://localhost:5001";

export type BackendStatus = {
  service: string;
  status: string;
  region: string;
  poweredBy: string;
  uptimeSeconds?: number;
};

export type CatalogItem = {
  id: string;
  title: string;
  tag?: string;
};

export type CatalogSection = {
  id: string;
  title: string;
  items: CatalogItem[];
};

export type CatalogResponse = {
  sections: CatalogSection[];
};

async function safeFetch<T>(path: string): Promise<T | null> {
  try {
    const res = await fetch(`${BASE_URL}${path}`);
    if (!res.ok) {
      console.warn(`AshFlix API ${path} returned`, res.status);
      return null;
    }
    return (await res.json()) as T;
  } catch (err) {
    console.warn(`AshFlix API ${path} error`, err);
    return null;
  }
}

export async function getBackendStatus(): Promise<BackendStatus | null> {
  // you can also point this to /health if you prefer
  return safeFetch<BackendStatus>("/health");
}

export async function getCatalogSections(): Promise<CatalogResponse | null> {
  return safeFetch<CatalogResponse>("/api/catalog");
}

