import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // React Router v6

const CompanyLogin = () => {
  const [companyEmail, setCompanyEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate(); // For navigation

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send login request to the FastAPI backend
      const response = await axios.post('http://localhost:8000/company/login', {
        companyEmail,
        password
      });

      // Retrieve JWT token and companyID from the response
      const { access_token, companyID } = response.data;

      // Store the JWT token in localStorage
      localStorage.setItem('token', access_token);
     console.log(companyID)
      // Redirect to the CompanyAddMember page with the company ID in the URL
      navigate(`/company/${companyID}/panel`);

    } catch (error) {
      setMessage('Login failed. Please check your credentials.');
      console.error(error.response?.data); // For debugging
    }
  };

  return (
    <div className="login-page">
      <h1>Company Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Company Email"
          value={companyEmail}
          onChange={(e) => setCompanyEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default CompanyLogin;
