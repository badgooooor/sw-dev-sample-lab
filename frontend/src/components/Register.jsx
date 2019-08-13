import React, { useState } from 'react';
import axios from 'axios';

function Register() {
  let [ username, setUsername ] = useState('');
  let [ fullname, setFullname ] = useState('');
  let [ password, setPassword ] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(
      `http://localhost:5000/register`,
      {
        fullname: fullname,
        username: username,
        password: password
      }
    ).then(res => {
      console.log(res.data);
    });
  }
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <h1>Register</h1>
        <p>Please fill in this form to create an account.</p>

        <label>
          Fullname:
          <input 
            type="text"
            value={fullname}
            onChange={e => setFullname(e.target.value)} 
          />
        </label><br />

        <label>
          Username:
          <input 
            type="text"
            value={username}
            onChange={e => setUsername(e.target.value)} 
          />
        </label><br />

        <label>
          Password:
          <input 
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)} 
          />
        </label><br />

        <input type="submit" value="Submit" />
      </div>
    </form>
  );
}

export default Register;