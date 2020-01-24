import React, {Component} from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super ()
    this.state = {
      filterString: '',
      family: ['Traci', 'Tony', 'Cameron', 'Juston', 'Doice']
    }
  }
  handleChange(filter) {
    this.setState({ filterString: filter })
  }
  render () {
    let closeFamily = this.state.family.filter(( element, index) => {
      return element.includes(this.state.filterString)
    })
    .map((element, index) => {
      return <h2 key= {index}> {element}</h2>
    })

    return (
      <div className="App">
        <input onChange={e => this.handleChange(e.target.value)} type='text'/> {closeFamily}
      </div>
    )
  }
}

export default App;
