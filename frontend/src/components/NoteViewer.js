import React, { Fragment } from 'react';

const NoteViewer = (props) => {
  return (
    <Fragment>
      <h2>{props.info.title}</h2>
      <p>{props.info.body}</p>
      <button onClick={()=>props.startEdit()}>Edit</button>
    </Fragment>
  );
}

export default NoteViewer;
