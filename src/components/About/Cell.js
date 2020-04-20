import * as React from 'react';

export default function Cell({
  key,
  item,
}) {

  // const cellMarkup = header ? (
  //   <th className="Cell Cell-header">
  //     {content}
  //   </th>
  // ) : (
  //   <td className="Cell">
  //     {content}
  //   </td>
  // );

  const cellData = 
  <div>
    <h1>{item.title}</h1>
    <h2>source: {item.source}</h2>
    <img 
      src={item.image_url}
      alt="new"
      />
  <h2>{item.summary}</h2>
  
  </div>
  return (cellData);
}   