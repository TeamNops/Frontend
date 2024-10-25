import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import UserLogin from './components/loginpages/UserLogin';
import UserWork from './components/UserWork';  // Import the new UserWork component
import CompanyLogin from './components/loginpages/CompanyLogin';
import CompanySignup from './components/loginpages/CompanySignup';
import TaskAssignment from './components/TaskAssignment';  // 
import CompanyAddMember from './components/loginpages/CompanyAddMember'; // New component
import CompanyPanel from './components/CompanyPanel';  // Import CompanyPanel
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user-login" element={<UserLogin />} />
        <Route path="/company-signup" element={<CompanySignup />} />
        <Route path="/company-login" element={<CompanyLogin />} />
        <Route path="/company/:companyId/panel" element={<CompanyPanel />} />
        <Route path="/company/:companyId/add-member" element={<CompanyAddMember />} />
        <Route path="/user/:userId/work" element={<UserWork />} />
        <Route path="/company/:companyId/assign-task" element={<TaskAssignment />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
