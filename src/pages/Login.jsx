import React from 'react'
import { Link } from 'react-router-dom'
import { ROUTES } from '../router/router'
import { API_URL } from '../config'


const Login = () => {
  const email = useState('')
  const password = useState('')
  const authCheck = async (event) => {
    event.preventDefault();

    const formData = Object.fromEntries(new FormData(event.currentTarget));
    console.log(formData);
    const response = await fetcher(API_URL + `/users?email=${email}&password=${password}`,{method: 'GET'})
    console.log(response);
    
  }

  return (
    <div className='box'>
      <h1>Welcome</h1>

      <form onSubmit={authCheck}>
        <p>Email:</p>
        <input name='email' type="text" className='email' />
        <p>Password:</p>
        <input name='password' type="password" className='password' />
        <br />
        <br />
        <button type='submit'>Log in</button>
      </form>

      <p>Don't have an account yet? <Link to={ROUTES.SIGNUP}>Sign Up</Link></p>
    </div>
  )
}

export default Login