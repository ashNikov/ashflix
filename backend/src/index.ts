import express from "express";
import cors from "cors";
import catalogRouter from "./routes/catalog";

const app = express();

// config
const port = process.env.PORT || 5001;
const region = process.env.ASHFLIX_REGION || "eu-west-1";
const poweredBy = "UWEM";

// where is the frontend allowed to call from?
// dev: http://localhost:5173
// later prod: we'll set ASHFLIX_FRONTEND_ORIGIN to the CloudFront URL
const allowedOrigin =
  process.env.ASHFLIX_FRONTEND_ORIGIN || "http://localhost:5173";

app.use(
  cors({
    origin: allowedOrigin,
    methods: ["GET", "POST", "OPTIONS"],
  })
);

app.use(express.json());

// Root status
app.get("/", (_req, res) => {
  res.json({
    service: "AshFlix Backend",
    status: "running",
    region,
    poweredBy,
  });
});

// Health endpoint for Docker / k8s / uptime checks
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
  console.log(`CORS allowed origin: ${allowedOrigin}`);
});

export default app;

