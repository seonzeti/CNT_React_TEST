import React, { memo, useState } from "react";
import axios from "axios";

const Major = memo(() => {
  const [txt, setTxt] = useState({
    title: "Hi, Let the games Begin",
    description:
      "이 데모용 웹페이지는 Html로 만들어 졌습니다. React로 코딩해주세요! 오른쪽의 버튼을 누르면 Axios 된 값으로 이곳의 글자를 변경해주세요",
  });

  const [count, setCount] = useState(0);

  //데이터 가져오기
  const getTxt = async () => {
    const TXT = await axios(
      "https://heronoah.github.io/CNT_Web_TEST_Ref/test-value/"
    );
    setTxt(TXT.data);
  };

  //버튼 클릭 시, Text를 바꿔주는 함수
  async function SwitchText() {
    getTxt();
  }

  return (
    <>
      <header>
        <h1>{txt.title}</h1>
      </header>
      <div>
        <p>{txt.description}</p>
        <p>{count}</p>

        <ul>
          <li>
            <button onClick={SwitchText}>Get Started</button>
            <button onClick={() => setCount(count + 1)}>increase</button>
          </li>
        </ul>
      </div>
    </>
  );
});

export default Major;
