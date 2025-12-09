import express from "express";
import cors from "cors";
import catalogRouter from "./routes/catalog";

const app = express();
const port = process.env.PORT || 5001;
const region = process.env.ASHFLIX_REGION || "eu-west-1";
const poweredBy = "UWEM";

app.use(cors());
app.use(express.json());

// Root status (what you've been using before)
app.get("/", (_req, res) => {
  res.json({
    service: "AshFlix Backend",
    status: "running",
    region,
    poweredBy,
  });
});

// 🔹 New health endpoint for Docker / k8s checks
app.get("/health", (_req, res) => {
  res.json({
    service: "AshFlix Backend",
    status: "running",
    region,
    poweredBy,
    uptimeSeconds: Math.round(process.uptime()),
  });
});

// Catalog API used by the UI
app.use("/api/catalog", catalogRouter);

app.listen(port, () => {
  console.log(`AshFlix backend running on http://localhost:${port}`);
});

export default app;

