import React from "react";
import "./article.css";

const ArticleCard = props => {
  return (
    <div className="card" key={props.id}>
      
      <a href={props.articleUrl}>
      <h4>{props.headline}</h4>
      </a>
    </div>
  );
};

export default ArticleCard;
