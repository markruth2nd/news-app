// components/ArticleCard.js
import React from 'react';

const ArticleCard = ({ article }) => {
  const handleClick = () => {
    window.open(article.url, '_blank');
  };

  const imageUrl = article.urlToImage || '/path/to/placeholder-image.jpg';

  return (
    <div className="article-card" onClick={handleClick}>
      <img src={imageUrl} alt={article.title} />
      <h3>{article.title}</h3>
      <p>{article.description}</p>
    </div>
  );
};

export default ArticleCard;
