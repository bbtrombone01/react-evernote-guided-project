import React, { Component } from 'react';
import Header from './Header';
import NoteContainer from './NoteContainer';

class EverNote extends Component {



  render() {
    return (
      <div className="app">
        <Header />
        <NoteContainer />
      </div>
    );
  }
}
export default EverNote;
