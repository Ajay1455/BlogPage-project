import { useContext, useRef,useState } from 'react';
import { useNavigate } from 'react-router-dom'
import AuthContextProvider, { AuthContext } from '../../authentication/authRoutes';
import './Login.css'

import loginImg from './login.jpg'

export default function Login() {

    const navigate = useNavigate();
   const [cred,setCred]=useState({
    email:"",
    password:""
   });
  const AuthCtx = useContext(AuthContext); 
  const handleClick = async (e) => {
    e.preventDefault()
    // console.log(cred);
    await AuthCtx.setBlog();
    await AuthCtx.setUser(cred);
    // console.log("user",AuthCtx.user);
    navigate('/BlogPlace')
  }

  return (
    <div className='main'>
        <div className='imgContainer'>
            <img src={loginImg} alt="" />
        </div>

        <div className='formContainer'>
            <form >
                <div className="head">
                    <img src="https://media.istockphoto.com/id/1414371525/vector/modern-letter-pb-or-bp-monogram-logo-design.jpg?b=1&s=170667a&w=0&k=20&c=gLEB1EF7n3pwM7NTvXdl-8ADNe5nykw19xv44lfB9kQ="  />
                    <h2>Sign In to BlogPlace</h2>
                </div>
                <div className='inputContainer'>
                    <label>Email</label>
                    <input value={cred.email} onChange={(e)=>{setCred({...cred,email:e.target.value})}}   type="email" required/>
                </div>
                <div className='inputContainer'>
                    <label>Password</label>
                    <input value={cred.password} onChange={(e)=>{setCred({...cred,password:e.target.value})}}  type="password" required/>
                </div>
                <div className='footForm'>
                    <p style={{display:"flex", alignItems:'center'}}><input style={{marginRight:"0.5rem"}} type="checkbox" /> Remember Me</p>
                    <p>Forgot Password</p>
                </div>
                <button type='submit' onClick={handleClick} className='formBtn'>SIGNIN</button>
                
            </form>
        </div>
    </div>
  )
}
