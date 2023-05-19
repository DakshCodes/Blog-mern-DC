import React from "react";
import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [err, setError] = useState(null);

  // const navigate = useNavigate();

  const handleChange = (event) => {
    setInputs( prev => ({ ...prev, [event.target.name]: [event.target.value] }));
  };
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    axios.post('http://localhost:8081/signup', inputs)
      .then(res => {
        console.log(res)
        navigate("/")
      }).catch(err => {
        console.log(err);
      });
    // navigate("/login");

  };

  return (
    <div className="auth">
      <h1>Register</h1>
      <form>
        <input
          required
          type="text"
          placeholder="username"
          name="username"
          onChange={handleChange}
        />
        <input
          required
          type="email"
          placeholder="email"
          name="email"
          onChange={handleChange}
        />
        <input
          required
          type="password"
          placeholder="password"
          name="password"
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>Register</button>
        {err && <p>{err}</p>}
        <span>
          Do you have an account? <Link to="/login">Login</Link>
        </span>
      </form>
    </div>
  );
};

export default Register;