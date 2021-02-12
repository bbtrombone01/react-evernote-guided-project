import React, { Component, Fragment } from 'react';
import Search from './Search';
import Sidebar from './Sidebar';
import Content from './Content';

class NoteContainer extends Component {


  state = {
    notes: [],
    showNote: [],
    somethingnotes: [],
    editNotes: false, 
  }
  
  
  componentDidMount(){
    fetch('http://localhost:3000/api/v1/notes')
    .then( res => res.json())
    .then( data => this.setState({notes:data, somethingnotes: data }))
  }

  showContent =(props)=>{
    this.setState({showNote: props, editNotes: false})
  }

  truncate(string,){
    // debugger
    return string.slice(0,5)+"..."
  }

  beginEdit =()=>{

    this.setState({editNotes: true})
  }


  saveEdit=(pros,event)=>{
    // debugger
    let testing = this.state.showNote
    event.preventDefault()
    testing.title = pros.note.title
    testing.body = pros.note.body
    console.log(this.state.showNote)
    // debugger
    fetch(`http://localhost:3000/api/v1/notes/${testing.id}`,{
      method: 'PATCH',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(testing)
    })
    .then(res => res.json())
    .then(this.setState({showNote: testing}))
    // debugger
  }

  newNote=()=>{
    this.setState({editNotes: false})
    let defaultNote = {
      title: "Default",
      body: "value",
      user: {
        id: 1,
        name: "bbtrombonw"
      }
    }
    fetch('http://localhost:3000/api/v1/notes',{
      method: `POST`,
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(defaultNote)
    })
    .then(res => res.json())
    .then(this.componentDidMount())

    // debugger
  }

  testStuff =(event)=>{
    let holding = this.state.notes
    let newArray = []
    holding.filter( element => element.title.toLowerCase().includes(event.target.value.toLowerCase())? newArray.push(element) : null )
    this.setState({somethingnotes: newArray})
    // console.log(event.target.value)

    ///holding.filter( element => console.log( element.title.includes(event.target.value)))
    // debugger
  }


  postNote =(event)=>{
    let testing ={}
    testing["title"] = event.target[0].value
    testing["body"] = event.target[1].value
    // debugger
    fetch('http://localhost:3000/api/v1/notes',{
      method: `POST`,
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(testing)
    })
    .then(res => res.json())
    .then(this.componentDidMount())
    this.setState({editNotes: false})
  }

  cancleButton=()=>{
    this.setState({editNotes: false})
  }
  

  render() {
    return (
      <Fragment>
        <Search 
        notes={this.state.notes} 
        search={this.testStuff}/>
        <div className='container'>
          <Sidebar 
          notelist={this.state.somethingnotes} 
          clickFunction={this.showContent}
          shorten={this.truncate} 
          save={this.newNote}/>
          <Content 
          note={this.state.showNote} 
          true={this.state.editNotes}
          startEdit={this.beginEdit} 
          save={this.saveEdit}
          stop={this.cancleButton}/>
        </div>
      </Fragment>
    );
  }
}

export default NoteContainer;
