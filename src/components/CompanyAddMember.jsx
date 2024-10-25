import React, { useState } from 'react';
import { useParams } from 'react-router-dom';  // Import useParams
import axios from 'axios';

const CompanyAddMember = () => {
  const { companyId } = useParams();  // Extract companyId from the URL
  const [email, setEmail] = useState('');
  const [department, setDepartment] = useState('');  // Add department state
  const [memberList, setMemberList] = useState([]);  // Store both email and department
  const [message, setMessage] = useState('');

  // Function to add email and department to the list
  const handleAddMember = () => {
    if (email && department && !memberList.some(member => member.email === email)) {
      setMemberList([...memberList, { email, department }]);
      setEmail('');  // Clear email input
      setDepartment('');  // Clear department input
    } else {
      setMessage("Please enter valid email and department, or this email is already added.");
    }
  };

  // Function to submit the members
  const handleSubmitMembers = async () => {
    try {
      // Sending the member list (with email and department) to the backend
      const response = await fetch(`http://localhost:8000/company/${companyId}/add-members`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          members: memberList,  // Send both email and department
        }),
      });
      const data = await response.json();
      setMessage(data.message);
    } catch (error) {
      setMessage('Failed to submit members.');
      console.error(error);
    }
  };

  return (
    <div className="add-member-page">
      <h1>Add Members to Company: {companyId}</h1>
      <div className="member-input">
        <input
          type="email"
          placeholder="Enter member's email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter department"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
        />
        <button onClick={handleAddMember}>Add</button>
      </div>

      {message && <p>{message}</p>}

      <div className="member-list">
        <h2>Added Members:</h2>
        <ul>
          {memberList.map((member, index) => (
            <li key={index}>{member.email} - {member.department}</li>
          ))}
        </ul>
      </div>

      <button onClick={handleSubmitMembers}>Submit Members</button>
    </div>
  );
};

export default CompanyAddMember;
