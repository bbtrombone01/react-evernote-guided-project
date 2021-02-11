import React from 'react';
import NoteItem from './NoteItem';

const NoteList = (props) => {

  const note = props.NoteList.map( note =><NoteItem item={note}/>)
  return (
    <ul>
      {/* Render list of notes here... */}
      {note}
    </ul>
  );
}

export default NoteList;
