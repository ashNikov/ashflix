import express, { Request, Response } from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

type MovieItem = {
  id: string;
  title: string;
  tag?: string;
  description?: string;
  year?: number;
  rating?: string;
};

type MovieSection = {
  id: string;
  title: string;
  items: MovieItem[];
};

// Simple in-memory catalog (mirrors what we show on the browse page)
const sections: MovieSection[] = [
  {
    id: "continue-watching",
    title: "Continue Watching",
    items: [
      {
        id: "cw-footyiq",
        title: "FootyIQ: The Engine",
        tag: "DevOps",
        year: 2024,
        rating: "PG",
        description:
          "Behind the scenes of FootyIQ, an AI-powered football prediction engine running on serverless AWS."
      },
      {
        id: "cw-ashflix-origin",
        title: "AshFlix: Helix Origin",
        tag: "Original",
        year: 2025,
        rating: "PG-13",
        description:
          "The creation story of AshFlix — from blank repo to cinematic, AI-driven streaming SaaS."
      },
      {
        id: "cw-lambda-wars",
        title: "Lambda Wars",
        tag: "Serverless",
        year: 2023,
        rating: "PG-13",
        description:
          "Blue team vs red team: who secures their Lambda workloads better?"
      }
    ]
  },
  {
    id: "trending-now",
    title: "Trending Now",
    items: [
      {
        id: "tn-cluster-drift",
        title: "Cluster Drift",
        tag: "Kubernetes",
        year: 2022,
        rating: "PG-13",
        description:
          "A thriller about misconfigured clusters, runaway pods, and the DevOps team trying to save production."
      },
      {
        id: "tn-terraform-state",
        title: "Terraform State of Mind",
        tag: "IaC",
        year: 2021,
        rating: "PG",
        description:
          "What happens when your state files go missing? A cautionary tale for cloud engineers."
      }
    ]
  },
  {
    id: "devsecops-picks",
    title: "DevSecOps Picks for UWEM",
    items: [
      {
        id: "dp-pipeline-guardian",
        title: "Pipeline Guardian",
        tag: "Security",
        year: 2023,
        rating: "PG-13",
        description:
          "Static analysis, container scanning, and one engineer determined to ship secure software."
      },
      {
        id: "dp-observability",
        title: "Signals in the Dark",
        tag: "Observability",
        year: 2020,
        rating: "PG",
        description:
          "Logs, metrics, traces — and the dashboards that keep AshFlix running at scale."
      }
    ]
  }
];

// Root health check
app.get("/", (_req: Request, res: Response) => {
  res.json({
    service: "AshFlix Backend",
    status: "running",
    region: "eu-west-1",
    poweredBy: "UWEM"
  });
});

// New: catalog sections API
app.get("/api/catalog/sections", (_req: Request, res: Response) => {
  res.json({
    ok: true,
    source: "ashflix-backend",
    sections
  });
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`🔥 AshFlix backend running on http://localhost:${PORT}`);
});

