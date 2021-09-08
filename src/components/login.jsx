import React, { memo, useState } from "react";
import axios from "axios";

const Login = memo(props => {
  //보관할 초기 useState 설정
  const [user, setUser] = useState({
    id: "",
    pw: "",
    name: "없음",
  });

  //유저 데이터 가져오기
  const getUser = async () => {
    const User = await axios(
      "https://heronoah.github.io/CNT_Web_TEST_Ref/login/"
    );
    setUser(User.data);
  };

  const onSubmit = event => {
    getUser();
  };

  return (
    <>
      <p>{user.name}</p>

      <button onClick={onSubmit}>데이터 들어오는지 확인하기</button>

      {/* <form onSubmit={onSubmit}>
        <div className="fields">
          <div className="field half">
            <label>name</label>
            <input type="text"></input>
          </div>
          <div className="field half">
            <label>password</label>
            <input type="password"></input>
          </div>
        </div>

        <ul>
          <li>
            <input type="submit" value="Login" />
          </li>
        </ul>
      </form> */}
    </>
  );
});

export default Login;
