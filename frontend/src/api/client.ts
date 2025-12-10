const API_BASE = "http://localhost:5001";

export async function getBackendStatus() {
  try {
    const res = await fetch(`${API_BASE}/`);
    return await res.json();
  } catch (err) {
    return { error: true, message: "Backend unreachable" };
  }
}

export async function getCatalogSections() {
  try {
    const res = await fetch(`${API_BASE}/api/catalog/sections`);
    return await res.json();
  } catch (err) {
    return { error: true, message: "Catalog API unreachable" };
  }
}

