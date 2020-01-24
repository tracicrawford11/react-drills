import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super ()

    this.state = {
      family: ['Traci', 'Tony', 'Cameron', 'Juston', 'Doice']
    }
  }
  render () {
    let closeFamily = this.state.family.map((element, index) => {
      return <h2 key={index}> {element}</h2>
    })
    return <div className='App'>{ closeFamily }</div>
  }
}  

export default App;
//.map is going through each element in the array and returning each one in its own <h2> under the variable closeFamily
//the second return is returning the variable closeFamily as the newly created <h2>'s