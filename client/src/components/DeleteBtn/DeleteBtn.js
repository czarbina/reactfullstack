import React from "react";
// import "./DeleteBtn.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
const DeleteBtn = props => (
	<button type="submit" className="btn btn-default" id="run-search"><i className="fa fa-search"></i>REMOVE</button>

);

export default DeleteBtn;
