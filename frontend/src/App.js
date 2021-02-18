import React from "react"
import {Route, BrowserRouter as Router ,Link} from 'react-router-dom'
import EverNote from './components/EverNote'
import Error from './Error'
import Starting from './Starting'

class  App extends React.Component{


    render(){
        return (
        <Router >
        <div>
            <Link to="/home">
                <button> head home</button>
            </Link>
            <Link to="/EverNote">
               <button> press to head to evernote</button>
            </Link>
        </div>
        <Route exact path="/EverNote" component={EverNote}/>
        <Route  path ="/home" exact component={Starting}/>
        {/* <Route component={Error}></Route> */}
        </Router>)
    }

}


export default App