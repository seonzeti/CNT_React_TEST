import React, { PureComponent } from 'react';

class Navbar extends PureComponent {
render() {
    return (
      <><a className="logo">
        <strong>Connect</strong>
        <span>React 코딩테스트</span>
      </a>
      
      <nav>
        <span>로그인해주세요</span>
        <a href = "#">menu</a>
      </nav>
      
      </>
      
    );
  }
}

export default Navbar;
