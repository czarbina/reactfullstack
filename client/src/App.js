import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import ResultsArticleContainer from "./components/ResultsArticleContainer";
import SavedArticleContainer from "./components/SavedArticleContainer";
import Search from "./components/Search";
import DeleteBtn from "./components/DeleteBtn";
import SaveBtn from "./components/SaveBtn";
import "./App.css";
import shuffle from "shuffle-array";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    articles: ""
  };

  render() {
    return (
      <div>
        <Title
          points={this.state.points}
        />
        <Wrapper>
        <Search/>
        <ResultsArticleContainer/>
        <SavedArticleContainer/>
        </Wrapper>
      </div>  
    );
  }
}

export default App;
