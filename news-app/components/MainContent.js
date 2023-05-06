import React from 'react';

const MainContent = ({ news }) => {
  return (
    <main className="main-content">
      <ul>
        {news.map((article, index) => {
          if (!article) {
            return null;
          }

          return (
            <li key={index}>
              <h3>{article.title}</h3>
              <p>{article.description}</p>
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export default MainContent;
