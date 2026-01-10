import express from "express";
import cors from "cors";

/* ---------- Startup ---------- */
console.log("🚀 index.mjs starting");

/* ---------- App setup ---------- */
const app = express();
app.use(cors());
app.use(express.json());

/* ---------- Routes ---------- */
app.post("/api/horoscope", (req, res) => {
  const { goals, personality, mood } = req.body;

  console.log("Received survey:", { goals, personality, mood });

  res.json({
    horoscope: "You will have a great day."
  });
});

/* ---------- Server ---------- */
const PORT = 3001;

console.log("✅ About to start server");

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});