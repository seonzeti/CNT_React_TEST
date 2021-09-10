import React from "react";

const Inner = ({ text, getStarted }) => {
  return (
    <>
      <section id="banner">
        <header className="inner">
          <h2>전달사항</h2>

          <p>
            {text}
            미디어 쿼리의 반응형을 위주로 작업해주세요! SCSS 또는
            Style-Component 중 하나를 선택해서 통일성 있게 작업해주세요! 스타일
            Layout으로는 Flex를 선호합니다.(여러분의 취향존중) 아래의 Contact
            영역은 폼의 형태만 갖추어 주시고 기능은 전혀 고려하지 않습니다.
          </p>

          <p>
            개발직군에 한해 UI디자인은 고려하지 않고 CODE의 디자인으로만
            평가합니다. 협업을 하실 (Clean )CODE에 힘을 다 쏟아넣어주세요
          </p>

          <button type="button">GET STARTED → </button>
        </header>
      </section>
    </>
  );
};

export default Inner;
