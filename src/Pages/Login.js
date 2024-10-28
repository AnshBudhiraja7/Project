import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Firebase from '../Firebase'

const Login = () => {
    const navigate=useNavigate()
    const[obj,setobj]=useState({})
    function set(event)
    {
      setobj({...obj,[event.target.name]:event.target.value})
    }
   async function Submit(e){
      try{

        e.preventDefault()
      if(!obj.Email || !obj.Password) return alert("Field is Empty")

    var result= await Firebase.signInWithEmailAndPassword(obj.Email,obj.Password)
    console.log(result.user.uid)

      }
      catch(err)
      {
        console.log(err);
        alert("Invalid Credentials")
      }
    }
  return (
    <div className='container'>
      <h1 className="text-center text-white">Login</h1>
      <div className="container text-white">
        <form>
            <label>Email:</label>
            <input type="email" name='Email' onChange={set} className="form-control" placeholder='Enter your Email' />
            <label>Password:</label>
            <input type="password" name='Password' onChange={set} className="form-control" placeholder='Enter your Password' />
            <button className='btn btn-success' onClick={Submit}>Login</button>
            <button className='btn btn-primary' onClick={()=>navigate("/Signup")}>Signup</button>
        </form>
      </div>
    </div>
  )
}

export default Login
