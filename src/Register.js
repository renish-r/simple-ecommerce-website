import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";

function Register() {
  const [form, setForm] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const navigate = useNavigate();

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function validate() {
    const newErrors = {};
    if (!form.fname.trim()) newErrors.fname = "First name is required";
    if (!form.lname.trim()) newErrors.lname = "Last name is required";

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!form.email.trim() || !emailRegex.test(form.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (form.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }

    if (form.password !== form.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (validate()) {
      alert("Registration submitted!");
      navigate("/login");
    } else {
      alert("Please fix the errors before submitting.");
    }
  }

  return (
    <div className="register-page" style={{
      backgroundImage: `url(${process.env.PUBLIC_URL}/Images/Register.jpg)`
    }}>
      <div className="register-box">
        <h1>Register</h1>
        <form onSubmit={handleSubmit} noValidate>
          <input
            name="fname"
            placeholder="First Name"
            value={form.fname}
            onChange={handleChange}
          />
          {errors.fname && <div className="error-message">{errors.fname}</div>}

          <input
            name="lname"
            placeholder="Last Name"
            value={form.lname}
            onChange={handleChange}
          />
          {errors.lname && <div className="error-message">{errors.lname}</div>}

          <input
            name="email"
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
          />
          {errors.email && <div className="error-message">{errors.email}</div>}

          <div className="password-container">
            <input
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
            />
            <span
              className="toggle-password"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? "👁️" : "🙈"}
            </span>
          </div>
          {errors.password && (
            <div className="error-message">{errors.password}</div>
          )}

          <div className="password-container">
            <input
              name="confirmPassword"
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm Password"
              value={form.confirmPassword}
              onChange={handleChange}
            />
            <span
              className="toggle-password"
              onClick={() => setShowConfirmPassword((prev) => !prev)}
            >
              {showConfirmPassword ? "👁️" : "🙈"}
            </span>
          </div>
          {errors.confirmPassword && (
            <div className="error-message">{errors.confirmPassword}</div>
          )}

          <button type="submit" className="btn-primary">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
