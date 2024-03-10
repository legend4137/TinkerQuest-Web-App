import React from 'react'
import {Link} from 'react-router-dom'; 
import Typewriter from 'typewriter-effect';

export default function Navbar() {
  return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-dark bg-danger fixed-top" >
  <div className="container-fluid">
    <Link className="navbar-brand fs-4 fs-italic" to="/"><Typewriter
  options={{
    strings: ['RedCliffe Labs', 'RedCliffe Labs'],
    autoStart: true,
    loop: true,
  }}
/></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarNav">
      <ul className="navbar-nav ms-auto">
      <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/dashboard">Dashboard</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active"aria-current="page" to="/tests">Tests</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/patients">Patients</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/login" >login</Link>
        </li>
        <li className="nav-item">
                 <input class="form-control mr-sm-2 bg-light" style={{color: "black"}}  type="search" placeholder="Search" aria-label="Search"/>
                </li>
        <li className='nav-item'>
        <button class="btn btn-outline-dark my-2 my-sm-0" type="submit">Search</button>
        </li>

      </ul>
    </div>
  </div>
</nav>
      <div style={{ marginTop: '70px' }}> {/* Add margin top to avoid overlap */}
      {/* Your content goes here */}
    </div>
    </div>

  )
}
