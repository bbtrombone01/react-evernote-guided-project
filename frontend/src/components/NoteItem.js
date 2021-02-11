import React from 'react';

const NoteItem = (props) => (
  
  <li onClick={ () =>props.click(props.item)}>
    <h2>{props.item.title}</h2>
    <p>{props.item.body}</p>
  </li>
);

export default NoteItem;
