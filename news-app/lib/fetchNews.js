import axios from 'axios';

const API_KEY = 'YOUR_API_KEY'; // Replace with your News API key
const API_ENDPOINT = 'https://newsapi.org/v2/top-headlines';

export const fetchNews = async (source, page = 1) => {
    try {
        const response = await axios.get(API_ENDPOINT, {
        params: {
            apiKey: API_KEY,
            sources: source,
            page,
        },
        });

        return response.data.articles;
    } catch (error) {
        console.error('Error fetching news:', error);
        return [];
    }
    };

    export const fetchMultipleSourcesNews = async (sources, page = 1) => {
    const allArticles = await Promise.all(
        sources.map(async (source) => {
        const articles = await fetchNews(source, page);
        return articles;
        })
    );

    return allArticles.flat();
    };

    export const fetchTotalArticles = async (sources) => {
    try {
        const response = await axios.get(API_ENDPOINT, {
        params: {
            apiKey: API_KEY,
            sources: sources.join(','),
        },
        });

        return response.data.totalResults;
    } catch (error) {
        console.error('Error fetching total articles:', error);
        return 0;
    }
    };
