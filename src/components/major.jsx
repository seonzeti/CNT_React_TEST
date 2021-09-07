import React, { memo, useState } from 'react';
import axios from 'axios';



const Major = memo (() => {


    async function switchText() {

      const [txt, setTxt] = useState({
        text : "초기값 입니다",
        desc: "초기값 2 입니다",
    });

    //   const connect = await axios.get('https://heronoah.github.io/CNT_Web_TEST_Ref/test-value/')
    //     .then(res => setTxt(res));

    //   const data = JSON.stringify(connect);
      
    //   const obj = JSON.parse(data, (key,value) => {
    //       return value;
    //   });
    

      // const connect = await axios.get('https://heronoah.github.io/CNT_Web_TEST_Ref/test-value/');
      // const data = JSON.stringify(connect);
      
      // const obj = JSON.parse(data, (key,value) => {
      //     return value;
      // });
      
      // console.log(obj.data['title']);
      // console.log(obj.data['description']);
      // console.log(obj.data['count']);      





    }


    //"Hi, Let the games Begin"
    //'이 데모용 웹페이지는 Html로 만들어 졌습니다. React로 코딩해주세요! 오른쪽의 버튼을 누르면 Axios 된 값으로 이곳의 글자를 변경해주세요'




    return (
  
      
      <><header>
        {/* <h1>{txt.text}</h1> */}
      </header><div>
          <p>
            {/* {txt.desc} */}
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