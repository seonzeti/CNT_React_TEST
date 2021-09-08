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
      alert(admin.id + "님, 환영합니다.");
    } else {
      alert("관리자만 이용 가능합니다.");
    }
  };

  // 페이지 렌더링 후 가장 처음 호출되는 함수
  useEffect(
    () => {
      getAdmin();
    },
    // 페이지 호출 후 처음 한번만 호출될 수 있도록 [] 추가
    []
  );

  return (
    <div>
      <h2>Login</h2>
      <div>
        <label>ID : </label>
        <input
          type="text"
          name="input_id"
          value={inputId}
          onChange={handleInputId}
        />
      </div>
      <div>
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
      </div>
    </div>
  );
}

export default Login;
