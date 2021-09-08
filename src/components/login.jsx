import React, { memo, useEffect, useState } from "react";
import axios from "axios";

const Login = memo(props => {
  //보관할 초기 useState 설정

  const [user, setUser] = useState({ id: "", pw: "", name: "" });
  const [admin, setAdmin] = useState({ id: "", pw: "", name: "" });

  //유저 데이터 가져오기
  const getAdmin = async () => {
    const Admin = await axios(
      "https://heronoah.github.io/CNT_Web_TEST_Ref/login/"
    );
    setAdmin(Admin.data);
  };

  const onSubmit = event => {
    //admin 자료 가져오기
    getAdmin();

    //입력받은 값으로 user id, pw 를 세팅하고, 가져온 데이터 값과 비교해서 빠꾸시키깅
    if (user.id == admin.id && user.pw == admin.pw) {
      console.log("관리자입니다.");
    } else {
      console.log("휑.....틀렸어요잉.... ");
    }
  };

  return (
    <>
      <p>{admin.name}</p>

      <button onClick={onSubmit}>데이터 들어오는지 확인하기</button>

      {/* <form onSubmit={onSubmit}>
        <div className="fields">
          <div className="field half">
            <label>
              ID:
              <input
                type="text"
                name="id"
                value={user.id || ""}
                onChange={onChange}
              />
            </label>
            <br />
          </div>
          <div className="field half">
            <label>
              PW:
              <input
                type="password"
                name="pw"
                value={user.pw || ""}
                onChange={onChange}
              />
            </label>
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
