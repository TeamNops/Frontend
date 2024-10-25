import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const CompanyPanel = () => {
  const { companyId } = useParams(); // Get the companyId from the URL
  const navigate = useNavigate();

  const handleAddMemberClick = () => {
    navigate(`/company/${companyId}/add-member`);
  };

  // Navigate to the Assignment of Task page
  const handleAssignmentClick = () => {
    navigate(`/company/${companyId}/assign-task`);
  };

  // Navigate to the Get Worker Performance page
  const handleWorkerPerformanceClick = () => {
    navigate(`/company/${companyId}/worker-performance`);
  };

  return (
    <div className="company-panel">
      <h1>Company Panel for {companyId}</h1>
      
      {/* Add Member Button */}
      <button onClick={handleAddMemberClick}>Add Member</button>

      {/* Assignment of Task Button */}
      <button onClick={handleAssignmentClick}>Assignment of Task</button>

      {/* Get Worker Performance Button */}
      <button onClick={handleWorkerPerformanceClick}>Get Worker Performance</button>
    </div>
  );
};

export default CompanyPanel;
