import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import {useNavigate} from "react-router-dom"
import './Common.css'

function Signup() {

    const [name,setName] =useState("");
    const [email,setEmail] =useState("");
    const [password,setPassword] =useState("");

    const navigate =useNavigate()

    const na=(e)=>{
        setName(e.target.value)
    }

    const em=(e)=>{
        setEmail(e.target.value)
    }

    const pass=(e)=>{
        setPassword(e.target.value)
    }

    const but=()=>{
        axios.post("http://localhost:3000/",{name,email,password})
        .then((res)=>{
            console.log(res)
            navigate('/login')
        })
        .catch((err)=>{
            console.log(err)
            
        })
    }

    const log=()=>{
        navigate("/login")
    }

  return (
    <div className='all'>
        <h1>Register</h1>
        <label>Name : </label>
        <input type="text" value={name} onChange={na}/>
        <label>Email :</label>
        <input type="email" value={email} onChange={em}/>
        <label>Password :</label>
        <input type='password' value={password} onChange={pass}/>
        <button onClick={but}>Register</button>

        <h4>If Already have an Account</h4>
        <button onClick={log}>Login</button>
    </div>
  )
}

export default Signup