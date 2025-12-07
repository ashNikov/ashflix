export type MovieItem = {
  id: string;
  title: string;
  tag?: string;
};

export type MovieSection = {
  id: string;
  title: string;
  items: MovieItem[];
};

export const movieSections: MovieSection[] = [
  {
    id: "continue-watching",
    title: "Continue Watching",
    items: [
      { id: "cw-1", title: "FootyIQ: The Engine", tag: "DevOps" },
      { id: "cw-2", title: "AshFlix: Helix Origin", tag: "Original" },
      { id: "cw-3", title: "Lambda Wars", tag: "Serverless" },
      { id: "cw-4", title: "Cluster Drift", tag: "Kubernetes" },
    ],
  },
  {
    id: "trending",
    title: "Trending Now",
    items: [
      { id: "tr-1", title: "Secrets of Terraform", tag: "IaC" },
      { id: "tr-2", title: "API Gateway Nights", tag: "API" },
      { id: "tr-3", title: "Dynamo Streams", tag: "Database" },
      { id: "tr-4", title: "Zero Downtime", tag: "SRE" },
    ],
  },
  {
    id: "originals",
    title: "AshFlix Originals",
    items: [
      { id: "og-1", title: "Helix Ident", tag: "Brand" },
      { id: "og-2", title: "DevSecOps Playbook", tag: "Security" },
      { id: "og-3", title: "ProphecyForge Chronicles", tag: "AI" },
      { id: "og-4", title: "FootyIQ Probability", tag: "Analytics" },
    ],
  },
  {
    id: "prophecy",
    title: "Prophecy & End-Times",
    items: [
      { id: "pr-1", title: "Sealed Gates of Zion", tag: "Prophecy" },
      { id: "pr-2", title: "Ten Kings Protocol", tag: "End Times" },
      { id: "pr-3", title: "Watchman Signals", tag: "Documentary" },
      { id: "pr-4", title: "Jerusalem Files", tag: "History" },
    ],
  },
  {
    id: "ai-curated",
    title: "Recommended For You (AI Curated)",
    items: [
      { id: "ai-1", title: "Embedding Realities", tag: "AI" },
      { id: "ai-2", title: "Vector Streams", tag: "Search" },
      { id: "ai-3", title: "Recommender Grid", tag: "ML" },
      { id: "ai-4", title: "Signal-to-Noise", tag: "Analytics" },
    ],
  },
];
