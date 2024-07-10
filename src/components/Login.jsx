import React from 'react'
import  { useState } from 'react';
import '../App.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
     
      if (email === 'admin@library.com' && password === 'password') {
        console.log('Logged in');
        setError(''); 
      } else {
        setError('Invalid email or password');
      }
    };
  

  return (
    <div className="login-background">
      <div style={{color:"brown"}}className="login-container">
        <form onSubmit={handleSubmit}>
          Login
          {error && <p className="error">{error}</p>}
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button style={{color:"white",backgroundColor:"brown"}} type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;


