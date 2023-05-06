// components/MainContent.js
import React from 'react';
import ArticleCard from './ArticleCard';

const MainContent = ({ news }) => {
  return (
    <main className="main-content">
      <div className="article-grid">
        {news.map((article, index) => {
          if (!article) {
            return null;
          }

          return <ArticleCard key={index} article={article} />;
        })}
      </div>
    </main>
  );
};

export default MainContent;
