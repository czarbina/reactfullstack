import React from "react";
import DeleteBtn from "../DeleteBtn";
// import "./ArticleContainer.css";

const SavedArticleContainer = props => (
	 <ul className="collection with-header">
        <li className="collection-header"><h3>SAVED ARTICLES</h3></li>
        <li className="collection-item"><DeleteBtn/></li>
        <li className="collection-item"><DeleteBtn/></li>
        <li className="collection-item"><DeleteBtn/></li>
        <li className="collection-item"><DeleteBtn/></li>
      </ul>
            
);  

export default SavedArticleContainer;