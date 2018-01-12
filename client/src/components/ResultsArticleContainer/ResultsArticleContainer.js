import React from "react";
import SaveBtn from "../SaveBtn";
// import "./ArticleContainer.css";

const ResultsArticleContainer = props => (
	 <ul className="collection with-header">
        <li className="collection-header"><h3>RESULTS</h3></li>
        <li className="collection-item"><SaveBtn/></li>
        <li className="collection-item"><SaveBtn/></li>
        <li className="collection-item"><SaveBtn/></li>
        <li className="collection-item"><SaveBtn/></li>
      </ul>
            
);  

export default ResultsArticleContainer;