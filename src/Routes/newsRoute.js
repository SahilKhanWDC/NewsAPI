const express = require("express");
const { fetchNews } = require("../Api/newsApi");

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const news = await fetchNews();
        res.json({ success: true, articles: news });
    } catch (error) {
        res.status(500).json({ success: false, message: "Failed to fetch news" });
    }
});

module.exports = router;
