import logo from './logo.svg';
import './App.css';
import Home from './screens/Home'
import Tests from './screens/Tests'
import Login from './screens/Login'
import Patients from './screens/Patients'
import Dashboard from './screens/Dashboard'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
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
      </Routes>
    </div>
    </Router>
  );
}

export default App;
