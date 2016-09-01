import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  getDefaultProps(){
    return {
      projects: {
        "todolist": {
          projectname: "Todo list",
          description: "This app was made in week 3 while in The Iron Yard. The user can imput todo items to their list. they can then check off when an item is complete and it is then counted by the completed counter. The user also has the option of deleting their todo off of the list."
        },
        "newsfeed": {
          projectname: "Newsfeed",
          description: "Newsfeed was a project involving react. It was the second day working with react and I created a similar layout to what an article might look like in Facebook. No real functionality... yet, but it was more of a dipping my toes in the water with react."
        }
      }
    }
  },
  render() {
    let currentProjectObject = this.props.projects[this.props.params.projectname];
    return (
      <main>
        <nav>
          <Link to="/projects">Back to Projects</Link>
        </nav>
        <h2>My { currentProjectObject.projectname } Project</h2>
        <p>
          { currentProjectObject.description }
        </p>
      </main>
    )
  }
})
