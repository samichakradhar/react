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
    <h1>{item.question}</h1>
    <h3>{item.answer}</h3>
  <h1>{item.question_np}</h1>
  <h3>{item.answer_np}</h3>
  </div>
  return (cellData);
}   