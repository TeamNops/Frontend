import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UserTasks = () => {
  const { userId } = useParams();
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [files, setFiles] = useState(null);
  const [taskAssigned, setTaskAssigned] = useState('');  // State to store task assigned
  const [techStack, setTechStack] = useState('');  // State to store tech stack

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch(`http://localhost:8000/tasks/${userId}`);
        const data = await response.json();
        if (data.tasks) {
          setTasks(data.tasks);
          setTaskAssigned(data.tasks[0].assigned_task.task_description);
          setTechStack(data.tasks[0].assigned_task.tech_stack.join(", "));  // Assuming tech stack is an array
        } else {
          setError('No tasks found.');
        }
      } catch (error) {
        setError('Failed to fetch tasks.');
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, [userId]);

  const handleFileChange = (e) => {
    setFiles(e.target.files);
  };
  const handleFileUpload = async () => {
    if (!files || files.length === 0) {
      alert("Please select files to upload.");
      return;
    }
  
    const formData = new FormData();
    for (let i = 0; i < files.length; i++) {
      formData.append("files", files[i]);
    }
  
    // Add the current task description and tech stack to formData
    formData.append("task_assigned", taskAssigned);
    formData.append("tech_stack", techStack);
  
    try {
      const response = await fetch(`http://localhost:8000/upload-multiple/${userId}`, {
        method: 'POST',
        body: formData,
      });
  
      const data = await response.json();
      if (data.success) {
        alert("Files uploaded successfully");
        console.log(data.extracted_texts);
        console.log("Task Assigned:", data.task_assigned);
        console.log("Tech Stack:", data.tech_stack);
      } else {
        alert("File upload failed");
      }
    } catch (error) {
      alert("An error occurred during file upload");
    }
  };
  
  if (loading) {
    return <p className="text-white text-center">Loading tasks...</p>;
  }

  if (error) {
    return <p className="text-red-500 text-center">{error}</p>;
  }

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
      <div className="flex flex-col items-center h-screen relative py-10 px-4">
        <div className="bg-gray-600 bg-opacity-70 p-8 rounded-lg shadow-lg w-full max-w-3xl mb-8">
          <h1 className="text-2xl font-bold mb-4">Tasks for User </h1>
          <ul className="space-y-6">
            {tasks.map((task) => (
              <li key={task._id} className="p-4 bg-gray-700 bg-opacity-50 rounded-lg">
                <p><strong>Task Description:</strong> {task.assigned_task.task_description}</p>
                <p><strong>Tech Stack:</strong> {Object.entries(task.assigned_task.tech_stack).map(([key, value]) => (
                  <span key={key}>{key}: {value}<br/></span>
                ))}</p>
                <p><strong>Deadline:</strong> {task.assigned_task.deadline}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-gray-600 bg-opacity-70 p-8 rounded-lg shadow-lg w-full max-w-3xl">
          <h2 className="text-xl font-semibold mb-4">Submit The Code Files</h2>
          <input 
            type="file" 
            onChange={handleFileChange} 
            multiple 
            className="block w-full mb-4 p-2 text-gray-300 bg-gray-800 rounded-lg cursor-pointer hover:scale-105 transition-transform duration-200"
          />
          <button 
            onClick={handleFileUpload} 
            className="w-full bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 rounded-lg transition-transform duration-200 hover:scale-110"
          >
            Upload Files
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserTasks;
