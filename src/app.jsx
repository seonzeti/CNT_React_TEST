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
import "./SCSS/main.scss";
import "./SCSS/button.scss";
import "./SCSS/form.scss";
import "./SCSS/section.scss";

const App = () => {
  return (
    <>
      <body>
        <Navbar></Navbar>
        <Major></Major>
        <Sections></Sections>
        <Login></Login>
        <Inner></Inner>
        <Form></Form>
        <Contact></Contact>
        <Footer></Footer>
      </body>
    </>
  );
};

export default App;
