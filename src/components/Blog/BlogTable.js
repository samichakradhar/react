import React from 'react';
import Cell from './Cell'

export default class  BlogTable extends React.Component {
    renderHeadingRow = (_cell, cellIndex) => {
      const {blogList} = this.props;
  
      return (
        <Cell
          key={`heading-${cellIndex}`}
          content={blogList[cellIndex]}
          header={true}
        />
      )
    };
    renderRow = (_row, rowIndex) => {
      const {rows} = this.props;
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
      const {blogList} = this.props;
  
      
      return(
        <div>
      {blogList.map((item, index) => (
        <Cell key={index} item={item} />
      ))}
    </div>
      )

    }
  }