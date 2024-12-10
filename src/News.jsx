import React from "react";
import "./App.css";

function News(props) {
  // cconsole.log(props)
  return (
    <div className="news">
      <div className="news-img">
        <img src={props.result.image_url} alt={props.result.source_name} />
      </div>
      <h1>{props.result.title}</h1>
      <p>{props.result.description}</p>
      <a href={props.result.link}>Read More</a>
      <div className="source">
        <p>{props.result.creator}</p>
        <p>{props.result.source_name}</p>
      </div>
    </div>
  );
}

export default News;
