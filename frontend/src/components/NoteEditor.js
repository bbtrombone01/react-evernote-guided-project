import React, { Component } from 'react';

class NoteEditor extends Component {
  render() {
    return (
      <form className="note-editor" onSubmit={this.props.save}>
        <input type="text" name="title" value={this.props.note.title} onChange={this.props.change} /> 
        <textarea name="body" value={this.props.note.body} onChange={this.props.change} /> 
        <div className="button-row">
          <input className="button" type="submit" value="Save" />
          <button type="button">Cancel</button>
        </div>
      </form>
    );
  }
}

export default NoteEditor;
