import React, {Component} from 'react';
import Navbar from "../partials/Navbar"

class New extends React.Component {
  state = {
    loading: true,
    person: null
  };

  async componentDidMount() {
    const url = "https://nepalcorona.info/api/v1/data/nepal";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ person: data, loading: false });
  }

  render() {
    if (this.state.loading) {
      return <div>loading...</div>;
    }

    if (!this.state.person) {
      return <div>didn't get a person</div>;
    }

    return (
      <div>
        <div><Navbar/></div>
  
      <div>
      <header className="lv-bg">
          
        </header>
      
        <div className="container-fluid inner">
          <table className="tableizer-table">
            <tbody><tr className="tableizer-firstrow"><th>Tested Positive</th><th>Tested Negative</th><th>Tested total</th><th>In isoloation</th><th>Result</th><th>deaths</th><th>Recovered</th></tr>
              <tr><td>{this.state.person.tested_positive}<div className="c ab-bg" /></td><td>{this.state.person.tested_negative}</td><td>{this.state.person.tested_total}</td><td>{this.state.person.in_isolation}</td><td>{this.state.person.pending_result}</td><td>{this.state.person.deaths}</td><td>{this.state.person.recovered}</td></tr>
               </tbody></table>
        </div>
      </div>
    
  


        
        
        
        
      </div>
    );
  }
}
export default New;