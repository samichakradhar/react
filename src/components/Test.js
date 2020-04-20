import React, {Component} from 'react';
import Navbar from "../partials/Navbar"

class Test extends React.Component {
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
        <div><h6>tested positive : {this.state.person.tested_positive}</h6></div>
        <div><h6>tested negative{this.state.person.tested_negative}</h6></div>
        <div><h6>tested total{this.state.person.tested_total}</h6></div>
        <div><h6>in isolation{this.state.person.in_isolation}</h6></div>
        <div><h6>result{this.state.person.pending_result}</h6></div>
        <div><h6>recovered{this.state.person.recovered}</h6></div>
        <div><h6>deaths{this.state.person.deaths}</h6></div>
        <div><h6>source{this.state.person.source}</h6></div>
        <div><h6>updated at{this.state.person.updated_at}</h6></div>
        <div><h6>latest sit report</h6></div>
        <div><h6>type{this.state.person.latest_sit_report.type}</h6></div>
        <div><h6>id{this.state.person.latest_sit_report._id}</h6></div>
        <div><h6>no{this.state.person.latest_sit_report.no}</h6></div>
        <div><h6>date{this.state.person.latest_sit_report.date}</h6></div>
        <div><h6>url{this.state.person.latest_sit_report.url}</h6></div>
        <div><h6>created at{this.state.person.latest_sit_report.created_at}</h6></div>
        <div><h6>updated at{this.state.person.latest_sit_report.updated_at}</h6></div>
        
        
        
      </div>
    );
  }
}
export default Test;