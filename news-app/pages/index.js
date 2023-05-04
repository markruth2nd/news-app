// pages/index.js
import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import MainContent from '../components/MainContent';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import { fetchMultipleSourcesNews } from '../lib/fetchNews';

const Home = () => {
  const sources = [
    { provider: 'provider1', sourceId: 'cnn' },
    { provider: 'provider2', sourceId: 'source-2' },
    { provider: 'provider3', sourceId: 'source-3' },
    // ...
    { provider: 'providerX', sourceId: 'source-100' },
  ];

  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);

    const handleNewsFetch = async () => {
    setLoading(true);
    const newsData = await fetchMultipleSourcesNews(sources);
    setNews(newsData);
    setLoading(false);
    };

    useEffect(() => {
    handleNewsFetch();
    }, []);

    return (
    <>
        <Header />
        <Navigation />
        <MainContent news={news} loading={loading} onFetchNews={handleNewsFetch} />
        <Sidebar />
        <Footer />
    </>
    );
};

export default Home;
