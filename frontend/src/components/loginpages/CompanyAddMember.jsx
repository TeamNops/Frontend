import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const CompanyAddMember = () => {
  const { companyId } = useParams();
  const [email, setEmail] = useState('');
  const [department, setDepartment] = useState('');
  const [memberList, setMemberList] = useState([]);
  const [message, setMessage] = useState('');

  const blockyTextStyle = {
    fontFamily: "Nasalization",
  };

  const handleAddMember = () => {
    if (email && department && !memberList.some(member => member.email === email)) {
      setMemberList([...memberList, { email, department }]);
      setEmail('');
      setDepartment('');
    } else {
      setMessage("Please enter valid email and department, or this email is already added.");
    }
  };

  const handleSubmitMembers = async () => {
    try {
      const response = await axios.post(`http://localhost:8000/company/${companyId}/add-members`, {
        members: memberList,
      });
      setMessage(response.data.message);
    } catch (error) {
      setMessage('Failed to submit members.');
      console.error(error);
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
            <h1 className="text-white text-2xl font-bold mb-6">Add Members to Company: {companyId}</h1>
            <div className="space-y-4 mb-6">
              <div>
                <label className="block text-gray-300 text-md mb-2 italic">Member's Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg text-sm transition-transform duration-200 hover:scale-105"
                  placeholder="Enter member's email"
                />
              </div>
              <div>
                <label className="block text-gray-300 text-md mb-2 italic">Department</label>
                <input
                  type="text"
                  value={department}
                  onChange={(e) => setDepartment(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg text-sm transition-transform duration-200 hover:scale-105"
                  placeholder="Enter department"
                />
              </div>
              <button
                onClick={handleAddMember}
                className="w-full border border-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-400 focus:outline-none transition-transform duration-200 hover:scale-105"
              >
                Add Member
              </button>
            </div>

            {message && <p className="text-white mb-4 text-center">{message}</p>}

            <div className="mb-6">
              <h2 className="text-white text-xl font-bold mb-2">Added Members:</h2>
              <ul className="text-white space-y-2">
                {memberList.map((member, index) => (
                  <li key={index}>{member.email} - {member.department}</li>
                ))}
              </ul>
            </div>

            <button
              onClick={handleSubmitMembers}
              className="w-full border border-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-400 focus:outline-none transition-transform duration-200 hover:scale-110"
            >
              Submit Members
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyAddMember;