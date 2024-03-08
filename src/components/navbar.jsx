import React, { Component } from "react";

const NavBar = ({ totalCounters }) => {
  return (
    <div className="d-flex justify-content-center align-items-center">
      <nav className="navbar navbar-light bg-light  ">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Count =
            <span className="badge badge-pill badge-secondary">
              {totalCounters}
            </span>
          </a>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
