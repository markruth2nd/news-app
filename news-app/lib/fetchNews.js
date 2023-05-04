// lib/fetchNews.js
import axios from 'axios';

const fetchProvider1News = async (source, page = 1) => {
    const apiKey = process.env.API_PROVIDER_1_KEY;
    const apiUrl = `https://newsapi.org/v2/top-headlines?country=gb&apiKey=${apiKey}`;

    try {
    const response = await axios.get(apiUrl);
    const articles = response.data.articles;
    return articles;
    } catch (error) {
    console.error('Error fetching news from provider 1:', error);
    return [];
    }
  // Fetch news from provider 1 using their API and your API key
  // process.env.API_PROVIDER_1_KEY
  // Return an array of articles
};

const fetchProvider2News = async (source, page = 1) => {
  // Fetch news from provider 2 using their API and your API key
  // process.env.API_PROVIDER_2_KEY
  // Return an array of articles
};

const fetchProvider3News = async (source, page = 1) => {
  // Fetch news from provider 3 using their API and your API key
  // process.env.API_PROVIDER_3_KEY
  // Return an array of articles
};

export const fetchMultipleSourcesNews = async (sources, page = 1) => {
    const allArticles = await Promise.all(
    sources.map(async (source) => {
        let articles = [];
        switch (source.provider) {
        case 'provider1':
            articles = await fetchProvider1News(source.sourceId, page);
            break;
        case 'provider2':
            articles = await fetchProvider2News(source.sourceId, page);
            break;
        case 'provider3':
            articles = await fetchProvider3News(source.sourceId, page);
            break;
        // ... handle other providers
        default:
            break;
        }
        return articles;
    })
    );

  // Flatten the articles array and return it
    return [].concat(...allArticles);
};
