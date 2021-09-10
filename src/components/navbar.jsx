import React, { memo, useState } from "react";
// import Modal from "react-modal";

const Navbar = props => {
  return (
    <>
      <header id="header">
        <a className="logo">
          <strong>Connect</strong>
          <span>React 코딩테스트</span>
        </a>

        <nav>
          <span>로그인해주세요</span>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
