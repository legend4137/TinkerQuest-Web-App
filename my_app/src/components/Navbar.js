import React from 'react'
import {Link} from 'react-router-dom'; 
export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-danger">
  <div className="container-fluid">
    <Link className="navbar-brand fs-4 " to="/">RedCliffe Labs</Link>
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

      </ul>
    </div>
  </div>
</nav>

  )
}
