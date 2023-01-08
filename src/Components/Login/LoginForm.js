import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/Amazon_logo.svg.png';
import classes from './LoginForm.module.css';




const LoginForm = ()=> {

  const [isLogin, setIsLogin] = useState(true);
  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  return (
    <> 
        <div className={classes.logo}>
          <Link to="/">
            <img src={logo} alt="Amazon logo"  />
          </Link>
        </div>
      <div className={classes.box}>
        <form className={classes.container}>
          <h1>{isLogin? "Sign in" : "Sign up"}</h1>
          <div className={classes.text_field}>
            <label htmlFor="email">Email or mobile phone number</label>
            <input type="email" id='email' />
          </div>
          <div className={classes.text_field}>
            <label htmlFor="password">Password</label>
            <input type="password" id='password' />
          </div>
          <button className={classes.button} type='submit'>Sign In</button>
          <div className={classes.privaciy}>
            <p>By signing in, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
          </div>
          <button
            title='switch'
            type='button'
            className={classes.togle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </form>
      </div>
    </>
  );
}

export default LoginForm;