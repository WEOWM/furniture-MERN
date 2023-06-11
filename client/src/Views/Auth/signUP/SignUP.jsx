import React, { useState } from 'react'
import './SignUP.css'
import {Col,  Row} from 'react-bootstrap'
import { NavLink, useNavigate } from 'react-router-dom'

const SignUP = () => {
  const [Name, setname] = useState("")
  const [Email, setemail] = useState("")
  const [Password, setPassword] = useState("")

  const navigate = useNavigate()

  const submit = (e) =>{
    e.preventDefault();
    console.log(Name, Email, Password);
    navigate("/sign-in")
  }
  return (
    <div className='signup-body'>
       <Row className='p-0 m-0'>
       
        <Col md={4}  className='p-0 m-0'>
            <div className="sigup-img">

            </div>
         </Col>
         <Col md={8}   className='signup-form p-0 m-0' >
            <div className="signup-Box">
               <h2 style={{display:"flex",alignItems:"center"}}>Sign Up</h2>
                <input onChange={(e)=>{setname(e.target.value)}} className='sign-input' type="text" name=""  placeholder='Name'/>
                <input onChange={(e)=>{setemail(e.target.value)}} className='sign-input' type="email" name=""   placeholder='Email'/>
                <input onChange={(e)=>{setPassword(e.target.value)}} className='sign-input' type="password" name=""   placeholder='Password'/>
                <button onClick={(e)=>submit(e)} className='sign-btn'>Sign up</button>
                <div style={{display:"flex",alignItems:"center"}} >
                <p className='m-0 me-2'>Have an Account?</p> <NavLink to={'/sign-in'}> Sign in</NavLink>
               </div>
               

            </div>
            
         
         </Col>
        
       
       </Row>

    </div>
  )
}

export default SignUP