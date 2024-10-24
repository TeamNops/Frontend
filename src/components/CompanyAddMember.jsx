import React, { useState } from 'react';
import { useParams } from 'react-router-dom';  // Import useParams
import axios from 'axios';
const CompanyAddMember = () => {
  const { companyId } = useParams();  // Extract companyId from the URL
  const [email, setEmail] = useState('');
  const [emailList, setEmailList] = useState([]);
  const [message, setMessage] = useState('');

  // Function to add email to the list
  const handleAddEmail = () => {
    if (email && !emailList.includes(email)) {
      setEmailList([...emailList, email]);
      setEmail('');  // Clear the input after adding
    } else {
      setMessage("Please enter a valid email that hasn't been added.");
    }
  };

  // Function to submit emails (optional: could be connected to an API)
  const handleSubmitEmails = async () => {
    try {
      // Example of sending the list of emails to the backend
      const response = await fetch(`http://localhost:8000/company/${companyId}/add-members`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          emails: emailList,
        }),
      });
      const data = await response.json();
      setMessage(data.message);
    } catch (error) {
      setMessage('Failed to submit emails.');
      console.error(error);
    }
  };

  return (
    <div className="add-member-page">
      <h1>Add Members to Company: {companyId}</h1> {/* Display the company ID */}
      <div className="email-input">
        <input
          type="email"
          placeholder="Enter member's email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={handleAddEmail}>Add</button>
      </div>

      {message && <p>{message}</p>}

      <div className="email-list">
        <h2>Added Emails:</h2>
        <ul>
          {emailList.map((emailItem, index) => (
            <li key={index}>{emailItem}</li>
          ))}
        </ul>
      </div>

      <button onClick={handleSubmitEmails}>Submit Emails</button>
    </div>
  );
};

export default CompanyAddMember;
