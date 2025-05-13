import React, { useState } from 'react'; // Import React and useState hook to manage component state
import axios from 'axios'; // Import axios for making HTTP requests to the backend
import './App.css'; // Import the CSS file for styling the component

function JobForm(props) {
  // Define the state 'formData' with initial values for job title, company, application date, and status
  const [formData, setFormData] = useState({
    job_title: '',
    company: '',
    application_date: '',
    status: 'Applied', // Default status is 'Applied'
  });

  // Handle input field changes and update the corresponding form field in the state
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value }); // Update the state for the specific field
  };

  // Handle form submission asynchronously
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    try {
      // Send a POST request to the backend with the form data
      await axios.post('http://127.0.0.1:8000/api/jobs', formData);
      alert('Job added successfully!'); // Notify the user about successful job addition
      
      // Notify the parent component (App.js) to refresh the job list after adding a new job
      props.onJobAdded(); // Trigger the refresh state change in App.js

      // Reset the form to its initial state after submission
      setFormData({
        job_title: '',
        company: '',
        application_date: '',
        status: 'Applied',
      });
    } catch (error) {
      // Handle any errors that occur during the submission
      console.error('There was an error submitting the form:', error);
      alert('Failed to add job.'); // Notify the user about the failure
    }
  };

  return (
    <div className="job-form-container"> {/* Container for the job form */}
      <form onSubmit={handleSubmit}> {/* Form submission triggers handleSubmit function */}
        <h2>Add New Job</h2>

        {/* Input field for job title */}
        <input
          type="text"
          name="job_title"
          placeholder="Job Title"
          value={formData.job_title}
          onChange={handleChange} // Update formData on input change
          required // Makes this field required
        /><br />

        {/* Input field for company name */}
        <input
          type="text"
          name="company"
          placeholder="Company"
          value={formData.company}
          onChange={handleChange} // Update formData on input change
          required
        /><br />

        {/* Input field for application date */}
        <input
          type="date"
          name="application_date"
          value={formData.application_date}
          onChange={handleChange} // Update formData on input change
          required
        /><br />

        {/* Dropdown for job application status */}
        <select name="status" value={formData.status} onChange={handleChange}>
          <option>Applied</option>
          <option>Interviewed</option>
          <option>Rejected</option>
          <option>Offered</option>
        </select><br />

        {/* Submit button to add the job */}
        <button type="submit">Add Job</button>
      </form>
    </div>
  );
}

export default JobForm; // Export the JobForm component for use in other parts of the app
