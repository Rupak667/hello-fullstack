const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

/* Serve frontend */
app.use(express.static(path.join(__dirname, "../frontend")));

/* API example */
app.get("/api/health", (req, res) => {
  res.json({ status: "ok" });
});

/* Fallback to frontend */
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/index.html"));
});

app.listen(PORT, () => {
  console.log(`Monolith running on port ${PORT}`);
});