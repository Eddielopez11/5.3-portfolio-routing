import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render() {
    return (
      <main>
        <h2>Projects</h2>
        <Link to="/projectdetails/todolist">
          Todo list
          <p>
            A simple todo app to record things that have to be done.
          </p>
        </Link>
        <Link to="/projectdetails/newsfeed">
          Newsfeed item
          <p>
            Farely new to react on this project but still pretty fun. Translated
            a simple layout with react.
          </p>
        </Link>
      </main>
    )
  }
})
