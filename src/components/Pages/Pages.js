import React, {Component} from 'react';
import Navbar from "../partials/Navbar"
import PagesTable from "./PagesTable";
class Pages extends React.Component{
    state = {
    loading: true,
    pagesList: []
  };

  async componentDidMount() {
    const url = "https://nepalcorona.info/api/v1/myths";
    const response = await fetch(url);
    const info = await response.json();
    
    this.setState({ pagesList: info.data, loading: false });
  }

  render() {
    return ( <div>

   
      <div><Navbar/></div>,
      <PagesTable pagesList={this.state.pagesList} /></div>
        )
        
  }

}
export default Pages;