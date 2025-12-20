import { Router } from "express";

const router = Router();

function buildSections() {
  return [
    {
      id: "prophecy-end-times",
      title: "Prophecy & End-Times",
      items: [
        { id: "sealed-gates", title: "Sealed Gates of Zion", tag: "Prophecy" },
        { id: "ten-kings", title: "Ten Kings Protocol", tag: "End Times" },
        {
          id: "watchman-signals",
          title: "Watchman Signals",
          tag: "Documentary",
        },
        { id: "jerusalem-files", title: "Jerusalem Files", tag: "History" },
      ],
    },
    {
      id: "ai-curated",
      title: "Recommended For You (AI Curated)",
      items: [
        {
          id: "embedding-realities",
          title: "Embedding Realities",
          tag: "AI",
        },
        {
          id: "vector-streams",
          title: "Vector Streams",
          tag: "Search",
        },
        {
          id: "recommender-grid",
          title: "Recommender Grid",
          tag: "ML",
        },
        {
          id: "signal-to-noise",
          title: "Signal-to-Noise",
          tag: "Analytics",
        },
      ],
    },
    {
      id: "devops-originals",
      title: "DevOps Originals",
      items: [
        {
          id: "footyiq-engine",
          title: "FootyIQ: The Engine",
          tag: "Serverless",
        },
        {
          id: "ashflix-helix-origin",
          title: "AshFlix: Helix Origin",
          tag: "Kubernetes",
        },
        {
          id: "lambda-wars",
          title: "Lambda Wars",
          tag: "Lambda",
        },
        {
          id: "cluster-drift",
          title: "Cluster Drift",
          tag: "K8s",
        },
      ],
    },
    {
      id: "infra-observability",
      title: "AshFlix Infrastructure (Demo)",
      items: [
        {
          id: "edge-cdn",
          title: "Edge CDN Heatmap",
          tag: "CloudFront",
        },
        {
          id: "error-budget",
          title: "SLO & Error Budget",
          tag: "SRE",
        },
        {
          id: "pipeline-viz",
          title: "CI/CD Pipeline View",
          tag: "GitHub Actions",
        },
        {
          id: "runtime-guardrails",
          title: "Runtime Guardrails",
          tag: "DevSecOps",
        },
      ],
    },
  ];
}

// ✅ Main endpoint the UI calls: GET /api/catalog
router.get("/", (_req, res) => {
  const sections = buildSections();
  return res.json({ sections });
});

// ✅ Keep old endpoint too: GET /api/catalog/sections
router.get("/sections", (_req, res) => {
  const sections = buildSections();
  return res.json({
    service: "AshFlix Catalog",
    region: "eu-west-1",
    poweredBy: "UWEM",
    sections,
  });
});

export default router;
