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
    let change = event.target.name
    let changeinfo = event.target.value
   
    something[change] =changeinfo
    this.setState({
      showNote: something
    })
  }

  saveEdit=(event)=>{
    let testing = this.state.showNote
    event.preventDefault()
    fetch(`http://localhost:3000/api/v1/notes/${testing.id}`,{
      method: 'PATCH',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(testing)
    })
    .then(res => res.json())
    .then(console.log)
    debugger
  }

  testStuff =(event)=>{
    let holding = this.state.notes

    ///holding.filter( element => console.log( element.title.includes(event.target.value)))
    // debugger
  }



  render() {
    return (
      <Fragment>
        <Search 
        notes={this.state.notes} 
        search={this.testStuff}/>
        <div className='container'>
          <Sidebar 
          notelist={this.state.notes} 
          clickFunction={this.showContent}
          shorten={this.truncate} />
          <Content 
          note={this.state.showNote} 
          true={this.state.editNotes}
          startEdit={this.beginEdit} 
          change={this.changeNote}
          save={this.saveEdit}/>
        </div>
      </Fragment>
    );
  }
}

export default NoteContainer;
