import React, { useState } from 'react'; // Import React and the useState hook for managing state
import JobForm from './THEAjobfrom.jsx'; // Import the JobForm component for adding new job applications
import JobList from './JobList'; // Import the JobList component to display the list of job applications
import './App.css'; // Import the CSS file for styling the application

function App() {
  // Define a state variable 'refresh' and a function 'setRefresh' to update it
  // useState(false) initializes 'refresh' to false, indicating that no refresh is needed initially
  const [refresh, setRefresh] = useState(false);

  // Define a function 'handleJobAdded' to toggle the 'refresh' state
  // This function will be called when a new job is added to the list
  const handleJobAdded = () => setRefresh(!refresh); // Toggles the 'refresh' state between true and false

  return (
    // Main container for the application with the class name 'app-container'
    <div className="app-container">
      {/* Heading for the application */}
      <h1>JOB FORM</h1>

      {/* Render the JobForm component and pass the 'handleJobAdded' function as a prop */}
      {/* This allows the JobForm component to notify App when a job is added */}
      <JobForm onJobAdded={handleJobAdded} />

      {/* Render the JobList component and use the 'refresh' state as the key */}
      {/* The 'refresh' state is used to force a re-render of the JobList when it changes */}
      <JobList refresh={refresh} />
    </div>
  );
}
export default App; // Export the App component so it can be used elsewhere in the application
