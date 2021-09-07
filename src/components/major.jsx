import React, { PureComponent } from 'react';

class Major extends PureComponent {
render() {
    return (
      <>
      
      <header>
        <h1>"Hi, Let the games Begin"</h1>
      </header>
      
      <div>
        <p>
          이 데모용 웹페이지는 Html로 만들어 졌습니다. React로 코딩해주세요!      
          오른쪽의 버튼을 누르면 Axios 된 값으로 이곳의 글자를 변경해주세요
        </p>

        <ul>
          <li>
            <a href="#" className="button next scrolly">
              GET STARTED
            </a>
          </li>
        </ul>


      </div>
      
      </>
    );
  }
}

export default Major;
