import React, { useState } from 'react'

const Login = ({handleLogin}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submitHandler = (event) => {
        event.preventDefault();
        handleLogin(email, password);

        setEmail("");
        setPassword("");
    }

  return (
    <div className='flex h-screen w-screen items-center justify-center'>
      <div className='border-2 border-emerald-600 p-20 rounded-xl'>
        <form 
        onSubmit={submitHandler}
        className='flex flex-col justify-center items-center'>
            <input 
            value={email}
            onChange={(e) => {
                setEmail(e.target.value);
            }}
             required className='outline-none bg-transparent border-2 border-emerald-600 rounded-full text-xl py-3 px-5 placeholder:text-gray-400' type="email" placeholder='Enter Your Email' />
            <input
            value={password}
            onChange={(e) => {
                setPassword(e.target.value);
            }}
             required className='outline-none bg-transparent border-2 border-emerald-600 rounded-full text-xl py-3 px-5 placeholder:text-gray-400 mt-5' type="password" placeholder='Enter Password'/>
            <button className='outline-none w-full bg-emerald-600 rounded-full text-xl py-3 px-5 placeholder:text-gray-400 mt-7'>Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login
