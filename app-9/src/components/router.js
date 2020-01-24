import React, {Component} from 'react'
import {Switch, Route} from 'react-router-dom'
//import Home from './Home'
import Signup from './Signup'
import Details from './Details'


export default (
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route path ='/Signup' component ={Signup}/>
        <Route path= '/details' component ={Details}/> 
    </Switch>
)

export default router
