import React,{useState} from 'react'
import './Common.css'
import {useNavigate} from 'react-router-dom'
import axios from 'axios';

function Login() {

    const [email,setEmail] =useState("");
    const [password,setPassword] =useState("");
    const navigate = useNavigate()
    

    const em=(e)=>{
        setEmail(e.target.value)
    }

    const pass=(e)=>{
        setPassword(e.target.value)
    }

    const but=()=>{
        axios.post("http://localhost:3000/login",{email,password})
        .then((res)=>{
            console.log(res);
            navigate("/dashboard")
        })
        .catch((err)=>{
            console.log(err)
           
        })
    }

  return (
    <div className='all'>
        <h1>Login</h1>
        <label>Email :</label>
        <input type="email" value={email} onChange={em}/>
        <label>Password :</label>
        <input type="password" value={password} onChange={pass}/>
        <button onClick={but}>Submit</button>
    </div>
  )
}

export default Login