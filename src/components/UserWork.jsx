import React from 'react';
import { useParams } from 'react-router-dom';  // Import useParams to get user_id from URL

const UserWork = () => {
  const { userId } = useParams();  // Get user ID from the URL

  return (
    <div className="user-work-page">
      <h1>Welcome to your work page, User ID: {userId}</h1>
      {/* Add more functionality here */}
    </div>
  );
};

export default UserWork;
