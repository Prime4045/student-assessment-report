const express = require("express");
const cors = require("cors");
const reportData = require("./data");

const app = express();
app.use(cors());

app.get("/api/report", (req, res) => {
    res.json(reportData);
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
