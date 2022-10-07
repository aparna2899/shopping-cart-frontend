import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [login, setLogin] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const login = async () => {
      try {
        const res = await axios({
          method: 'POST',
          url: `https://shopping-cart-react-backend.herokuapp.com/api/users/login`,
          headers: {
            'Content-Type': 'application/json',
          },
          data: JSON.stringify({
            user: {
              email,
              password,
            },
          }),
        });
        setLogin(true);
        localStorage.setItem('user', JSON.stringify(res.data.user));
        window.location.href = '/';
      } catch (error) {
        console.log(error.response.data);
      }
    };
    login();
  };

  return (
    <>
      <h1 className="text-4xl text-center mt-8">Sign In</h1>
      <form className="my-6 w-2/6 mx-auto" onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          placeholder="Email"
          className="text-lg border block mx-auto px-5 py-2 w-full rounded"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="text-lg border block mx-auto px-5 py-2 w-full rounded"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </form>
      <button
        type="submit"
        className=" bg-green-500 hover:bg-green-dark text-white text-lg px-6 py-2 rounded block mx-auto"
        onClick={(e) => handleSubmit(e)}
      >
        Sign in
      </button>
      <Link to="/register" className="block text-center text-green-500 mt-8">
        Create an account
      </Link>
    </>
  );
}

export default Login;