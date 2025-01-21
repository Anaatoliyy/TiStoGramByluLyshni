import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ROUTES } from '../router/router'
import { API_URL } from '../config'

const fetcher = async (url) => {
  const result = await fetch(url)
  return await result.json()
}

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const authCheck = async (event) => {
    event.preventDefault();

    const formData = Object.fromEntries(new FormData(event.currentTarget));

    // Викликаємо fetch для перевірки користувача в базі даних
    const response = await fetcher(API_URL + `/users?email=${formData.email}&password=${formData.password}`, { method: 'GET' });

    // Якщо користувач знайдений
    console.log(response);
    
    if (response && response.length > 0) {
      delete response[0].password
      localStorage.setItem('user', JSON.stringify(response[0]));
      navigate(ROUTES.HOME);
    } else {
      alert('Реєстрація не успішна');
    }
  }

  return (
    <div className='box'>
      <h1>Welcome</h1>

      <form onSubmit={authCheck}>
        <p>Email:</p>
        <input 
          name='email' 
          type="text" 
          className='email' 
          value={email}
          onChange={(e) => setEmail(e.currentTarget.value)}
        />
        <p>Password:</p>
        <input 
          name='password' 
          type="password" 
          className='password' 
          value={password}
          onChange={(e) => setPassword(e.currentTarget.value)}
        />
        <br />
        <br />
        <button type='submit'>Log in</button>
      </form>

      <p>Don't have an account yet? <Link to={ROUTES.SIGNUP}>Sign Up</Link></p>
    </div>
  )
}

export default Login
