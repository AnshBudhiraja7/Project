import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Firebase from '../Firebase'

const Signup = () => {
    const navigate=useNavigate()
    const[obj,setobj]=useState({})
    function set(event){
      setobj({...obj,[event.target.name]:event.target.value})
    }
    function EmailChange(email){
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailPattern.test(email)
  }
   async function Submit(e)
    {
     try{

      e.preventDefault()
      if(!obj.Email || !obj.Password) return alert("Field is Empty")

       var response= EmailChange(obj.Email)
       if(!response) return alert("Email Address is not valid")

     var result=await Firebase.createUserWithEmailAndPassword(obj.Email,obj.Password)
      console.log(result,result.user.uid);

     }catch(err)
     {
      console.log(err);
      alert("Account Already Exists")
            
     }
      
    }
  return (
    <div className='container'>
    <h1 className="text-center text-white">Create Account</h1>
    <div className="container text-white">
      <form>
          <label>Email:</label>
          <input type="email" onChange={set} name='Email' className="form-control" placeholder='Enter your Email' />
          <label>Password:</label>
          <input type="password" onChange={set} name='Password' className="form-control" placeholder='Enter your Password' />
          <button className='btn btn-success' onClick={Submit}>Signup</button>
          <button className='btn btn-primary' onClick={()=>navigate("/")}>Login</button>
      </form>
    </div>
  </div>
  )
}
export default Signup