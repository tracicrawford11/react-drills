import React, { Component }from 'react';
import './App.css';

class App extends Component {
  constructor () {
    super ()
    this.state = {
      message: ""
    }
  }
  handleChange(val) {
    this.setState ( { message: val })
  }

  render () { 
  return (
    <div className="App">
      <input onChange = {e => this.handleChange(e.target.value)} type='text'></input>
      <p> {this.state.message}</p>
    </div>
    
    )
  }
}

export default App;
//Basic code for creating an input box that receives text as you type.