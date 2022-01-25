import React from "react";
import { Link } from "react-router-dom";

const navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="">
        <Link className="navbar-brand" to={{ pathname: "/", state: { id: "", }, }} ><span> Movies </span> </Link>
      </div>
    </nav>
  );
};

export default navbar;
