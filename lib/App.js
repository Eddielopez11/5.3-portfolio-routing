import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render() {
    return (
      <div>
        <nav>
          <Link to="/Profile"> Profile </Link>
          <Link to="/Blog"> My Blog </Link>
          <Link to="/Projects"> Projects </Link>
          <Link to="/ProjectDetails"> Project Details </Link>
        </nav>
      { this.props.children }
      </div>
    )
  }
})
