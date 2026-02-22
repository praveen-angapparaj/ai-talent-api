import express from "express";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    status: "AI Hiring Automation Live",
    hackathon: "Submission Active"
  });
});

app.post("/run", async (req, res) => {
  try {
    const response = await fetch(
      "https://turbotic.com/api/automations/6999e07f1dde2de75e11d378/trigger",
      {
        method: "POST",
        headers: {
          "turbotic-api-key": process.env.TURBOTIC_API_KEY
        }
      }
    );

    const data = await response.json();
    res.json(data);

  } catch (error) {
    res.status(500).json({
      error: "Failed to trigger Turbotic automation"
    });
  }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log("Server running"));
