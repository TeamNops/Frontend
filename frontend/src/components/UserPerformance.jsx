// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
// import { BarChart2, Users, Clock, Send, MessageCircle, Zap, Target, TrendingUp, ChevronRight } from 'lucide-react';

// const UserDashboard = () => {
//   const { companyId } = useParams();
//   const [taskScores, setTaskScores] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     const fetchTaskScores = async () => {
//       try {
//         const response = await fetch(`http://localhost:8000/company/${companyId}/user-scores`);
//         const data = await response.json();

//         if (data.user_scores) {
//           setTaskScores(data.user_scores);
//         } else {
//           setError('No user scores found.');
//         }
//       } catch (error) {
//         setError('Failed to fetch user scores.');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchTaskScores();
//   }, [companyId]);

//   const chartData = taskScores.map((user) => ({
//     email: user.email,
//     score: user.score
//   }));

//   const sortedLeaderboard = [...chartData].sort((a, b) => b.score - a.score);

//   const blockyTextStyle = {
//     fontFamily: "Nasalization, sans-serif",
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-black to-gray-700 text-gray-100 p-8 relative overflow-hidden w-full"
//       style={blockyTextStyle}
//     >
//       <div className="max-w-7xl mx-auto">
//         <h1 className='flex text-6xl m-5'>User Work Dashboard</h1>
        
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           {/* Key Metrics */}
//           {[{ value: '5', label: 'Tasks', icon: BarChart2 }, { value: '3', label: 'In Progress', icon: Users }, { value: '2', label: 'Completed', icon: Clock }].map((metric, index) => (
//             <div key={index} className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-2xl p-6 flex flex-col items-center justify-center transition-all duration-300 hover:bg-opacity-20">
//               <metric.icon className="text-purple-400 mb-3" size={28} />
//               <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">{metric.value}</h2>
//               <p className="text-sm text-gray-400 mt-2">{metric.label}</p>
//             </div>
//           ))}

//           {/* Main Info Card */}
//           <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-2xl p-8 col-span-1 md:col-span-2 row-span-2">
//             <div className="flex items-center mb-6">
//               <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-600 rounded-full mr-6 flex items-center justify-center">
//                 <BarChart2 size={32} className="text-white" />
//               </div>
//               <div>
//                 <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">Work Dashboard</h1>
//                 <p className="text-gray-400">Company ID: {companyId}</p>
//               </div>
//             </div>
//             <div className="grid grid-cols-2 gap-6 mt-6">
//               {[{ label: 'Department', value: 'Engineering' }, { label: 'Role', value: 'Developer' }, { label: 'Team', value: 'Frontend' }, { label: 'Experience', value: '3 years' }].map((item, index) => (
//                 <div key={index} className="flex items-center bg-white bg-opacity-5 rounded-xl p-4 transition-all duration-300 hover:bg-opacity-10">
//                   <div className="w-3 h-3 bg-purple-400 rounded-full mr-3"></div>
//                   <span className="text-sm">{item.label}: <span className="font-semibold">{item.value}</span></span>
//                 </div>
//               ))}
//             </div>
//             <div className="mt-8 flex space-x-4">
//               <button className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-6 py-3 rounded-xl flex items-center text-sm font-semibold transition-all duration-300 hover:opacity-90">
//                 <Send className="w-4 h-4 mr-2" />
//                 Submit Work
//               </button>
//               <button className="bg-white bg-opacity-10 text-white px-6 py-3 rounded-xl flex items-center text-sm font-semibold transition-all duration-300 hover:bg-opacity-20">
//                 <MessageCircle className="w-4 h-4 mr-2" />
//                 Request Feedback
//               </button>
//             </div>
//           </div>

//           {/* Performance Metrics */}
//           <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-2xl p-6">
//             <h2 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">Performance Metrics</h2>
//             <div className="space-y-4">
//               {[{ label: 'Efficiency', value: '92%', icon: Zap, color: 'text-green-400' }, { label: 'Quality', value: '88%', icon: Target, color: 'text-blue-400' }, { label: 'Progress', value: '+15%', icon: TrendingUp, color: 'text-yellow-400' }].map((metric, index) => (
//                 <div key={index} className="flex items-center justify-between bg-white bg-opacity-5 rounded-xl p-4 transition-all duration-300 hover:bg-opacity-10">
//                   <div className="flex items-center">
//                     <metric.icon className={`${metric.color} mr-3`} size={24} />
//                     <span className="text-sm font-medium">{metric.label}</span>
//                   </div>
//                   <span className={`text-lg font-bold ${metric.color}`}>{metric.value}</span>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Task Completion Chart */}
//           <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-2xl p-6 col-span-1 md:col-span-2">
//             <h2 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">Task Completion for Company {companyId}</h2>
//             {loading ? (
//               <p>Loading...</p>
//             ) : error ? (
//               <p className="text-red-500">{error}</p>
//             ) : (
//               <ResponsiveContainer width="100%" height={400}>
//                 <BarChart
//                   data={chartData}
//                   margin={{
//                     top: 5, right: 30, left: 20, bottom: 5,
//                   }}
//                 >
//                   <CartesianGrid strokeDasharray="3 3" />
//                   <XAxis dataKey="email" />
//                   <YAxis />
//                   <Tooltip />
//                   <Legend />
//                   <Bar dataKey="score" fill="#8884d8" />
//                 </BarChart>
//               </ResponsiveContainer>
//             )}
//           </div>

