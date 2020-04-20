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
    <h1>myths: {item.myth}</h1>
    <h2>reality: {item.reality}</h2>
    <h2>source: {item.source}</h2>
    <img 
      src={item.image_url}
      alt="new"
      />
    <h1>myth in nepal: {item.myth_np}</h1>
    <h1>reality: {item.reality_np}</h1>
  
  </div>
  return (cellData);
}   