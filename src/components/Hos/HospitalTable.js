import React from 'react'


export default class Table extends React.Component {
    
 
    constructor(props){
    super(props);
    this.getHeader = this.getHeader.bind(this);
    this.getRowsData = this.getRowsData.bind(this);
    this.getKeys = this.getKeys.bind(this);

    }

    
    getKeys = function(){
            return Object.keys(this.props.hospitalList[0]);
    }
    getHeader = function(){
        const headings = [
            "name",
            "contact person",
            "contact person number",
            "address",
            "phone",
            "website",
            "email",
            "notes"
          ];


        var keys = headings;
        return keys.map((key, index)=>{
        return <th key={key}>{key.toUpperCase()}</th>
        })
        }
   

        getRowsData = function(){
        
            var items = this.props.hospitalList
            return items.map((row, index)=>{
                console.log(row.name)
            return <tr  key={row._id}><RenderRow data={row}/></tr>
            })
           
            }
    
      
    
    render() {

     
        
    return (
    <div className="container-fluid inner">
    <table className="tableizer-table">
    <tbody>
    <tr className="tableizer-firstrow"><th>{this.getHeader()}</th></tr>
    
  <tr>
    {this.getRowsData()}</tr>
    </tbody>
    </table>
    </div>
    
    );
    }
   }
   const RenderRow = (props) =>{
   return <div>
       <td key={props._id}> {props.data.name}<div className="c ab-bg" /></td><td key={props._id}> {props.data.contact_person}</td><td key={props._id}> {props.data.contact_person_number}</td><td key={props._id}> {props.data.address}</td><td key={props._id}> {props.data.phone}</td><td key={props._id}> {props.data.notes}</td>
 </div>
   }
   