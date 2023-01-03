import Signup from '../Components/Signup/Signup';
import React, { useState } from 'react';
import styles from './Login.module.scss';
import {useRouter} from 'next/router'
import Home from './Home';

function Login() {
  const [login, setLoginKey] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [userID, setUserID] = useState('');
  const router = useRouter ()
 

  const handleClick = (e: any) => {
    e.preventDefault();
    setLoginKey(true);
  };

  // const submitLogin = async () => {
  //   const response = await fetch('/api/', {
  //     method: 'POST',
  //     body: JSON.stringify({
  //       username,
  //       password,
  //     }),
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   })
  //   const data = await response.json()
  //   console.log(data);
  //   setUserID(data._id)
  //   router.push('/Home')
  // }

  const submitLogin = (e) => {
    e.preventDefault();
    router.push('/Home');
  }
  

  return (
    <div className={styles.Home}>
      <div className='facemash'>
        <h1>facemash</h1>
        <h2>Connect with friends and the world around you on Facemash.</h2>
      </div>
      <div className={styles.login}>
        <form onSubmit={submitLogin}>
          <input 
          type='text' 
          placeholder='Email or mobile number' 
          required 
          onChange={(newValue) => setUsername(newValue.target.value)}
          />
          <br />
          <input 
          type='password' 
          placeholder='Password' 
          required 
          onChange={(newValue) => setPassword(newValue.target.value)}
          />
          <br />
          <input type='submit' value='Log in' />
        </form>
        <input type='button' value='Forgot password?' />
        <br />
        <input type='button' value='Create a new account' onClick={handleClick} />
      </div>
      <Signup login={login} setLoginKey={setLoginKey} />
    </div>
  );
}

{
  /* <button  onClick={e => {this.showModal();}}> show Modal </button>

state = {show: false};
showModal = e => {
  this.setState({
    show: true
  });
}; */
}

export default Login;
