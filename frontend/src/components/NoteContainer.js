import React, { Component, Fragment } from 'react';
import Search from './Search';
import Sidebar from './Sidebar';
import Content from './Content';

class NoteContainer extends Component {


  state = {
    notes: [],
    contentNote: []
  }
  
  
  componentDidMount(){
    fetch('http://localhost:3000/api/v1/notes')
    .then( res => res.json())
    .then( data => this.setState({notes:data }))
  }

  showContent =(props)=>{
    this.setState({contentNote: props})
  }

  truncate(string,){
    // debugger
    return string.slice(0,5)+"..."
  }

  render() {
    return (
      <Fragment>
        <Search />
        <div className='container'>
          <Sidebar 
          notelist={this.state.notes} 
          clickFunction={this.showContent}
          shorten={this.truncate} />
          <Content note={this.state.contentNote} />
        </div>
      </Fragment>
    );
  }
}

export default NoteContainer;
