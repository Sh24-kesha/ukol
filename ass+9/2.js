const express = require("express");
const app = express();

const users = [
  { id: 1, name: "Shravani", email: "shravi@example.com" },
  { id: 2, name: "Amit", email: "amit@example.com" },
  { id: 3, name: "Priya", email: "priya@example.com" }
];

app.get("/", (req, res) => {
  res.send("Hello, Backend World ");
});

app.get("/users", (req, res) => {
  res.json(users);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
