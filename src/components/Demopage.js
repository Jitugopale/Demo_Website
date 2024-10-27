import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'; // Assuming you have styles defined in this file

const Demopage = () => {
  return (
    <div className="container text-center mt-5">
      <h1>Hello</h1>
      <p>Welcome to the Demo Page! You can add more features here.</p>
      <div className="mt-4">
        <Link to="/" className="btn btn-primary mx-2">Go to Home</Link>
        <Link to="/login" className="btn btn-secondary mx-2">Go to Login</Link>
        <Link to="/register" className="btn btn-secondary mx-2">Go to Register</Link>
      </div>
    </div>
  );
};

export default Demopage;
