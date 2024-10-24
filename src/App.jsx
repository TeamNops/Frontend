import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import UserLogin from './components/UserLogin';
import UserWork from './components/UserWork';  // Import the new UserWork component
import CompanyLogin from './components/CompanyLogin';
import CompanySignup from './components/CompanySignup';
import CompanyAddMember from './components/CompanyAddMember'; // New component
import CompanyPanel from './components/CompanyPanel';  // Import CompanyPanel
import './styles.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/user-login" element={<UserLogin />} />
        <Route path="/company-signup" element={<CompanySignup />} />
        <Route path="/company-login" element={<CompanyLogin />} />
        <Route path="/company/:companyId/panel" element={<CompanyPanel />} />
        <Route path="/company/:companyId/add-member" element={<CompanyAddMember />} />
        <Route path="/user/:userId/work" element={<UserWork />} />
      </Routes>
    </Router>
  );
}

export default App;
