import React, {Component} from 'react';
import Navbar from "../partials/Navbar"
import BlogTable from "./BlogTable";
class Blog extends React.Component{
    state = {
    loading: true,
    blogList: []
  };

  async componentDidMount() {
    const url = "https://nepalcorona.info/api/v1/news";
    const response = await fetch(url);
    const info = await response.json();
    this.setState({ blogList: info.data, loading: false });
  }


  

  render(){
    return(
     <div>
      <div><Navbar/></div>,
          
     <div> <BlogTable blogList={this.state.blogList} /></div>
    
     </div>
    )
  }
  // render() {
  //   return ( 
  //     <div>
  //         <div><Navbar/></div>
  //       {this.state.people.map((person) => {
  //         return(
  //         <div key={person._id}>
  //           <div><h6> id ={person._id}</h6></div>
  //           <div><h6> tags ={person.tags}</h6></div>
  //           <div><h6> lang ={person.lang}</h6></div>
  //           <div><h6> url ={person.url}</h6></div>
  //           <div><h6> title ={person.title}</h6></div>
  //           <div><h6> source ={person.source}</h6></div>
  //           <div><h6> summary ={person.summary}</h6></div>
  //           <div><h6> image url ={person.image_url}</h6></div>
  //           <div><h6> created at ={person.created_at}</h6></div>
  //           <div><h6> updated at ={person.updated_at}</h6></div>
  //           <div><h6> v ={person.__v}</h6></div>

             
  //         </div>
  //         );
  //         })}
  //     </div>
  //       );
        
  // }

}
export default Blog;