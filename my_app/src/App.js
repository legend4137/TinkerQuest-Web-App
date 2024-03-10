import logo from './logo.svg';
import './App.css';
import Home from './screens/Home'
import Tests from './screens/Tests'
import Login from './screens/Login'
import Patients from './screens/Patients'
import Dashboard from './screens/Dashboard'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Notfound from './screens/Notfound';
import Register from './screens/Register';
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {
  return (
    <Router>
    <div>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/dashboard" element={<Dashboard/>} />
        <Route exact path='/login' element={<Login/>}/>
        <Route exact path='/tests' element={<Tests/>}/>
        <Route exact path='/patients' element={<Patients/>}/>
        <Route exact path='/register' element={<Register/>}/>
        <Route exact path='*' element={<Notfound/>}/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
