import React, {Component} from 'react';
import Axios from 'axios';
 
class Test extends Component {
    constructor(props){
      super(props);
        this.state= {
          apiData:[],
        };
      }
      componentDidMount() {
        const api="https://nepalcorona.info/api/v1/sitreports";
        Axios.get(api)
        .then((response) => {
          console.log(response.data);
          this.setState({
            apiData: response.data,
          });
        })
        .catch((error) => {
          console.log(error);
        });
        
      }
    
 

render() {
    
  return (
    <div>
      {this.state.apiData.map((item) => {
          return (
              <div>
        <h1>{item.name}</h1>
        <h2>item.username</h2>
        </div>
          );
    })}
    </div>
  );
}
}
export default Test;
<BrowserRouter>
  <Switch>
    <Route exact path="/" component={Home}/>
    <Route exact path="/about" component={About}/>
    <Route exact path="/Blog" component={Blog}/>
    <Route exact path="/Pages" component={Pages}/>
    <Route exact path="/Contact" component={Contact}/>
    <Route exact path="/Last" component={Last}/>
    
  
  </Switch>
 </BrowserRouter>


import React, {Component} from './node_modules/react';
import Axios from './node_modules/axios';
 
class Test extends Component {
    constructor(props){
      super(props);
        this.state= {
          apiData:[],
          apiData1:[]
        };
      }
      componentDidMount() {
        this.apiCall("https://nepalcorona.info/api/v1/sitreports",apiData);//Array
        this.apiCall("https://nepalcorona.info/api/v1/sitreports",apiData1);//Non Array

        
      }
      apiCall=(api,stateVariable)=>{
        Axios.get(api)
        .then((response) => {
          console.log(response.data.data);
          this.setState({
            stateVariable: response.data.data,
          });
        })
        .catch((error) => {
          console.log(error);
        });
      }
    
 

render() {
    
  return (
    <div>
        {this.state.apiData.length?firstcase:secondcase}
      {this.state.apiData.map((item) => {
          return (
              <div key={item.id}>
        <h1>{item.id}</h1>
        <h2>{item.date}</h2>
        </div>
          );
    })}
    {this.state.apidata2.id}
    </div>
  );
}
}
export default Test;

import React, {Component} from 'react';
import Axios from 'axios';
 
class Test extends Component {
    
      state={
        Loading: true,
        person: null
      };
      async componentDidMount() {
         const url = "https://nepalcorona.info/api/v1/data/nepal";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({ person: data.results[0], Loading: false});
        
          
        
      }
    
 

render() {
    
  return (
    <div>
      {this.state.Loading || !this.state.person ? (

       <div>loading.. </div>
       ) : (
         <div>
           <div> {this.state.person.tested_positive}</div>
           </div>
       ) }
          
    </div>
  );
}
}
export default Test;








// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA






// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
