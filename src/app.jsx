import React, {useState, useEffect, useCallback }from 'react';
import axios from 'axios';


import Navbar from './components/navbar';
import Major from './components/major';
import Sections from './components/sections';
import Inner from './components/inner';
import Form from './components/form';
import Contact from './components/contact';
import Footer from './components/footer';


const App = () => {



    return (

        <>            
            <Navbar></Navbar>
            <Major></Major>
            <Sections></Sections>
            <Inner ></Inner>
            <Form></Form>
            <Contact></Contact>
            <Footer></Footer>
            
            </>


    );

}

export default App;