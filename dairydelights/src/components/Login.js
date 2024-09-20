import { Grid2,Button,TextField } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useContext } from 'react';
import AuthContext from '../utils.js/AuthContext';
import { enqueueSnackbar } from 'notistack';

const Login = () => {
  const { login } = useContext(AuthContext);

    const[loginData,setloginData]=useState({
        adminName:"",
        adminPassword:""
    });
      const navigate=useNavigate();
      const[error,setError]=useState("")
    
    const handleChange=(e)=>{
      const{name,value}=e.target;
      setloginData({...loginData,[name]:value})
      }
    
    const handleSubmit=(e)=>{
      e.preventDefault();
      validateLogin(loginData)
    }
    
    const validateLogin=()=>{
    
      if(loginData.adminName.trim()==="admin" && loginData.adminPassword.trim()==="admin@123"){
        enqueueSnackbar("Login successfully",{
          variant:"success",
          autoHideDuration:2000,
          anchorOrigin:{
            vertical:"top",
            horizontal:"center"
          }
        });   
          login();
          navigate("/orders");
      }else{
        setError("Enter valid Name and Password")
        enqueueSnackbar("Login Failed", {variant:"error"});
      }
    }
  return (
        <Grid2  container  direction={'column'}
    alignItems={'center'}
    sx={{minHeight:"60vh"}}>
      <Grid2  margin={4}>
      <form onSubmit={handleSubmit}
      style={{backgroundColor:"lightyellow",borderRadius: 3, boxShadow: "5px 5px 10px",
        display:"flex",flexDirection:"column",
        gap:"1.5em",padding:"30px 50px",maxWidth:"70vh"
      }}
       >
        <TextField variant='outlined'  name="adminName"
         onChange={handleChange} 
         placeholder="Admin Name" />
        <TextField  variant='outlined' name="adminPassword"
         onChange={handleChange} type='password'
          placeholder="Admin Password"/>
<br/>
        <Button variant='contained'  type="submit">Login</Button>
        <p style={{color:"red"}}>{error}</p>
      </form>
      </Grid2>
    </Grid2>
  )
}

export default Login