import React, {Component} from 'react';
import Navbar from "../partials/Navbar";
import HospitalTable from "./HospitalTable";

class Hos extends React.Component{
    state = {
    loading: true,
    hospitalList: []
  };

  async componentDidMount() {
    const url = "https://nepalcorona.info/api/v1/hospitals";
    const response = await fetch(url);
    const info = await response.json();
    const length = 794;
    // console.log(info.data)
    this.setState({ hospitalList: info.data, loading: false });
    // console.log(this.state.hospitalList);
     }
  

  render(){
    return(<div>
      <div><Navbar/></div>
        
         <div> 
      <HospitalTable hospitalList ={this.state.hospitalList} /></div>
      
      </div>
    )
  }


 

}
export default Hos;