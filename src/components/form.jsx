import React from "react";

const Form = props => {
  const onSubmit = event => {};

  return (
    <section id="banner">
      <div className="inner">
        <form onSubmit={onSubmit}>
          <div className="fields">
            <div className="field half">
              <label>name</label>
              <input></input>
            </div>
            <div className="field half">
              <label>ID</label>
              <input></input>
            </div>
            <div className="field">
              <label>message</label>
              <input></input>
            </div>
          </div>

          <input type="submit" className="button" value="SEND MESSAGE" />
        </form>
      </div>
    </section>
  );
};

export default Form;
