import React from 'react'
import Navbar from '../components/Navbar'
import Home from './Home'

export default function Register() {
  return (
    <div>
        <Navbar/>
        <form className='register'>
        <h1 className='fs-3 ' style={{margin: 15 + 'px'}}>Register Account</h1>
        <div class="row" style={{margin: 13 + 'px', marginBottom: 23 + 'px'}}>
         <div class="col">
           <input type="text" class="form-control" placeholder="First name" aria-label="First name"/>
        </div>
        <div class="col">
         <input type="text" class="form-control" placeholder="Last name" aria-label="Last name"/>
       </div>
        </div>
        <div className="input-group  " style={{width:98 + '%', marginLeft: 13 + 'px'}}>
        <input type="text" className="form-control username" placeholder="username" aria-label="username" aria-describedby="basic-addon2"/>
       <span className="input-group-text" id="basic-addon2">@example.com</span>
       </div>
        <div className="form-group mx-sm-3 mb-2">
        <label for="inputPassword2" className="sr-only">Set Password</label>
        <input type="password" className="form-control" id="inputPassword2" placeholder="Password"/>
      </div>
      <div className="form-group mx-sm-3 mb-2">
       <label for="inputPassword2" className="sr-only">Confirm Password</label>
       <input type="password" className="form-control" id="inputPassword2" placeholder="Password"/>
       </div>
       <div class="form-check" style={{margin: 13 + 'px'}}>
     <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
     <label class="form-check-label" for="flexCheckDefault">
        I Agree to all the Terms and Conditions.
    </label>
    </div>
       <div className="d-grid gap-2 d-md-block">
         <button className="btn btn-primary" type="button" >Submit</button>
       </div>

  
        </form>
    </div>
  )
}
