import React, { Component } from 'react';
import './App.css';
import Todo from './components/Todo'

class App extends Component {
  constructor() {
    super ()
    
    this.state = {
      list: [],
      input: ''
    }
    this.handleAddTask = this.handleAddTask.bind(this);
    }
    handleInputChange(value) {
      this.setState ({ input: value })
    }
    handleAddTask() {
      this.setState ( {
        list: [...this.state.list, this.state.input],
        input: ''
      })
    }
    render () {
      let list = this.state.list.map((element, index) => {
        return <Todo key={index} task={element}/>
      })
      return (
        <div className='App'> <h1>My ToDo List:</h1> 
          <div>
          <input value ={this.state.input} placeholder = 'Enter New Task' onChange= {e => this.handleInputChange(e.target.value)}/>
          <button onClick={this.handleAddTask}> Add </button>
          </div>
        <br/>
        {list}
        </div>
      )
    }
}

export default App;
