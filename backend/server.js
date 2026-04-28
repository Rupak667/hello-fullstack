const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/api", (req, res) => {
  res.json({ message: "Hello World from Backend 👋" });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});