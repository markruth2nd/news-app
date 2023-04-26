const NewsStory = ({ title, excerpt, source }) => {
    return (
      <article>
        <h2>{title}</h2>
        <p>{excerpt}</p>
        <p>Source: {source}</p>
      </article>
    );
  };
  
  export default NewsStory;
  