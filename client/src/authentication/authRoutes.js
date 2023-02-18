import axios from 'axios'
import { createContext, useEffect, useState } from 'react'

export const AuthContext = createContext({
  user:{},
  blog:[],
  setUser:async (inputs)=>{},
  setBlog:async ()=>{},
})

export default function AuthContextProvider ({ children }) {
  const [data, setData] = useState([])
  const [currentUser, setCurrentUser] = useState(null);
  async function getAllData(){
    const res = await axios.get('http://localhost:4000/blogs')
    setData(res.data)
  }
  const login = async (inputs) => {
    const res = await axios.post('http://localhost:4000/auth/login', inputs);
    setCurrentUser(res.data)
  }

  useEffect(() => {
    window.sessionStorage.setItem('user', JSON.stringify(currentUser))
  }, [currentUser])

  const value={
   user:currentUser,
   blog:data,
    setUser:login,
    setBlog:getAllData
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}
