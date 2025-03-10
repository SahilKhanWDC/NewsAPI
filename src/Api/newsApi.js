const axios = require("axios");

const fetchNews = async () => {
    try {
        const API_KEY = process.env.NEWS_API_KEY;
        const response = await axios.get(
            `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`
        );
        return response.data.articles;
    } catch (error) {
        console.error("Error fetching news:", error.message);
        throw error;
    }
};

module.exports = { fetchNews };
