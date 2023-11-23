import React, { useState } from "react";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rePassword: "",
    rememberMe: false,
  });

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [id]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic form validation
    if (
      isValidEmail(formData.email) ||
      !formData.password ||
      !formData.rePassword
    ) {
      alert("Please fill out all fields");
    } else if (formData.password !== formData.rePassword) {
      alert("Passwords do not match");
    } else {
      // Perform login or further actions here
      alert("Form submitted successfully!");
    }
  };
  const isValidEmail = (email) => {
    // Basic email format validation using regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <div className="container all-center">
      <form className="card p-3" onSubmit={handleSubmit}>
        <h2 className="text-primary text-center">Login</h2>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="rePassword">Re-Password</label>
          <input
            type="password"
            id="rePassword"
            placeholder="Re-enter your password"
            value={formData.rePassword}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <input
            type="checkbox"
            id="rememberMe"
            checked={formData.rememberMe}
            onChange={handleChange}
          />
          <label htmlFor="rememberMe">Remember Me</label>
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-primary btn-block">
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
