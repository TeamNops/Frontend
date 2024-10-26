// import React, { useState } from 'react';
// import { useParams } from 'react-router-dom';

// const TaskAssignment = () => {
//   const { companyId } = useParams();
//   const [taskDescription, setTaskDescription] = useState('');
//   const [message, setMessage] = useState('');

//   const blockyTextStyle = {
//     fontFamily: "Nasalization",
//     textShadow: "2.25px 2.25px 0px rgba(0, 0, 0, 0.3)",
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch(`http://localhost:8000/company/${companyId}/assign-task`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           task: taskDescription,
//         }),
//       });

//       const data = await response.json();
//       setMessage(data.message);
//     } catch (error) {
//       setMessage('Failed to assign task.');
//       console.error(error);
//     }
//   };

//   return (
//     <div className="w-full h-screen relative" style={blockyTextStyle}>
//       <video
//         autoPlay
//         muted
//         loop
//         className="fixed inset-0 w-full h-full object-cover brightness-50"
//       >
//         <source src="/src/assets/18327-291012897.mp4" type="video/mp4" />
//       </video>
//       <div className="flex justify-center items-center h-screen relative">
//         <div className="bg-gray-500 bg-opacity-65 px-28 py-10 rounded-lg shadow-lg">
//           <h1 className="text-white text-2xl font-bold mb-2">Assign Task in Company: {companyId}</h1>
//           <p className="text-gray-300 mb-8 animate-pulse">Enter task details below</p>

//           <form onSubmit={handleSubmit} className="space-y-4">
//             <div>
//               <label className="block text-gray-300 text-md mb-2 italic">Task Description</label>
//               <textarea
//                 placeholder="Enter task description"
//                 value={taskDescription}
//                 onChange={(e) => setTaskDescription(e.target.value)}
//                 required
//                 rows="5"
//                 className="w-full px-4 py-2 border rounded-lg text-sm transition-transform duration-200 hover:scale-105"
//               ></textarea>
//             </div>
//             <button
//               type="submit"
//               className="w-full border border-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-400 focus:outline-none transition-transform duration-200 hover:scale-110"
//             >
//               Assign Task
//             </button>
//           </form>

//           {message && (
//             <p className="mt-4 text-white text-center bg-gray-600 bg-opacity-50 p-2 rounded">
//               {message}
//             </p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TaskAssignment;
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const TaskAssignment = () => {
  const { companyId } = useParams();
  const [taskDescription, setTaskDescription] = useState('');
  const [deadline, setDeadline] = useState(''); // New state for deadline
  const [message, setMessage] = useState('');
  const [assignedTasks, setAssignedTasks] = useState([]);

  const blockyTextStyle = {
    fontFamily: "Nasalization",
    textShadow: "2.25px 2.25px 0px rgba(0, 0, 0, 0.3)",
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:8000/company/${companyId}/assign-task`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          task: taskDescription,
          deadline, // Include deadline in the request
        }),
      });

      const data = await response.json();
      setMessage(data.message);

      if (data.assigned_tasks) {
        setAssignedTasks(data.assigned_tasks);
      }
    } catch (error) {
      setMessage('Failed to assign task.');
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
        <div className="bg-gray-500 bg-opacity-65 px-28 py-10 rounded-lg shadow-lg">
          <h1 className="text-white text-2xl font-bold mb-2">Assign Task in Company</h1>
          <p className="text-gray-300 mb-8 animate-pulse">Enter task details below</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-300 text-md mb-2 italic">Task Description</label>
              <textarea
                placeholder="Enter task description"
                value={taskDescription}
                onChange={(e) => setTaskDescription(e.target.value)}
                required
                rows="5"
                className="w-full px-4 py-2 border rounded-lg text-sm transition-transform duration-200 hover:scale-105"
              ></textarea>
            </div>
            <div>
              <label className="block text-gray-300 text-md mb-2 italic">Deadline</label>
              <input
                type="datetime-local"
                value={deadline}
                onChange={(e) => setDeadline(e.target.value)}
                required
                className="w-full px-4 py-2 border rounded-lg text-sm transition-transform duration-200 hover:scale-105"
              />
            </div>
            <button
              type="submit"
              className="w-full border border-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-400 focus:outline-none transition-transform duration-200 hover:scale-110"
            >
              Assign Task
            </button>
          </form>

          {message && (
            <p className="mt-4 text-white text-center bg-gray-600 bg-opacity-50 p-2 rounded">
              {message}
            </p>
          )}

          {assignedTasks.length > 0 && (
            <div className="mt-6 bg-gray-700 bg-opacity-70 p-4 rounded-lg">
              <h2 className="text-white text-lg font-semibold mb-4">Assigned Tasks:</h2>
              <ul className="space-y-2">
                {assignedTasks.map((task, index) => (
                  <li key={index} className="text-gray-300 p-2 border border-gray-600 rounded">
                    <p><strong>User ID:</strong> {task.user_id}</p>
                    <p><strong>Task Description:</strong> {task.assigned_task.task_description}</p>
                    <p><strong>Tech Stack:</strong> {task.assigned_task.tech_stack.join(', ')}</p>
                    <p><strong>Deadline:</strong> {task.assigned_task.deadline}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TaskAssignment;
