import React, { useState } from 'react';

const LandingPage = () => {
  const [showLoginOptions, setShowLoginOptions] = useState(false);

  const handleSignupClick = () => {
    setShowLoginOptions(true);
  };

  return (
    <div className="landing-page">
      <h1>Welcome to Our Platform</h1>
      <button onClick={handleSignupClick} className="signup-btn">Get Started</button>

      {showLoginOptions && (
        <div className="login-options">
          <h2>Choose Login Type</h2>
          {/* User has only login option */}
          <button className="option-btn" onClick={() => window.location.href='/user-login'}>User Login</button>

          {/* Company has both login and signup options */}
          <div className="company-options">
            <h3>For Companies:</h3>
            <button className="option-btn" onClick={() => window.location.href='/company-login'}>Company Login</button>
            <button className="option-btn" onClick={() => window.location.href='/company-signup'}>Company Signup</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LandingPage;
