const NewsStory = ({ title, excerpt, source }) => {
    return (
        <article className="news-story">
            <h2 className="news-story-title">{title}</h2>
            <p className="news-story-excerpt">{excerpt}</p>
            <p className="news-story-source">Source: {source}</p>
        </article>
        );
    };
    
    export default NewsStory;
    