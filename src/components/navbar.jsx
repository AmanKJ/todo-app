import React, { Component } from "react";

const Navbar = props => {
  return (
    <nav className="navbar navbar-light bg-light">
      <span className="navbar-brand mb-0 h1">
        Total TODO's - {props.totalTodos}
      </span>
    </nav>
  );
};

export default Navbar;
