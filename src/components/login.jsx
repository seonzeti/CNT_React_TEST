import React, { useState, useEffect } from "react";
import axios from "axios";

function Login() {
  const [inputId, setInputId] = useState("");
  const [inputPw, setInputPw] = useState("");

  const [admin, setAdmin] = useState({ id: "", pw: "", name: "" });

  // admin data 가져오기
  const getAdmin = async () => {
    const Admin = await axios(
      "https://heronoah.github.io/CNT_Web_TEST_Ref/login/"
    );

    //admin 값 세팅
    setAdmin(Admin.data);
  };

  // input data 의 변화가 있을 때마다 value 값을 변경해서 useState 해준다
  const handleInputId = e => {
    setInputId(e.target.value);
  };

  const handleInputPw = e => {
    setInputPw(e.target.value);
  };

  // login 버튼 클릭 이벤트
  const onClickLogin = () => {
    if (inputId == admin.id && inputPw == admin.pw) {
      // //Local Storage에 저장하기
      window.localStorage.setItem("input_id", inputId);
      window.localStorage.setItem("input_pw", inputPw);
      //login이 된 상태
      alert(window.localStorage.getItem("input_id") + "님, 환영합니다.");
    } else {
      //로그인 실패!
      alert("잘못입력하셨습니다.");
    }

    //입력 값 초기화
    setInputId("");
    setInputPw("");
  };

  const onClickLogout = () => {
    window.localStorage.setItem("input_id", "로그인이 필요한 서비스입니다.");
    window.localStorage.setItem("input_pw", "");
    alert("즐거운 하루 보내세요");
    //페이지를 재로딩해서 화면 변경
    window.location.reload();
  };

  // 페이지 렌더링 후 가장 처음 호출되는 함수
  useEffect(
    () => {
      getAdmin();
    },
    // 처음 한번 호출될 수 있도록 []추가
    []
  );

  return (
    <section id="banner" className="major">
      <div className="inner">
        <h2>{window.localStorage.getItem("input_id")}</h2>

        <div className="content">
          <label>ID : </label>
          <input
            type="text"
            name="input_id"
            value={inputId}
            onChange={handleInputId}
          />

          <label>PW : </label>
          <input
            type="password"
            name="input_pw"
            value={inputPw}
            onChange={handleInputPw}
          />
        </div>

        <div>
          <button type="button" onClick={onClickLogin}>
            Login
          </button>

          <button type="button" onClick={onClickLogout}>
            Logout
          </button>
        </div>
      </div>
    </section>
  );
}

export default Login;
