import { useState } from 'react';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import MainContent from '../components/MainContent';
import NewsStory from '../components/NewsStory';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import { fetchMultipleSourcesNews } from '../lib/fetchNews';
import InfiniteScroll from 'react-infinite-scroll-component';

const Home = () => {
    const sources = ['cnn', 'bbc-news', 'the-new-york-times'];
    const [newsStories, setNewsStories] = useState([]);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);

    const fetchNewsStories = async () => {
        const news = await fetchMultipleSourcesNews(sources, page);
        if (news.length > 0) {
        setNewsStories((prevNewsStories) => [...prevNewsStories, ...news]);
        setPage(page + 1);
        } else {
        setHasMore(false);
        }
    };

    return (
        <>
        <Header />
        <Navigation />
        <InfiniteScroll
            dataLength={newsStories.length}
            next={fetchNewsStories}
            hasMore={hasMore}
            loader={<h4>Loading...</h4>}
            endMessage={<p>No more articles available.</p>}
        >
            <MainContent>
            {newsStories.map((story, index) => (
                <NewsStory
                key={index}
                title={story.title}
                excerpt={story.description}
                source={story.source.name}
                />
            ))}
            </MainContent>
        </InfiniteScroll>
        <Sidebar />
        <Footer />
        </>
    );
};

export default Home;
