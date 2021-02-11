import React, { Component, Fragment } from 'react';
import Search from './Search';
import Sidebar from './Sidebar';
import Content from './Content';

class NoteContainer extends Component {


  state = {
    notes: []
  }
  
  
  componentDidMount(){
    fetch('http://localhost:3000/api/v1/notes')
    .then( res => res.json())
    .then( data => this.setState({notes:data }))
  }


  render() {
    return (
      <Fragment>
        <Search />
        <div className='container'>
          <Sidebar notelist={this.state.notes} />
          <Content />
        </div>
      </Fragment>
    );
  }
}

export default NoteContainer;
