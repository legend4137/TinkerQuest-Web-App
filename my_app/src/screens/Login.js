import React from 'react'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom';
import Footer from '../components/Footer'

export default function Login() {
  return (

    <div>
    <Navbar/>

    <form className='form'>
  <div className="mb-3">
    <h1 className='fs-2'>Login</h1>
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" />
  </div>

  <button type="submit" className="btn btn-primary">Submit</button>
  <Link  className="link-info link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover" aria-current="page" to="/register">Register Now!</Link>
</form>
    <Footer />
    </div>

  );
}
