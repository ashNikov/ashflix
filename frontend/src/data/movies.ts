export type MovieItem = {
  id: string;
  title: string;
  tag?: string;
  description?: string;
  year?: number;
  rating?: string;
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
      {
        id: "cw-1",
        title: "FootyIQ: The Engine",
        tag: "DevOps",
        year: 2024,
        rating: "PG",
        description:
          "Go behind the scenes of FootyIQ, an AI-powered football prediction engine running on serverless AWS.",
      },
      {
        id: "cw-2",
        title: "AshFlix: Helix Origin",
        tag: "Original",
        year: 2025,
        rating: "PG-13",
        description:
          "The creation story of AshFlix — from a blank repo to a cinematic, AI-driven streaming SaaS.",
      },
      {
        id: "cw-3",
        title: "Lambda Wars",
        tag: "Serverless",
        year: 2023,
        rating: "PG-13",
        description:
          "Microservices battle for cold start supremacy in this tongue-in-cheek serverless thriller.",
      },
      {
        id: "cw-4",
        title: "Cluster Drift",
        tag: "Kubernetes",
        year: 2022,
        rating: "PG-13",
        description:
          "An ops team races against time to tame a runaway Kubernetes cluster in production.",
      },
    ],
  },
  {
    id: "trending",
    title: "Trending Now",
    items: [
      {
        id: "tr-1",
        title: "Secrets of Terraform",
        tag: "IaC",
        year: 2021,
        rating: "PG",
        description:
          "Infrastructure-as-code drama where a single misplaced bracket can take down a region.",
      },
      {
        id: "tr-2",
        title: "API Gateway Nights",
        tag: "API",
        year: 2020,
        rating: "PG",
        description:
          "Stories from the edge — requests, rate limits, and the art of resilient API design.",
      },
      {
        id: "tr-3",
        title: "Dynamo Streams",
        tag: "Database",
        year: 2024,
        rating: "PG-13",
        description:
          "High-speed data flows and event-driven architectures collide in this NoSQL thriller.",
      },
      {
        id: "tr-4",
        title: "Zero Downtime",
        tag: "SRE",
        year: 2019,
        rating: "PG",
        description:
          "An SRE team fights to maintain five nines of uptime during a global traffic spike.",
      },
    ],
  },
  {
    id: "originals",
    title: "AshFlix Originals",
    items: [
      {
        id: "og-1",
        title: "Helix Ident",
        tag: "Brand",
        year: 2025,
        rating: "PG",
        description:
          "The iconic AshFlix Helix Ident you just saw — from concept sketch to booming intro.",
      },
      {
        id: "og-2",
        title: "DevSecOps Playbook",
        tag: "Security",
        year: 2023,
        rating: "PG-13",
        description:
          "A deep dive into securing CI/CD pipelines, containers, and cloud-native workloads.",
      },
      {
        id: "og-3",
        title: "ProphecyForge Chronicles",
        tag: "AI",
        year: 2024,
        rating: "PG-13",
        description:
          "How ProphecyForge-AI turns prompts into cinematic prophetic content at scale.",
      },
      {
        id: "og-4",
        title: "FootyIQ Probability",
        tag: "Analytics",
        year: 2024,
        rating: "PG",
        description:
          "Visualizing edges, odds, and risk profiles inside an AI-powered match dashboard.",
      },
    ],
  },
  {
    id: "prophecy",
    title: "Prophecy & End-Times",
    items: [
      {
        id: "pr-1",
        title: "Sealed Gates of Zion",
        tag: "Prophecy",
        year: 2023,
        rating: "PG-13",
        description:
          "A documentary-style exploration of prophetic signs at the gates of Jerusalem.",
      },
      {
        id: "pr-2",
        title: "Ten Kings Protocol",
        tag: "End Times",
        year: 2024,
        rating: "PG-13",
        description:
          "End-times geopolitics reimagined as a high-stakes diplomatic thriller.",
      },
      {
        id: "pr-3",
        title: "Watchman Signals",
        tag: "Documentary",
        year: 2022,
        rating: "PG",
        description:
          "Signals, patterns, and prophetic warnings presented in a cinematic style.",
      },
      {
        id: "pr-4",
        title: "Jerusalem Files",
        tag: "History",
        year: 2021,
        rating: "PG",
        description:
          "Historical and prophetic threads woven together around the city of Jerusalem.",
      },
    ],
  },
  {
    id: "ai-curated",
    title: "Recommended For You (AI Curated)",
    items: [
      {
        id: "ai-1",
        title: "Embedding Realities",
        tag: "AI",
        year: 2024,
        rating: "PG",
        description:
          "A visual explanation of vector embeddings and semantic search powering recommendations.",
      },
      {
        id: "ai-2",
        title: "Vector Streams",
        tag: "Search",
        year: 2023,
        rating: "PG-13",
        description:
          "Follow data points as they travel through an AI-powered recommendation engine.",
      },
      {
        id: "ai-3",
        title: "Recommender Grid",
        tag: "ML",
        year: 2022,
        rating: "PG",
        description:
          "Machine learning models compete to predict what you’ll click next.",
      },
      {
        id: "ai-4",
        title: "Signal-to-Noise",
        tag: "Analytics",
        year: 2021,
        rating: "PG",
        description:
          "Cutting through noise to surface only the most relevant, high-signal content.",
      },
    ],
  },
];

