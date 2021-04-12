import React from "react";
import "./article.css";

const ArticleCard = props => {
  return (
    <div className="card" key={props.id}>
      
      <a href={props.articleUrl}>
      <h6>{props.date}, {props.by}</h6>
      <h4>{props.headline}</h4>
      
      </a>
    </div>
  );
};

export default ArticleCard;
