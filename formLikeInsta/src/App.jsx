import { useState } from 'react'
import './App.css'
function App() {
const [toggle, setToggle] = useState(true);
  return (
   <div className='container'>
    <h1>Instagram</h1>
     <div className='form-input'> 
      {
        (toggle) ? <input type="text" placeholder='Enter FullName'/> : ""
      }
      <input type="text" placeholder='Enter Mobile Number or Email'/>
      <input type="password" placeholder='Enter Password'/>
      <button className='signUp-btn'>{toggle ? 'sign Up': 'Log In'}</button>
      <p> {toggle ? "have an account?" : "Don't have an account?"}  <a className='login-btn' onClick={()=> setToggle(!toggle)}> {toggle ? 'Log In' : 'sign Up'}</a> </p>
    </div>
   </div>
  )
}

export default App
