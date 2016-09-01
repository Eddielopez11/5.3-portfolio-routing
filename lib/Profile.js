import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render() {
    return (
      <main>
        <img className="profile__avatar"
             src="assets/TIY-avatar.jpg"
             alt="eduardo lopez's avatar"/>
        <h1>Eduardo Lopez</h1>
        <span>San Antonio, Texas</span>
        <div>
          <span> github:</span>
          <a href="https://github.com/Eddielopez11/"> Eddielopez11 </a>
        </div>
        <p>
          <span>A little about myself: </span>
          Born in Turlock, California in the year 1993. Moved to San Antonio, Texas
          around 2004. I was always very interested in technology all through
          highschool, but always felt as if I needed money. I started working
          right after I graduated in a warehouse, when I soon realized I was
          hungry for more. At 19 years old i set my eyes on getting my
          CDL(commercial drivers licence). Did that for 3 years before asking
          myself if thats what I wanted to do for the rest of my life... of
          course it wasn't! So here I am getting back into tech, becoming a
          developer, which I love. Check out some of my projects and see how
          much I've grown
        </p>
      </main>
    )
  }
})
