import React from "react";
import "./article.css";

const ArticleCard = props => {
  return (
    <div className="card" key={props.id}>
      <p>{props.articleDate}</p>
      <a href={props.articleUrl}>
      <h4>{props.headline}</h4>
      </a>
      <h6>{props.by}</h6>
    </div>
  );
};

export default ArticleCard;
