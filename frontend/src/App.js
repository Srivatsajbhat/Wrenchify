import React from 'react';
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Serv from './Components/Serv';
import Subscription from './Components/Subscription';
import Search from './Components/Search';
// import Login from './Components/Login';
import styled from "styled-components";
import AccountBox from "./Components/Login/index";

function App() {

  const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/search' element={<Search />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/service' element={<Serv />}></Route>
        <Route path='/subscription' element={<Subscription/> }></Route>
        {/* <Route path='/profile' element={<Login />}></Route> */}
        <Route path='/profile' element={<AccountBox />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
