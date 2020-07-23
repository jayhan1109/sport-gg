import React from "react";
import "../../styles/News.scss";
import { Link } from "react-router-dom";

const News = ({ news }) => {
  return (
    <a className="news" href={news.url}>
      {news.urlToImage && (
        <div className="news-img">
          <img src={news.urlToImage} alt="" />
        </div>
      )}

      <div className="news-content">
        <h2 className="news-content-title">{news.title}</h2>
        <div className="news-content-body">{news.description}</div>
      </div>
    </a>
  );
};

export default News;
