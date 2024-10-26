// import React from 'react';
// import { useNavigate, useParams } from 'react-router-dom';

// const CompanyPanel = () => {
//   const { companyId } = useParams(); // Get the companyId from the URL
//   const navigate = useNavigate();

//   const handleAddMemberClick = () => {
//     navigate(`/company/${companyId}/add-member`);
//   };

//   // Navigate to the Assignment of Task page
//   const handleAssignmentClick = () => {
//     navigate(`/company/${companyId}/assign-task`);
//   };

//   // Navigate to the Get Worker Performance page
//   const handleWorkerPerformanceClick = () => {
//     navigate(`/company/${companyId}/worker-performance`);
//   };

//   return (
//     <div className="company-panel">
//       <h1>Company Panel for {companyId}</h1>
      
//       {/* Add Member Button */}
//       <button onClick={handleAddMemberClick}>Add Member</button>

//       {/* Assignment of Task Button */}
//       <button onClick={handleAssignmentClick}>Assignment of Task</button>

//       {/* Get Worker Performance Button */}
//       <button onClick={handleWorkerPerformanceClick}>Get Worker Performance</button>
//     </div>
//   );
// };

// export default CompanyPanel;
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const CompanyPanel = () => {
  const { companyId } = useParams();
  const navigate = useNavigate();

  const blockyTextStyle = {
    fontFamily: "Nasalization",
    textShadow: "2.25px 2.25px 0px rgba(0, 0, 0, 0.3)",
  };

  const handleAddMemberClick = () => {
    navigate(`/company/${companyId}/add-member`);
  };

  const handleAssignmentClick = () => {
    navigate(`/company/${companyId}/assign-task`);
  };

  const handleWorkerPerformanceClick = () => {
    navigate(`/company/${companyId}/worker-performance`);
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
        <div className="bg-gray-500 bg-opacity-65 px-28 py-10 rounded-lg shadow-lg">
          <h1 className="text-white text-2xl font-bold mb-2">Company Panel </h1>
          <p className="text-gray-300 mb-8 animate-pulse">Manage your company operations</p>

          <div className="space-y-10">
            <button
              onClick={handleAddMemberClick}
              className="w-full border border-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-400 focus:outline-none transition-transform duration-200 hover:scale-110"
            >
              Add Member
            </button>
            <button
              onClick={handleAssignmentClick}
              className="w-full border border-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-400 focus:outline-none transition-transform duration-200 hover:scale-110"
            >
              Assignment of Task
            </button>
            <button
              onClick={handleWorkerPerformanceClick}
              className="w-full border border-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-400 focus:outline-none transition-transform duration-200 hover:scale-110"
            >
              Get Worker Performance
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyPanel;