import React, { memo } from "react";

const Footer = memo(props => {
  return (
    <>
      <fotter id="footer">
        <div class="inner">
          <ul className="icons">
            <li>twitter</li>
            <li>facebook</li>
            <li>instagram</li>
            <li>github</li>
            <li>infrun</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>(주)커넥트</li>
            <li>
              Design <a href="#"> HTML5UP</a>
            </li>
          </ul>
        </div>
      </fotter>
    </>
  );
});

export default Footer;
