import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
   <>
   <nav className="navbar navbar-expand-lg  bg-dark">
  <div className="container-fluid">
   
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active text-white" aria-current="page" to="/Home">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active text-white" aria-current="page" to="/General">General</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active text-white" aria-current="page" to="/bussiness">bussiness</Link>
        </li><li className="nav-item">
          <Link className="nav-link active text-white" aria-current="page" to="/Entertainment">Entertainment</Link>
        </li><li className="nav-item">
          <Link className="nav-link active text-white" aria-current="page" to="/science">science</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active text-white" aria-current="page" to="/sports">sports</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active text-white" aria-current="page" to="/Technology">Technology</Link>
        </li>

      

      </ul>
     
    </div>
    <Link className="navbar-brand text-white" to="/">NEWS Arena</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  </div>
</nav>
   </>
  )
}

export default Navbar
