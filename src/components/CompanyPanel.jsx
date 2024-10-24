import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const CompanyPanel = () => {
  const { companyId } = useParams(); // Get the companyId from the URL
  const navigate = useNavigate();

  // Navigate to the Add Member page
  const handleAddMemberClick = () => {
    navigate(`/company/${companyId}/add-member`);
  };

  return (
    <div className="company-panel">
      <h1>Company Panel for {companyId}</h1>
      <button onClick={handleAddMemberClick}>Add Member</button>
    </div>
  );
};

export default CompanyPanel;
