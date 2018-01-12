import React from "react";
// import "./Search.css";

const Search = props => (
    <div className="row">
      <div className="col-sm-12">
        <br></br>
        <div className="panel panel-primary">
          <div className="panel-heading">
            <h3 className="panel-title"><strong><i className="fa  fa-list-alt"></i>Search Box</strong></h3>
          </div>
          <div className="panel-body">

            <form role="form">

              <div className="form-group">
                <label for="search">Search Term(keyword):</label>
                <input type="text" className="form-control" id="search-term"></input>
              </div>

              <div className="form-group">
                <label for="start-year">Start Year (Optional):</label>
                <input type="text" className="form-control" id="start-year"></input>
              </div>

              <div className="form-group">
                <label for="end-year">End Year (Optional):</label>
                <input type="text" className="form-control" id="end-year"></input>
              </div>

              <button type="submit" className="btn btn-default" id="run-search"><i className="fa fa-search"></i> Search</button>

            </form>
          </div>
        </div>
      </div>
    </div>
);  

export default Search;