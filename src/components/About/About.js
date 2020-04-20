import React, {Component} from 'react';
import Navbar from "../partials/Navbar";
import Table from "./Table";
export default class About extends React.Component {
    state = {
      loading: true,
      aboutList: []
    };
  
    async componentDidMount() {
      const url = "https://nepalcorona.info/api/v1/podcasts";
      const response = await fetch(url);
      const info = await response.json();
    this.setState({ aboutList: info.data, loading: false });
    }
  
    render() {
     
  
      // const peopleJsx = [];
  
      // this.state.people.forEach(person => {
      //   peopleJsx.push(
      //     <div key={person.name.first + person.name.last}>
      //       <div>{person.name.title}</div>
      //       <div>{person.name.first}</div>
      //       <div>{person.name.last}</div>
      //       <img src={person.picture.large} />
      //     </div>
      //   );
      // });
  
      return (
        <div>
           <div><Navbar/></div>,
          
          <div> <Table aboutList={this.state.aboutList} /></div>
        </div>
      );
    }
  }
// const personList = persons.map(person => {
//   return(
//  <div>
//      <div><Navbar/></div>
//      <div>
//       <header className="lv-bg">
          
//         </header>
      
//         <div className="container-fluid inner">
//           <table className="tableizer-table">
//             <tbody><tr className="tableizer-firstrow"><th>Country</th><th>total cases</th><th>New cases</th><th>Total deaths</th><th>New deaths</th><th>Active cases</th><th>Total recovered</th><th>Critical cases</th></tr>
//               <tr><td>{person.country}<div className="c ab-bg" /></td><td>{person.totalCases}</td><td>{person.newCases}</td><td>{person.totalDeaths}</td><td>{person.newDeaths}</td><td>{person.activeCases}</td><td>{person.totalRecovered}</td><td>{person.criticalCases}</td></tr>
//                </tbody></table>
//         </div>
//       </div> 
//    </div>
//   );

//   })
//   return <div>{personList}</div>
// }
// export default About;
