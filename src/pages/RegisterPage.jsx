import SingUp from "components/SingUp";
import React from "react";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  return (
    <div>
      <h1>Register</h1>
      <SingUp />
      <p>
        Already have an account? <Link to="/login">Sing in!</Link>
      </p>
    </div>
  );
};

export default RegisterPage;
