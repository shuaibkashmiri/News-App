import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNews } from "../../redux/newsSlice";
import "../../Styles/style.css";

const Category = ({ category, query }) => {
  const dispatch = useDispatch();
  const news = useSelector(
    (state) => state.news[`${category.toLowerCase()}News`]
  );
  const loading = useSelector((state) => state.news.loading);

  useEffect(() => {
    dispatch(fetchNews({ category, query }));
  }, [dispatch, category, query]);

  if (loading) return <div>Loading...</div>;

  // Ensure `news` is an array before calling `.map()`
  if (!Array.isArray(news)) {
    return <div>No news available.</div>;
  }

  return (
    <div className="category-container">
      <h1 className="category-title">{category}</h1>
      {news.map((article, index) => (
        <div key={index} className="article">
          <h2 className="article-title">{article.title}</h2>
          <img src={article.urlToImage} alt="" className="article-image" />
          <p className="article-description">{article.description}</p>

          <p className="article-source">Source : {article.source.name}</p>
          <p className="article-author">Author : {article.author || "NA"}</p>
          <a href={article.url} target="_blank" className="read-more">
            Read Full News
          </a>
        </div>
      ))}
    </div>
  );
};

export default Category;
