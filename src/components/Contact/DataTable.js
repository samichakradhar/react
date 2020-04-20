import React from 'react';
import Cell from './Cell'

export default class  DataTable extends React.Component {
    renderHeadingRow = (_cell, cellIndex) => {
      const {faqlist} = this.props;
  
      return (
        <Cell
          key={`heading-${cellIndex}`}
          content={faqlist[cellIndex]}
          header={true}
        />
      )
    };
    renderRow = (_row, rowIndex) => {
      const {rows} = this.pxrops;
      console.log(rows)
      return (
        // <tr key={`row-${rowIndex}`}>
        //   {rows[rowIndex].map((_cell, cellIndex) => {
        //     return (
        //       <Cell
        //         key={`${rowIndex}-${cellIndex}`}
        //         content={rows[rowIndex][cellIndex]}
        //       />
        //     )
        //   })}
        // </tr>
        <h1>adsf</h1>
      )

    };
  
    render() {
      const {faqlist} = this.props;
  
      // this.renderHeadingRow = this.renderHeadingRow.bind(this);
      // this.renderRow = this.renderRow.bind(this);
      
      // const theadMarkup = (
      //   <tr key="faqlist">
      //     {faqlist.map(this.renderHeadingRow)}
      //   </tr>
      // );
  
      // const tbodyMarkup = rows.map(this.renderRow);
    
      // return (
      //   <table className="Table">
      //     <thead>{theadMarkup}</thead>
      //     {/* <tbody>{tbodyMarkup}</tbody> */}
      //   </table>
      // );
      return(
        <div>
      {faqlist.map((item, index) => (
        <Cell key={index} item={item} />
      ))}
    </div>
      )

    }
  }