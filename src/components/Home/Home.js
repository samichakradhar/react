import React, {Component} from 'react';
import Navbar from "../partials/Navbar"

import Counter from '../Home/Counter';
import Table from '../Home/Table';
import Blog from "../Blog/Blog";
import Pages from "../Pages/Pages";
import Contact from "../Contact/Contact";
import Last from "../Last/Last";
import Hos from "../Hos/Hos";
import New from "../New/New";




class Home extends React.Component{
render() {
  return(

    <div >
     
      <Navbar/>
      <Counter/>
      <Table/>
      <Blog/>
      <Pages/>
      <Contact/>
      <Last/>
     <Hos/>
      <New/>
    </div>
  
  
  
  )}
};

export default Home;





// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA






// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
