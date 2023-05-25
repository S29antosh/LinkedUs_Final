import React from 'react'
import {useState} from 'react'
import { useNavigate } from 'react-router-dom'

export default function Portal() {
  const [message, setMessage] = useState("")
  const [animation, setAnimation] = useState(0)

  
  

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate();


  

  const handleChange = (e) => {
    if(e.target.type === "text"){
      setUsername(e.target.value)
    }
    else if(e.target.type === "password"){
      setPassword(e.target.value)
    }
  }
 
  const handleClick = (e) => {
    e.preventDefault()
    if(username === "admin" && password === "admin"){
      setMessage("Login Successful")
      setTimeout(() => {
      navigate ("/jobPosting")
      },500)
    }
    else{
      setMessage("Invalid Credentials");
      setTimeout(() => {
        setMessage("")

      },2000)
    }

  }

  

  const style = {
    display:"grid",
    placeItems:"center",
    height:"100vh",
    fontFamily:"sans-serif",
  }
  const formStyle = {
   boxShadow:"0 0 10px 0 rgba(0,0,0,0.2)",
    padding:"2rem",
    borderRadius:"10px",
    
  }
  const inputStyle = {
    width:"300px",
  }
  const styleMessage = {
    color:"red",
    textAlign:"center",
    marginTop:"1rem",
    
  }


  return (
    <div style={style}>
      <form style={formStyle} >
      <h1>Admin Portal</h1>
        <input style={inputStyle} type="text" value={username}  onChange={handleChange}placeholder="Username"></input>
        <input style={inputStyle} type="password" value={password} onChange={handleChange} placeholder="Password"></input>
        <button type="submit" onClick={handleClick}>Login</button>
        <div style={styleMessage} className="message" onChange={
          () => {
            setAnimation(1)
            setTimeout(() => {
              setAnimation(0)
            },2000)
          }
        }>{message}</div>
      </form>

    </div>
    

  )
}
