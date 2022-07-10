import React from 'react';
import { Outlet } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header">
      <h1>
        <a href="/">토익 영단어(고급)</a>
      </h1> 
      <div className="menu">
        <a href="/daylist" className="link">
          Days
        </a>
        <a href="#x" className="link">
          Add Word
        </a>
        <a href="#x" className="link">
          Add Day
        </a>
      </div>
      <Outlet />
    </div>
  );
};

export default Header;