// src/App.js
import React from 'react';
// import axios from 'axios';
import Navbar from './components/navbar';
import Major from './components/major';
import Sections from './components/sections';
import Inner from './components/inner';
import Form from './components/form';
import Contact from './components/contact';
import Footer from './components/footer';


// let title = "A responsive site template designed by HTML5 UP and released under the Creative Commons.";





// const getCNData = async() => {
// const connect = await axios.get('https://heronoah.github.io/CNT_Web_TEST_Ref/test-value/');
// const data = JSON.stringify(connect);


// const obj = JSON.parse(data, (key,value) => {
//     console.log(`key : ${key}, value : ${value}`)
//     return value;
// });

// console.log('여기서부터');
// console.log(obj.value);

// };


const App = () => {

    return (

        <>            
            <Navbar></Navbar>
            <Major></Major>
            <Sections></Sections>
            <Inner></Inner>
            <Form></Form>
            <Contact></Contact>
            <Footer></Footer>
            
            </>


    );

}

export default App;