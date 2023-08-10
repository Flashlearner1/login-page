import React, { useState } from 'react';
import './App.css';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <div className="App">
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input type="text" 
          placeholder="Enter your Email address" 
          id="Email"
          onChange={handleUsernameChange}/>
        </div>
        <div>
          <input type="password" 
          placeholder="Enter your Password" 
          id="Password"
          onChange={handlePasswordChange}/>
        </div>
      </form>

<br />
      <div>
        <div><button type='submit'>Login</button></div>
        <a href="#">forgotten password?</a>
        <div className= "btn"><button type='New'>Create New Account</button></div>
      </div>

    </div>
  );
}

export default App;