//           {/* Leaderboard */}
//           <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-2xl p-6 col-span-1 md:col-span-2">
//             <h2 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">Leaderboard</h2>
//             <ul className="space-y-4">
//               {sortedLeaderboard.map((user, index) => (
//                 <li key={index} className="flex justify-between items-center bg-white bg-opacity-5 rounded-xl p-4 transition-all duration-300 hover:bg-opacity-10">
//                   <span className="text-sm font-medium">{index + 1}. {user.email}</span>
//                   <span className="text-lg font-bold text-purple-400">{user.score}</span>
//                 </li>
//               ))}
//             </ul>
//           </div>
          
//           {/* Quick Actions */}
//           <div className="bg-gradient-to-br from-purple-600 to-pink-700 rounded-2xl p-6 relative overflow-hidden group">
//             <div className="absolute inset-0 bg-white opacity-10 transition-opacity duration-300 group-hover:opacity-20"></div>
//             <div className="relative z-10">
//               <h2 className="text-2xl font-bold text-white mb-4">Quick Actions</h2>
//               <div className="space-y-3">
//                 <button className="w-full bg-white text-purple-600 px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:bg-opacity-90">
//                   Start New Task
//                 </button>
//                 <button className="w-full bg-white bg-opacity-20 text-white px-6 py-3 rounded-xl font-semibold flex items-center justify-center transition-all duration-300 hover:bg-opacity-30">
//                   View All Tasks
//                   <ChevronRight className="ml-2 w-4 h-4" />
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UserDashboard;


import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { jsPDF } from 'jspdf';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { BarChart2, Users, Clock, Send, MessageCircle, Zap, Target, TrendingUp, ChevronRight, Download, Star } from 'lucide-react';

