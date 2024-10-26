// import React from 'react'
// import { useParams } from 'react-router-dom'
// import { BarChart2, Users, Clock, Send, MessageCircle, Zap, Target, TrendingUp, ChevronRight } from 'lucide-react'

// export default function UserWork() {
//   const { userId } = useParams()

//   const blockyTextStyle = {
//     fontFamily: "Nasalization",
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-black to-gray-700 text-gray-100 p-8 relative overflow-hidden w-full"
//       style={blockyTextStyle}  
//     >
//       <div className="max-w-7xl mx-auto">
//         <h1 className='flex text-6xl m-5'>User Work Page</h1>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           {/* Key Metrics */}
//           {[
//             { value: '5', label: 'Tasks', icon: BarChart2 },
//             { value: '3', label: 'In Progress', icon: Users },
//             { value: '2', label: 'Completed', icon: Clock },
//           ].map((metric, index) => (
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
//                 <p className="text-gray-400">User ID: {userId}</p>
//               </div>
//             </div>
//             <div className="grid grid-cols-2 gap-6 mt-6">
//               {[
//                 { label: 'Department', value: 'Engineering' },
//                 { label: 'Role', value: 'Developer' },
//                 { label: 'Team', value: 'Frontend' },
//                 { label: 'Experience', value: '3 years' },
//               ].map((item, index) => (
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
//               {[
//                 { label: 'Efficiency', value: '92%', icon: Zap, color: 'text-green-400' },
//                 { label: 'Quality', value: '88%', icon: Target, color: 'text-blue-400' },
//                 { label: 'Progress', value: '+15%', icon: TrendingUp, color: 'text-yellow-400' },
//               ].map((metric, index) => (
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

//           {/* Task List */}
//           <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-2xl p-6 col-span-1 md:col-span-2">
//             <h2 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">Current Tasks</h2>
//             <div className="space-y-4">
//               {[
//                 { name: 'Implement new feature', status: 'In Progress', priority: 'High' },
//                 { name: 'Code review', status: 'Pending', priority: 'Medium' },
//                 { name: 'Bug fix', status: 'To Do', priority: 'Low' },
//                 { name: 'Documentation update', status: 'In Progress', priority: 'Medium' },
//               ].map((task, index) => (
//                 <div key={index} className="flex items-center justify-between bg-white bg-opacity-5 rounded-xl p-4 transition-all duration-300 hover:bg-opacity-10">
//                   <div>
//                     <h3 className="font-semibold">{task.name}</h3>
//                     <p className="text-sm text-gray-400">Status: {task.status}</p>
//                   </div>
//                   <span className={`text-sm font-medium px-2 py-1 rounded ${
//                     task.priority === 'High' ? 'bg-red-500' :
//                     task.priority === 'Medium' ? 'bg-yellow-500' : 'bg-green-500'
//                   }`}>
//                     {task.priority}
//                   </span>
//                 </div>
//               ))}
//             </div>
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
//   )
// }
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const UserWork = () => {
  const { userId } = useParams();  // Get user ID from the URL
  const navigate = useNavigate();  // Initialize navigate

  // Function to handle "See Your Work" button click
  const handleSeeYourWorkClick = () => {
    navigate(`/user-task/${userId}`);  // Redirect to user-task route with user ID
  };

  // Function to handle "To Do List" button click
  const handleToDoListClick = () => {
    navigate(`/user-to-do/${userId}`);  // Redirect to user-to-do route with user ID
  };

  return (
    <div className="w-full h-screen relative text-white font-nasalization">
      <video
        autoPlay
        muted
        loop
        className="fixed inset-0 w-full h-full object-cover brightness-50"
      >
        <source src="/src/assets/18327-291012897.mp4" type="video/mp4" />
      </video>
      
      <div className="flex flex-col items-center justify-center h-screen relative">
        <div className="bg-gray-600 bg-opacity-70 p-10 rounded-lg shadow-lg text-center max-w-md w-full">
          <h1 className="text-2xl font-bold mb-8">Welcome to your work page</h1>

          {/* See Your Work Button */}
          <button 
            onClick={handleSeeYourWorkClick}
            className="w-full mb-4 bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 rounded-lg transition-transform duration-200 hover:scale-110"
          >
            See Your Work
          </button>

          {/* To Do List Button */}
          <button 
            onClick={handleToDoListClick}
            className="w-full bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 rounded-lg transition-transform duration-200 hover:scale-110"
          >
            To Do List
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserWork;
