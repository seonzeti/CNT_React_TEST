import React, { useState } from "react";
import axios from "axios";

const Major = () => {
  console.log("첫번째");
  const [txt, setTxt] = useState({
    title: "Hi, Let the games Begin",
    description:
      "이 데모용 웹페이지는 Html로 만들어 졌습니다. React로 코딩해주세요! 오른쪽의 버튼을 누르면 Axios 된 값으로 이곳의 글자를 변경해주세요",
    count: "0",
  });

  //데이터 가져오기
  const getTxt = async () => {
    console.log("두번째");
    const TXT = await axios(
      "https://heronoah.github.io/CNT_Web_TEST_Ref/test-value/"
    );
    setTxt(TXT.data);
  };

  const { title, description, count } = txt;

  const IncreaseCount = () => {
    setTxt({
      ...txt,
      count: count + 1,
    });

    // console.log(txt.count);
  };

  return (
    <>
      <section id="banner" className="major">
        <div className="inner">
          <header className="major">
            <h1>{title}</h1>
          </header>
          <div className="content">
            <p>{description}</p>
            <p>{count}</p>

            <li>
              <button onClick={getTxt}>Get Started → </button>
              <button onClick={IncreaseCount}>increase</button>
            </li>
          </div>
        </div>
      </section>
    </>
  );
};

export default Major;
