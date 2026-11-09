import React, { useState } from 'react'

const Login = ({handleLogin}) => {


    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitHandler = (e)=>{
        e.preventDefault()
        handleLogin(email,password)
        console.log("form submitted guys",email)
        console.log("password is",password)

        setEmail("")
        setPassword("")
    }

  return (
 <div className='flex h-screen w-screen items-center justify-center'>
    <div className='border-2 border-emerald-600 p-20'>
        <form 
        onSubmit={ (e)=>{
            submitHandler(e)
        }}
        className='flex flex-col items-center justify-center'>
            <input
            value={email}
            onChange={(e)=>{
                setEmail(e.target.value)
            }}
            required className='text-white outline-none bg-transparent border-2 border-emerald-600 py-3 px-5 text-xl rounded-full placeholder:text-gray-400' type='email' placeholder='Enter your email'></input>
            <input 
            value={password}
            onChange={(e)=>{
                setPassword(e.target.value)
            }}
            required className='text-white outline-none bg-transparent border-2 border-emerald-600 py-3 px-5 text-xl rounded-full placeholder:text-gray-400 mt-3' type='password' placeholder='Enter your password'></input>
            <button className='mt-5 text-white outline-none border-none border-2 bg-emerald-600 py-3 px-5 text-xl rounded-full placeholder:text-white'>Log in</button>
        </form>
    </div>
 </div>
  )
}

export default Login
