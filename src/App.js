import React, {Component} from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Home from "./components/Home/Home"
import About from "./components/About/About"
import Blog from "./components/Blog/Blog"
import Pages from "./components/Pages/Pages"
import Contact from "./components/Contact/Contact";
import Last from "./components/Last/Last";
import Hos from "./components/Hos/Hos";
import New from "./components/New/New";

class App extends Component {
render() {
  return(
 <div>
   <BrowserRouter>
  <Switch>
    <Route exact path="/" component={Home}/>
    <Route exact path="/about" component={About}/>
    <Route exact path="/Blog" component={Blog}/>
    <Route exact path="/Pages" component={Pages}/>
    <Route exact path="/Contact" component={Contact}/>
    <Route exact path="/Last" component={Last}/>
    <Route exact path="/Hos" component={Hos}/>
    <Route exact path="/New" component={New}/>
    
  
  </Switch>
 </BrowserRouter>
 </div>
  );

  }
}
export default App;
