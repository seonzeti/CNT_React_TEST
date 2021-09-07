import React, { memo } from 'react';
import axios from 'axios';


const Major = memo (({ getStarted }) => {


    

    async function switchText() {

      console.log("123123")

      const connect = await axios.get('https://heronoah.github.io/CNT_Web_TEST_Ref/test-value/');
      const data = JSON.stringify(connect);
      
      const obj = JSON.parse(data, (key,value) => {
          return value;
      });
      
      console.log(obj.data['title']);
      console.log(obj.data['description']);
      console.log(obj.data['count']);        

    }


    function text() {
      return '이 데모용 웹페이지는 Html로 만들어 졌습니다. React로 코딩해주세요! 오른쪽의 버튼을 누르면 Axios 된 값으로 이곳의 글자를 변경해주세요'
      
    }




    return (
  
      
      <><header>
        <h1>"Hi, Let the games Begin"</h1>
      </header><div>
          <p>
            {text()}
          </p>

          <ul>
            <li>
              <a href="#" onClick={switchText}>
                GET STARTED
              </a>
            </li>
          </ul>


        </div></>

    );
});


export default Major;

