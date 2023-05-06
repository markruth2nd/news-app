// components/ArticleCard.js
import React from 'react';

const ArticleCard = ({ article }) => {
  console.log(article);

  const handleClick = () => {
    window.open(article.url, '_blank');
  };

  const imageUrl = article.urlToImage || '/path/to/placeholder-image.jpg';

  return (
    <div className="article-card" onClick={handleClick}>
      <img src={imageUrl} alt={article.title} />
      <h3>{article.source.name}</h3>
      <h4>{article.title}</h4>
    </div>
  );
};

export default ArticleCard;
