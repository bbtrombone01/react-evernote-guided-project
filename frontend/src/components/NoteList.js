import React from 'react';
import NoteItem from './NoteItem';

const NoteList = (props) => {

  const note = props.NoteList.map( note =><NoteItem item={note} click={props.clickFunction} shorten={props.shorten} key={note.id}/>)
  return (
    <ul>
      {note}
    </ul>
  );
}

export default NoteList;
