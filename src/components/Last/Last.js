import React, {Component} from 'react';
import Navbar from "../partials/Navbar"
class Last extends React.Component{
    state = {
    loading: true,
    people: []
  };

  async componentDidMount() {
    const url = "https://nepalcorona.info/api/v1/data/allnepali";
    const response = await fetch(url);
    const info = await response.json();
    const length = 794;
    this.setState({ people: info.data, loading: false });
  }

  render() {
    return ( 
      <div>
          <div><Navbar/></div>
          
       
            

         
             <div className="container-fluid inner">
          <table className="tableizer-table">
            <tbody><tr className="tableizer-firstrow"><th>Date</th><th>Country</th><th>Total cases</th><th>Deaths</th><th>Source</th></tr>
            </tbody></table>
            {this.state.people.map((person) => {
          return(
            <div className="container-fluid inner">
           <table className="tableizer-table"> <tbody>
              <tr className="tableizer-firstrow"><td>{person.date}<div className="c ab-bg" /></td><td>{person.country}</td><td>{person.totalCases}</td><td>{person.deaths}</td><td>{person.source}</td></tr>
               </tbody></table>
               </div>
               );
          })}
        </div>
           
             
          
          
      </div>
        );
        
  }

}
export default Last;