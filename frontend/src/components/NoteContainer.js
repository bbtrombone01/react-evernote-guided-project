import React, { Component, Fragment } from 'react';
import Search from './Search';
import Sidebar from './Sidebar';
import Content from './Content';

class NoteContainer extends Component {


  state = {
    notes: [],
    showNote: [],
    somethingnotes: [],
    editNotes: false
  }
  
  
  componentDidMount(){
    fetch('http://localhost:3000/api/v1/notes')
    .then( res => res.json())
    .then( data => this.setState({notes:data }))
  }

  showContent =(props)=>{
    this.setState({showNote: props})
  }

  truncate(string,){
    // debugger
    return string.slice(0,5)+"..."
  }

  beginEdit =()=>{

    this.setState({editNotes: true})
  }

  changeNote=(event)=>{
    let something = this.state.showNote
    // something.title  ???
    // let test = event.target.value
    // console.log(this.state.showNote.title)
    //event.target.name
    let change = event.target.name

    let changeinfo = event.target.value

    something[change] =changeinfo

    // debugger
    this.setState({
      showNote: something
    })
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
          <Content 
          note={this.state.showNote} 
          true={this.state.editNotes}
          startEdit={this.beginEdit} 
          change={this.changeNote}/>
        </div>
      </Fragment>
    );
  }
}

export default NoteContainer;
