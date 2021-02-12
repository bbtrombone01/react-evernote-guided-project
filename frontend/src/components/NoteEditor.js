import React, { Component } from 'react';

class NoteEditor extends Component {

  state = {
    note: {title: this.props.note.title, body: this.props.note.body},
  }

  editForm=(event)=>{
    const note ={
      ...this.state.note,
      [event.target.name]: event.target.value,
    }
    this.setState({note})
    // console.log(note)
  }


  // saveEdit=(event)=>{
  // //  console.log(this.props)

  //   event.preventDefault()
  //   console.log(this.props)
  //   let testing = this.state
  //   testing["id"] = this.props.note.id
  //   testing["user"] = 
  //   debugger
  //   fetch(`http://localhost:3000/api/v1/notes/${this.props.note.id}`,{
  //     method: 'PATCH',
  //     headers: {"Content-Type": "application/json"},
  //     body: JSON.stringify(testing)
  //   })
  //   .then(res => res.json())
  //   .then(console.log("abt"))
  //   // debugger
  // }

  // cancleChange(){


  //   this.setState({note: this.props.note})
  // }

  render() {
    return (
      <form 
      className="note-editor" 
      onSubmit={ (event)=>this.props.save(this.state,event)}>
        <input 
        type="text" 
        name="title" 
        value={this.state.note.title} 
        onChange={this.editForm}
        /> 
        <textarea 



        name="body"
        value={this.state.note.body} 
        onChange={this.editForm} /> 
       
        <div className="button-row">
          <input className="button" type="submit" value="Save" />
          <button 
          type="button"
          onClick={this.props.cancle}>Cancel</button>
        </div>  
      </form>
    );
  }
}

export default NoteEditor;
