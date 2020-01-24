import React, {Component} from 'react';
import './App.css';

import { Link } from 'react-router-dom'
import router from './router'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <nav>
          <ul>
            <Link to='/'>HOME</Link>
            <Link to='/'>Sign Up</Link>
            <Link to='/'>Details</Link>
          </ul>
        </nav>
        <br/>
        {router}
      </div>
    )
  }
}

export default App;
