import React, { memo, useState } from "react";
import axios from "axios";

const Major = memo(() => {
  const [txt, setTxt] = useState({
    title: "Hi, Let the games Begin",
    description:
      "이 데모용 웹페이지는 Html로 만들어 졌습니다. React로 코딩해주세요! 오른쪽의 버튼을 누르면 Axios 된 값으로 이곳의 글자를 변경해주세요",
    count: "0",
  });

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

  // count를 내가 따로 빼지않고 불러온 데이터의 값을 이용해야함.. 수정수정
  // 여기서 title, description은 그대로 둔 채로 count만 하고 싶은데
  // 1)  setTxt.count(txt.count + 1); >> 함수가 아니라고 오류

  const IncreaseCount = () => {
    setTxt(txt.count + 1);
    console.log(txt.count);
    // 2) title, description 까지 같이 수정돼서 공백으로 처리 됨..
    // >> 이 부분 부터 다시 !!
  };

  return (
    <>
      <header>
        <h1>{txt.title}</h1>
      </header>
      <div>
        <p>{txt.description}</p>
        <p>{txt.count}</p>

        <ul>
          <li>
            <button onClick={SwitchText}>Get Started</button>
            <button onClick={IncreaseCount}>increase</button>
          </li>
        </ul>
      </div>
    </>
  );
});

export default Major;
