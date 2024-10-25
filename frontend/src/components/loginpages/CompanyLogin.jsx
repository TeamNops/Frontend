import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CompanyLogin = () => {
  const [companyEmail, setCompanyEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const blockyTextStyle = {
    fontFamily: "Nasalization",
    textShadow: "2.25px 2.25px 0px rgba(0, 0, 0, 0.3)",
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/company/login', {
        companyEmail,
        password
      });

      const { access_token, companyID } = response.data;
      localStorage.setItem('token', access_token);
      console.log(companyID);
      navigate(`/company/${companyID}/panel`);

    } catch (error) {
      setMessage('Login failed. Please check your credentials.');
      console.error(error.response?.data);
    }
  };

  return (
    <div className="w-full h-screen relative" style={blockyTextStyle}>
      <video
        autoPlay
        muted
        loop
        className="fixed inset-0 w-full h-full object-cover brightness-50"
      >
        <source src="/src/assets/18327-291012897.mp4" type="video/mp4" />
      </video>
      <div className="flex justify-center items-center h-screen relative">
        <div className="flex w-auto shadow-lg rounded-lg overflow-hidden">
          <div className="bg-gray-500 bg-opacity-65 px-28 py-10">
            <h1 className="text-white text-2xl font-bold mb-6">Company Login</h1>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-300 text-md mb-2 italic">Company Email</label>
                <input
                  type="email"
                  value={companyEmail}
                  onChange={(e) => setCompanyEmail(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg text-sm transition-transform duration-200 hover:scale-105"
                  placeholder="Enter company email"
                  required
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-300 text-md mb-2 italic">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg text-sm transition-transform duration-200 hover:scale-105"
                  placeholder="Enter password"
                  required
                />
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="border border-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-400 focus:outline-none transition-transform duration-200 hover:scale-110"
                >
                  Login
                </button>
              </div>
            </form>
            {message && <p className="text-white mt-4 text-center">{message}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyLogin;