import React from "react";

const Form = (props => {
  const onSubmit = event => {};

  return (
    <section id="banner">
      <form onSubmit={onSubmit}>
        <div className="fields">
          <div className="field half">
            <label>name</label>
            <input></input>
          </div>
          <div className="field half">
            <label>email</label>
            <input></input>
          </div>
          <div className="field">
            <label>message</label>
            <input></input>
          </div>
        </div>

        <ul>
          <li>
            <input type="submit" className="button" value="SEND MESSAGE" />
          </li>
          
        </ul>
      </form>
    </section>
  );
});

export default Form;
