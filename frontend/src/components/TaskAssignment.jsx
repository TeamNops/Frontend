import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const TaskAssignment = () => {
  const { companyId } = useParams();  // Get the companyId from the URL
  const [taskDescription, setTaskDescription] = useState('');
  const [message, setMessage] = useState('');

  // Handle form submission for task assignment
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
        }),
      });

      const data = await response.json();
      setMessage(data.message);
    } catch (error) {
      setMessage('Failed to assign task.');
      console.error(error);
    }
  };

  return (
    <div className="task-assignment-page">
      <h1>Assign Task in Company: {companyId}</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <textarea
            placeholder="Enter task description"
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            required
            rows="5"
            cols="40"
          ></textarea>
        </div>
        <button type="submit">Assign Task</button>
      </form>

      {message && <p>{message}</p>}
    </div>
  );
};

export default TaskAssignment;
