import React, { PureComponent } from 'react';

class Form extends PureComponent {
render() {
    return (
      <form action="#">
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
          <li><input type="submit" value="SEND MESSAGE" /></li>
          <li><input type="reset" value="CLEAR"/></li>
        </ul>

      </form>
    );
  }
}

export default Form;
