import React, { Fragment, useEffect } from "react";
import axios from "axios";
import News from "../News/News";
import { useRecoilState } from "recoil";
import { newsState } from "../../recoil/news";

const Landing = () => {
  const [news, setNews] = useRecoilState(newsState);
  useEffect(() => {
    const getNews = async () => {
      try {
        const res = await axios.get("/api/news");
        setNews(res.data.articles);
      } catch (e) {
        console.log("Fail");
      }
    };

    getNews();
  }, []);
  return (
    <Fragment>
      {news.map((el) => (
        <News key={el.title} news={el} />
      ))}
    </Fragment>
  );
};

export default Landing;
