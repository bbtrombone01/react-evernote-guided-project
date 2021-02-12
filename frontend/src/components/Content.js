import React, { Component } from 'react';
import NoteEditor from './NoteEditor';
import NoteViewer from './NoteViewer';
import Instructions from './Instructions';


class Content extends Component {



  renderContent = () => {
    if (this.props.true === true) {
      return <NoteEditor  
      cancle={this.props.stop}
      note={this.props.note} 
      save={this.props.save}/>;
    } else if (this.props.note.body) {
      return <NoteViewer  
      info={this.props.note} 
      startEdit={this.props.startEdit}/>;
    } else {
      return <Instructions />;
    }
  }

  render() {
    return (
      <div className='master-detail-element detail'>
        {this.renderContent()}
      </div>
    );
  }
}

export default Content;