const UserDashboard = () => {
  const { companyId } = useParams();
  const [taskScores, setTaskScores] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [reportContent, setReportContent] = useState('');

  useEffect(() => {
    const fetchTaskScores = async () => {
      try {
        const response = await fetch(`http://localhost:8000/company/${companyId}/user-scores`);
        const data = await response.json();

        if (data.user_scores) {
          setTaskScores(data.user_scores);
        } else {
          setError('No user scores found.');
        }
      } catch (error) {
        setError('Failed to fetch user scores.');
      } finally {
        setLoading(false);
      }
    };

    fetchTaskScores();
  }, [companyId]);

  // Function to download the report as a PDF
  const downloadReport = async () => {
    try {
      // Change from fetch to a POST request
const response = await fetch(`http://localhost:8000/company/${companyId}/generate_report/`, {
    method: 'POST', // Specify POST method
  });
  
      const data = await response.json();

      if (data.report) {
        setReportContent(data.report);

        // Use jsPDF to create a PDF document
        const doc = new jsPDF();
        doc.text(data.report, 10, 10);
        doc.save(`weekly_report_${companyId}.pdf`);
      } else {
        alert('Failed to generate report.');
      }
    } catch (error) {
      console.error('Error downloading report:', error);
      alert('Error downloading report.');
    }
  };

  const chartData = taskScores.map((user) => ({
    email: user.email,
    score: user.score
  }));

  const sortedLeaderboard = [...chartData].sort((a, b) => b.score - a.score);

  const blockyTextStyle = {
    fontFamily: "Nasalization, sans-serif",
  };

  // Function to assign badges based on ranking
  const getBadge = (index) => {
    if (index === 0) return 'Top Performer';
    if (index === 1) return 'Excellent';
    if (index === 2) return 'Great';
    return 'Contributor';
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-700 text-gray-100 p-8 relative overflow-hidden w-full"
      style={blockyTextStyle}
    >
      <div className="max-w-7xl mx-auto">
        <h1 className='flex text-6xl m-5'>User Work Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Key Metrics */}
          {[{ value: '5', label: 'Tasks', icon: BarChart2 }, { value: '3', label: 'In Progress', icon: Users }, { value: '2', label: 'Completed', icon: Clock }].map((metric, index) => (
            <div key={index} className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-2xl p-6 flex flex-col items-center justify-center transition-all duration-300 hover:bg-opacity-20">
              <metric.icon className="text-purple-400 mb-3" size={28} />
              <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">{metric.value}</h2>
              <p className="text-sm text-gray-400 mt-2">{metric.label}</p>
            </div>
          ))}

          {/* Main Info Card */}
          <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-2xl p-8 col-span-1 md:col-span-2 row-span-2">
            <div className="flex items-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-600 rounded-full mr-6 flex items-center justify-center">
                <BarChart2 size={32} className="text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">Work Dashboard</h1>
                <p className="text-gray-400">Company ID: {companyId}</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6 mt-6">
              {[{ label: 'Department', value: 'Engineering' }, { label: 'Role', value: 'Developer' }, { label: 'Team', value: 'Frontend' }, { label: 'Experience', value: '3 years' }].map((item, index) => (
                <div key={index} className="flex items-center bg-white bg-opacity-5 rounded-xl p-4 transition-all duration-300 hover:bg-opacity-10">
                  <div className="w-3 h-3 bg-purple-400 rounded-full mr-3"></div>
                  <span className="text-sm">{item.label}: <span className="font-semibold">{item.value}</span></span>
                </div>
              ))}
            </div>
            <div className="mt-8 flex space-x-4">
              <button className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-6 py-3 rounded-xl flex items-center text-sm font-semibold transition-all duration-300 hover:opacity-90">
                <Send className="w-4 h-4 mr-2" />
                Submit Work
              </button>
              <button className="bg-white bg-opacity-10 text-white px-6 py-3 rounded-xl flex items-center text-sm font-semibold transition-all duration-300 hover:bg-opacity-20">
                <MessageCircle className="w-4 h-4 mr-2" />
                Request Feedback
              </button>
            </div>
          </div>

          {/* Performance Metrics */}
          <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-2xl p-6">
            <h2 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">Performance Metrics</h2>
            <div className="space-y-4">
              {[{ label: 'Efficiency', value: '92%', icon: Zap, color: 'text-green-400' }, { label: 'Quality', value: '88%', icon: Target, color: 'text-blue-400' }, { label: 'Progress', value: '+15%', icon: TrendingUp, color: 'text-yellow-400' }].map((metric, index) => (
                <div key={index} className="flex items-center justify-between bg-white bg-opacity-5 rounded-xl p-4 transition-all duration-300 hover:bg-opacity-10">
                  <div className="flex items-center">
                    <metric.icon className={`${metric.color} mr-3`} size={24} />
                    <span className="text-sm font-medium">{metric.label}</span>
                  </div>
                  <span className={`text-lg font-bold ${metric.color}`}>{metric.value}</span>
                </div>
              ))}
            </div>
            {/* Download Report Button */}
            <div className="mt-6">
              <button
                onClick={downloadReport}
                className="w-full bg-gradient-to-r from-purple-500 to-pink-600 text-white px-6 py-3 rounded-xl flex items-center justify-center text-sm font-semibold transition-all duration-300 hover:opacity-90"
              >
                <Download className="w-4 h-4 mr-2" />
                Download Weekly Report as PDF
                
              </button>
            </div>
          </div>    

          {/* Task Completion Chart */}
          <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-2xl p-6 col-span-1 md:col-span-2">
            <h2 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">Task Completion for Company {companyId}</h2>
            {loading ? (
              <p>Loading...</p>
            ) : error ? (
              <p className="text-red-500">{error}</p>
            ) : (
              <ResponsiveContainer width="100%" height={400}>
                <BarChart
                  data={chartData}
                  margin={{
                    top: 5, right: 30, left: 20, bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="email" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="score" fill="#8884d8" />
                </BarChart>
              </ResponsiveContainer>
            )}
          </div>

          {/* Leaderboard */}
          <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-2xl p-6 col-span-1 md:col-span-2">
            <h2 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">Leaderboard</h2>
            <ul className="space-y-4">
              {sortedLeaderboard.map((user, index) => (
                <li key={index} className="flex justify-between items-center bg-white bg-opacity-5 rounded-xl p-4 transition-all duration-300 hover:bg-opacity-10">
                  <div className="flex items-center">
                    {/* Add star for top 3 ranks */}
                    {index < 3 && <Star className="text-yellow-400 mr-2" size={20} />}
                    <span className="text-sm font-medium">{index + 1}. {user.email}</span>
                  </div>
                  <div className="flex items-center">
                    <span className={`text-sm font-semibold px-3 py-1 rounded-full ${index === 0 ? 'bg-purple-500' : index === 1 ? 'bg-blue-500' : index === 2 ? 'bg-green-500' : 'bg-gray-500'}`}>
                      {getBadge(index)}
                    </span>
                    <span className="text-lg font-bold text-purple-400 ml-3">{user.score}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Quick Actions */}
          <div className="bg-gradient-to-br from-purple-600 to-pink-700 rounded-2xl p-6 relative overflow-hidden group">
            <div className="absolute inset-0 bg-white opacity-10 transition-opacity duration-300 group-hover:opacity-20"></div>
            <div className="relative z-10">
              <h2 className="text-2xl font-bold text-white mb-4">Quick Actions</h2>
              <div className="space-y-3">
                <button className="w-full bg-white text-purple-600 px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:bg-opacity-90">
                  Start New Task
                </button>
                <button className="w-full bg-white bg-opacity-20 text-white px-6 py-3 rounded-xl font-semibold flex items-center justify-center transition-all duration-300 hover:bg-opacity-30">
                  View All Tasks
                  <ChevronRight className="ml-2 w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
