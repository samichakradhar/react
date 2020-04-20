import React, {Component} from 'react';
import Navbar from "../partials/Navbar"
import DataTable from './DataTable';



class Contact extends React.Component{
    state = {
    loading: true,
    faqlist: []
  };

  async componentDidMount() {
    const url = "https://nepalcorona.info/api/v1/faqs";
    const response = await fetch(url);
    const info = await response.json();
    this.setState({ faqlist: info.data, loading: false });
  }

 

  render() {
  
    return (
      <div>
      <div><Navbar/></div>,
    
  <div><DataTable faqlist={this.state.faqlist} /></div>
  </div>
    );
   
  


//     return ( 
//       <div>
//           <div><Navbar/></div>
//         {this.state.people.map((person) => {
//           return(
//           <div key={person._id}>
//             <div><h6> id ={person._id}</h6></div>
//             <div><h6> type ={person.type}</h6></div>
//             <div><h6> lang ={person.lang}</h6></div>
//             <div><h6> question ={person.question}</h6></div>
//             <div><h6> question_np ={person.question_np}</h6></div>
//             <div><h6> answer ={person.answer}</h6></div>
//             <div><h6> answer np ={person.answer_np}</h6></div>
//             <div><h6> category ={person.category}</h6></div>
//             <div><h6> created at ={person.created_at}</h6></div>
//             <div><h6> updated at ={person.updated_at}</h6></div>
//             <div><h6> v ={person.__v}</h6></div>

             
//           </div>
//           );
//           })}
//       </div>
//         );
        
//   }

}
}
export default Contact;