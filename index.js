import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import Navbar from './lib/Navbar'
import Profile from './lib/Profile'
import Blog from './lib/Blog'
import Projects from './lib/Projects'
import ProjectDetails from './lib/ProjectDetails'

render((
  <Router history={ hashHistory }>
    <Route path="/" component={Navbar}>
      <Route path="/profile" component={ Profile }/>
      <Route path="/blog" component={ Blog }/>
      <Route path="/projects" component={ Projects }/>
      <Route path="/projectdetails" component={ ProjectDetails }/>
    </Route>
  </Router>
), document.getElementById('portfolio'))
