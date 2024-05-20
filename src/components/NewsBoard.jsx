import { useEffect, useState } from "react";
import NesItem from "./NesItem";

const NewsBoard = ({category}) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
    fetch(url)
      .then(response => response.json())
      .then(data => setArticles(data.articles));
  }, [category]);

  return (
    <div className="container">
      <h2 className="text-center my-4">
        LATEST <span className="badge bg-danger">NEWS</span>
      </h2>
      <div className="row g-4">
        {articles.map((news, index) => (
          <div className="col-md-3" key={index}>
            <NesItem
              title={news.title}
              description={news.description}
              src={news.urlToImage}
              url={news.url}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsBoard;
