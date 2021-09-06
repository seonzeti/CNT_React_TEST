// src/App.js
import React, { Component, useEffect, useState } from 'react';
import axios from 'axios';


let title = "A responsive site template designed by HTML5 UP and released under the Creative Commons.";





const getCNData = async() => {
  const connect = await axios.get('https://heronoah.github.io/CNT_Web_TEST_Ref/test-value/');
  const data = JSON.stringify(connect);

  
  const obj = JSON.parse(data, (key,value) => {
    console.log(`key : ${key}, value : ${value}`)
    return value;
  });

  console.log('여기서부터');
  console.log(obj.value);

};



class App extends Component {

  

  render() {

    return (  

      <div id = "wrapper">

        {/* header */}
        <header id="header" class="alt">
						<a href="index.html" class="logo"><strong>Forty</strong> <span>by HTML5 UP</span></a>
						<nav>
							<a href="#menu">Menu</a>
						</nav>
					</header>

        {/* menu */}
        <nav id="menu">
						<ul class="links">
							<li><a href="#">Home</a></li>
							<li><a href="#">Landing</a></li>
							<li><a href="#">Generic</a></li>
							<li><a href="#">Elements</a></li>
						</ul>
						<ul class="actions stacked">
							<li><a href="#" class="button primary fit">Get Started</a></li>
							<li><a href="#" class="button fit">Log In</a></li>
						</ul>
					</nav>

          {/* banner */}
          <section id="banner" class="major">
						<div class="inner">
							<header class="major">
								<h1>Hi, my name is Forty</h1>
							</header>
							<div class="content">
                  <p>{title}</p>
								<ul class="actions">
									<li><a href="#one" onClick={getCNData} class="button next scrolly">Get Started</a></li>
								</ul>
							</div>
						</div>
					</section>


      </div>
    );
  }
}

export default App;