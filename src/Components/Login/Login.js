import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'

import  './Login.css'
import login from '../../img/login.png'

const AddService = () => {

    const [email,setEmail] = useState("");
    const [password, setPassword] = useState("")
  

  const handleAddService = (e) => {
    e.preventDefault()

    if(email === "c201023@ugrad.iiuc.ac.bd" && password === "123456789"){
        alert("Successfully log in")
        localStorage.setItem("isLogged", true)
        e.target.reset();
        window.location.href='/'
    }
  }

  return (
    <>
    <div class="body">
      <div class="b1">
        <img src={login} alt=""></img>
      </div>
      <div class="b2">
        <h3>Login</h3>
      <Form onSubmit={handleAddService}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label><b>Enter Email</b></Form.Label>
          <Form.Control
            onChange={(e)=>setEmail(e.target.value)}
            type="text"
            placeholder="Enter Email"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label><b>Enter Password</b></Form.Label>
          <Form.Control
           onChange={(e)=>setPassword(e.target.value)}
            type="password"
            placeholder="Enter password"
          />
        </Form.Group>
        
        <Button variant="primary" type="submit">
          Log In
        </Button>
      </Form>
    </div>
    </div>
  
    </>
  )
}

export default AddService
