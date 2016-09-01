import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import App from './lib/App'
import Profile from './lib/Profile'
import Blog from './lib/Blog'
import Projects from './lib/Projects'
import ProjectDetails from './lib/ProjectDetails'

render((
  <Router history={ hashHistory }>
    <Route path="/" component={App}>
      <Route path="/profile" component={ Profile }/>
      <Route path="/blog" component={ Blog }/>
      <Route path="/projects" component={ Projects }/>
      <Route path="/projectdetails/:projectname" component={ ProjectDetails }/>
    </Route>
  </Router>
), document.getElementById('portfolio'))
