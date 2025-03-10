require("dotenv").config();
const express = require("express");
const newsRoutes = require("./src/Routes/newsRoute");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/api/news", newsRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
