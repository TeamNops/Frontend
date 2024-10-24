import React, { useState } from 'react';
import axios from 'axios';

const CompanySignup = () => {
  const [companyEmail, setCompanyEmail] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [companyType, setCompanyType] = useState('');
  const [companyDescription, setCompanyDescription] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/company/signup', {
        companyEmail,
        companyName,
        companyType,
        companyDescription,
        password
      });
      setMessage(response.data.message);
    } catch (error) {
      // Show the error details from the backend
      console.error(error.response.data);  // This will help with debugging
      setMessage('Signup failed. Please check the form data.');
    }
  };

  return (
    <div className="signup-page">
      <h1>Company Signup</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Company Email"
          value={companyEmail}
          onChange={(e) => setCompanyEmail(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Company Name"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
          required
        />
        <select
          value={companyType}
          onChange={(e) => setCompanyType(e.target.value)}
          required
        >
          <option value="" disabled>Select Company Type</option>
          <option value="IT">IT</option>
          <option value="Consulting">Consulting</option>
          <option value="Finance">Finance</option>
          <option value="Healthcare">Healthcare</option>
          <option value="Other">Other</option>
        </select>
        <textarea
          placeholder="Company Description"
          value={companyDescription}
          onChange={(e) => setCompanyDescription(e.target.value)}
          required
        ></textarea>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Sign Up</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default CompanySignup;
