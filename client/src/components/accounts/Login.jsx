import React, {useState,useContext} from 'react';
import {Box,TextField,Button,styled,Typography} from '@mui/material';

import {API} from '../../service/api';

import {DataContext} from '../../context/DataProvider';

import {useNavigate} from 'react-router-dom'

const Component=styled(Box)`
  width:400px;
  margin:auto;
  margin-top:100px;
  border: 1px solid;
  padding: 10px;
  height:500px
`
const Image=styled('img')({
   width:'100px',
   margin:'auto'
})

const Wrapper=styled(Box)`
   display: flex;
   flex-direction: column;

`

const Btn=styled(Button)`
   margin:auto;
   width:300px;
   margin-top: 30px;
   background-color:orange;
`

const Textf=styled(TextField)`
   margin:auto;
   width:300px;
    margin-top: 30px;
`

const Tgp=styled(Typography)`
   text-align:center;
   margin-top: 20px;
`

const Error=styled(Typography)`
   font-size:10px;
   color:#ff6161;
   line-height:0;
   margin-top:10px;
   font-weight:600;
`


const initialformvalues={
    name:'',
    username:'',
    password:''
};

const initialloginvalues={
   username:'',
   password:''
}



const Login=({isUserAuthenticated})=>{
 
   
   const [account,toggleAccount]=useState('login');
   const [signup,setSignup]=useState(initialformvalues)
   const [login,setLogin]=useState(initialloginvalues)
   const [error,setError]=useState('');


  const {setAccount}=useContext(DataContext);

  const Navigate=useNavigate()

   const handlechange=(e)=>{
      setSignup({...signup,[e.target.name]: e.target.value})
      
   }

 

    const imageURL = 'https://www.sesta.it/wp-content/uploads/2021/03/logo-blog-sesta-trasparente.png';
  
    const handleclick=()=>{
        if(account==='login'){
           toggleAccount('nulla')
        }else{
           toggleAccount('login')
        }
        
    }

    const signupUser=async (e)=>{
       let response=await API.userSignup(signup);
       if(response.isSuccess){
          setError('');
          setSignup(initialformvalues);
          toggleAccount('login');
       }else{
         setError('something went wrong');
       }
    }
  
    const handlelogin=(e)=>{
      setLogin({...login,[e.target.name]:e.target.value});
    } 

    const loginUser=async ()=>{
       let response=await API.userLogin(login);
       if(response.isSuccess){
           setError('');

           sessionStorage.setItem('accessToken',`Bearer ${response.data.accessToken}`);
           sessionStorage.setItem('refreshToken',`Bearer ${response.data.refreshToken}`);
           setAccount({username:response.data.username,name:response.data.name})
           isUserAuthenticated(true);
           Navigate('/')

       }else{
           setError('something went wrong! please try again later');
       }
    }

 return (
     <Component>
         
        {
             account==='login' ? 
                <Wrapper>
                    <Image src={imageURL} alt="imag" />

                    <Textf label="Enter userName"   value={login.username} variant="standard" onChange={handlelogin} name="username" />
                    <Textf label="Enter Password"   value={login.password} variant="standard" onChange={handlelogin} name="password"/>
                    
                    <Btn onClick={()=>loginUser()}>Login</Btn>
                    <Tgp> Or </Tgp>
                    <Btn variant="text" onClick={handleclick} >Create Account</Btn>
                </Wrapper> 
             :
                <Wrapper>
                    <Image src={imageURL} alt="imag" />

                    <Textf label="Enter Name"   value={signup.name} variant="standard"  onChange={handlechange} name="name"/>
                    <Textf label="Enter UserName"   value={signup.username}  variant="standard" onChange={handlechange}  name="username" />
                    <Textf label="Enter Password"   value={signup.password} variant="standard" onChange={handlechange} name="password"  />
                    {error && <Error>{error}</Error>}

                    <Btn onClick={signupUser}>Sign up</Btn>
                    <Tgp> Or </Tgp>
                    <Btn variant="text"  onClick={handleclick}>Already Have An Account</Btn>
                </Wrapper> 
        } 
     </Component>
  ) 

}

export default Login;