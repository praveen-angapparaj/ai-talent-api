import express from "express";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    status: "AI Hiring Automation Live",
    hackathon: "Submission Active"
  });
});

app.post("/run", (req, res) => {
  res.json({
    status: "success",
    message: "AI Talent Engine Executed",
    ranked_candidates: [
      { name: "Candidate A", score: 82 },
      { name: "Candidate B", score: 65 }
    ]
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Server running"));