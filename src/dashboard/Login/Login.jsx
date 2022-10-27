import React from 'react';
import './login.scss';
import { auth } from '../../firebase/config';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../context/useAuthContext';

const Login = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState('');
  let navigate = useNavigate();
  const {dispatch} = useAuthContext();

  const handleLogin = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        console.log("login went through")
        dispatch({
          type: 'LOGIN',
          payload: res.user,
        });

        navigate("admin/tracking");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        setError(error.code)
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  return (
    <div className="login__container padding">
      <div className="login__wrapper">
        <div className="login__header">
          <h1 className="heading">Log in to Admin</h1>
        </div>
        <div className="login__form">
          <form>
            {
              error && <p className="error">{error}</p>
            }
            <div className="login__form__group">
              <label htmlFor="email">Email:</label>
              <input 
                type="email" 
                name="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email" />
            </div>
            <div className="login__form__group">
              <label htmlFor="password">Password:</label>
              <input 
                type="password" 
                name="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="password" />
            </div>
            <div className="login__form__group">
              <button onClick={(e) => handleLogin(e)} type="submit">Log in</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
