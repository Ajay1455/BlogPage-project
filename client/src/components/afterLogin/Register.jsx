import './Register.css'
import loginImg from './login.jpg'
import { useNavigate } from 'react-router-dom'
import { useRef } from 'react'
import axios from 'axios';

export default function Register() {
    const userName = useRef()
    const email = useRef()
    const password = useRef()
    const navigate=useNavigate();

    const clickHandler=async(e)=>{
        e.preventDefault();
        await axios.post(
            'http://localhost:4000/auth/register',
            {
                userName:userName.current.value,
                email:email.current.value,
                password:password.current.value
            },{
                withCredentials:true,
            }
        )
        navigate('/login');
}
        
  return (
    <div className='main'>
        <div className='imgContainer'>
            <img src={loginImg} alt="" />
        </div>

        <div className='formContainer'>
            <form>
                <div className="head">
                    <img src="https://media.istockphoto.com/id/1414371525/vector/modern-letter-pb-or-bp-monogram-logo-design.jpg?b=1&s=170667a&w=0&k=20&c=gLEB1EF7n3pwM7NTvXdl-8ADNe5nykw19xv44lfB9kQ="  />
                    <h2>Registration to BlogPlace</h2>
                </div>
                <div className='inputContainer'>
                    <label>Username</label>
                    <input ref={userName} type="text" required />
                </div>
                <div className='inputContainer'>
                    <label>Email</label>
                    <input ref={email}  type="email" required/>
                </div>
                <div className='inputContainer'>
                    <label>Password</label>
                    <input ref={password} type="password" required/>
                </div>
                <div className='footForm'>
                    <p style={{display:"flex", alignItems:'center'}}><input style={{marginRight:"0.5rem"}} type="checkbox" /> Remember Me</p>
                    <p>Forgot Password</p>
                </div>
                <button className='formBtn' onClick={clickHandler}>SIGNUP</button>                
            </form>
        </div>
    </div>
  )
}
