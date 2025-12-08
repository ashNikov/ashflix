import express from "express";
import cors from "cors";
import catalogRouter from "./routes/catalog";

const app = express();
const port = 5001;

app.use(cors());
app.use(express.json());

// Health / status endpoint
app.get("/", (_req, res) => {
  res.json({
    service: "AshFlix Backend",
    status: "running",
    region: "eu-west-1",
    poweredBy: "UWEM",
  });
});

// Catalog API (demo)
app.use("/api/catalog", catalogRouter);

app.listen(port, () => {
  console.log(`🚀 AshFlix backend running on http://localhost:${port}`);
});

