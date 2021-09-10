import React from "react";

import Navbar from "./components/navbar";
import Major from "./components/major";
import Sections from "./components/sections";
import Inner from "./components/inner";
import Form from "./components/form";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Login from "./components/login";

import "./main.scss";
import "./SCSS/header.scss";
import "./SCSS/footer.scss";
import "./SCSS/major.scss";
import "./SCSS/button.scss";

const App = () => {
  return (
    <>
      <body>
        <Navbar></Navbar>
        <Major></Major>
        <Login></Login>
        <Sections></Sections>
        <Inner></Inner>
        <Form></Form>
        <Contact></Contact>
        <Footer></Footer>
      </body>
    </>
  );
};

export default App;
