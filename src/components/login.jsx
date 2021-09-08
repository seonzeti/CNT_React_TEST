import React, { memo } from "react";

const Login = memo(props => {
  const onSubmit = event => {};

  return (
    <form onSubmit={onSubmit}>
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
    </form>
  );
});

export default Login;
