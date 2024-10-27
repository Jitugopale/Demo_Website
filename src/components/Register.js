import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/auth/createUser", formData);
      
      if (response.status === 201) { // Expecting status 201 for successful creation
        setSuccess("Registration successful! Redirecting to login...");
        setError(""); // Clear any previous errors
        // Clear form fields after successful registration
        setFormData({ name: "", email: "", password: "" });
        
        setTimeout(() => {
          navigate("/login"); 
        }, 2000);
      } else {
        setError(response.data.error || "Registration failed. Please try again.");
        setSuccess(""); // Clear any previous success message
      }
    } catch (error) {
      // Handle errors more gracefully
      if (error.response) {
        // Backend responded with an error
        setError(
          error.response.data.errors?.[0]?.msg || // Specific error message
          error.response.data.error || 
          "Error during registration. Please check your details and try again."
        );
      } else {
        // Network or other errors
        setError("Network error. Please try again later.");
      }
      setSuccess(""); // Clear any previous success message
    }
  };

  return (
    <div className="container mt-5">
      <h2>Register</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      {success && <div className="alert alert-success">{success}</div>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group mt-3">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group mt-3">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary mt-4">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
