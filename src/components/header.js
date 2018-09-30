import React from 'react'
import { Link } from 'gatsby'

const Header = () => (
  <div className="pv4 flex justify-between items-center">
    <h1 className="f4 fw5">
      <Link to="/" className="link near-black fw6">
        Cristiano Dalbem
      </Link>
    </h1>

    <div className="f7 dn db-ns">
      <a className="link dim dark-gray ml4 ttu fw6 selected-tab" href="#about" >
        {/* <a className="link dim dark-gray ml4 ttu fw6" href="#about" >  */}
        About Me
      </a>
      <a className="link dim gray ml4 ttu fw6" href="#work" >
        Work
      </a>
      <a className="link dim gray ml4 ttu fw6" href="#projects" >
        Projects
      </a>
      <a className="link dim gray ml4 ttu fw6" href="#speaking" >
        Speaking
      </a>
      <a className="link dim gray ml4 ttu fw6" href="#elsewhere" >
        Elsewhere
      </a>
    </div>
  </div>
)

export default Header
