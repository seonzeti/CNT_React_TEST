import React from 'react';
import { useCallback } from 'react';
import { useState } from 'react';
// import axios from 'axios';


import Navbar from './components/navbar';
import Major from './components/major';
import Sections from './components/sections';
import Inner from './components/inner';
import Form from './components/form';
import Contact from './components/contact';
import Footer from './components/footer';





const App = () => {

    const getStarted = useCallback(text => {
        console.log('들어오긴해?')
        return null;

    });



    return (

        <>            
            <Navbar></Navbar>
            <Major switchText = {getStarted}></Major>
            <Sections></Sections>
            <Inner ></Inner>
            <Form></Form>
            <Contact></Contact>
            <Footer></Footer>
            
            </>


    );

}

export default App;