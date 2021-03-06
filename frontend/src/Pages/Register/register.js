import React from "react";
import { Link } from "react-router-dom";

import "./register.css";

const Register = () => {
  return (
    <div className="register">
      <h1>Register</h1>
      <input type="text" />
      <input type="text" />
      <button type="submit">Efetuar o Cadastro</button>

      <Link to="/">
        <button type="submit">Login</button>
      </Link>
    </div>
  );
};

export default Register;
