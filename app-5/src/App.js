import React, { Component } from 'react';
import './App.css';
import Image from './components/Image'

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Image url = { "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/19132914/Catahoula-Leopard-Dog-herding-cattle.jpg" } alt=''/>
      </div>
    )
  }
}

export default App
