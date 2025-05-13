import React, { useEffect, useState } from 'react'; // Import React, useState and useEffect hooks
import axios from 'axios'; // Import axios to make HTTP requests
import './Job.css'; // Import the CSS file for styling the component

function JobList({ refresh }) {  // Accept 'refresh' as a prop to trigger job list refresh
  const [jobs, setJobs] = useState([false]); // State to store the list of jobs
  const [filterStatus, setFilterStatus] = useState('All'); // State to store the selected filter status (e.g. All, Applied)

  // Fetch jobs whenever the 'refresh' prop changes
  useEffect(() => {
    fetchJobs(); // Call fetchJobs function to retrieve the job data
  }, [refresh]); // This will trigger whenever 'refresh' changes, re-fetching job data

  // Function to fetch job data from the backend
  const fetchJobs = async () => {
    try {
      const res = await axios.get('http://127.0.0.1:8000/api/jobs'); // Send GET request to fetch jobs
      setJobs(res.data); // Update the jobs state with the fetched data
    } catch (err) {
      console.error('Error fetching jobs:', err); // Log error if fetching fails
    }
  };

  // Function to handle job deletion
  const handleDelete = async (jobId) => {
    try {
      await axios.delete(`http://127.0.0.1:8000/api/jobs/${jobId}`); // Send DELETE request to remove job by ID
      fetchJobs(); // Re-fetch the jobs list after deletion to update the UI
    } catch (error) {
      console.error('Error deleting job:', error); // Log error if deletion fails
    }
  };

  // Function to handle filter status change
  const handleFilter = (status) => {
    setFilterStatus(status); // Set the filter status based on button click
  };

  // Filter the jobs based on the selected status
  const filteredJobs = filterStatus === 'All' ? jobs : jobs.filter(job => job.status === filterStatus);

  // Function to format the date in a user-friendly format
  const formatDate = (dateString) => {
    const date = new Date(dateString); // Convert date string to Date object
    return date.toLocaleDateString(); // Format the date to a locale-specific string
  };

  return (
    <div className="job-list-container"> {/* Container for the job list */}
      <h2>All Job Applications</h2>

      {/* Filter buttons for job status */}
      <div>
        <button onClick={() => handleFilter('All')}>All</button>
        <button onClick={() => handleFilter('Applied')}>Applied</button>
        <button onClick={() => handleFilter('Interviewed')}>Interviewed</button>
        <button onClick={() => handleFilter('Rejected')}>Rejected</button>
        <button onClick={() => handleFilter('Offered')}>Offered</button>
      </div>

      {/* Table to display the filtered list of jobs */}
      <table border="1" cellPadding="5">
        <thead>
          <tr>
            <th>Title</th>
            <th>Company</th>
            <th>Date</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* Map through filtered jobs and render a table row for each */}
          {filteredJobs.map(job => (
            <tr key={job.id}> {/* Use job.id as the unique key for each row */}
              <td>{job.job_title}</td> {/* Display job title */}
              <td>{job.company}</td> {/* Display company name */}
              <td>{formatDate(job.application_date)}</td> {/* Display formatted application date */}
              <td>{job.status}</td> {/* Display job status */}
              <td>
                {/* Button to delete job */}
                <button onClick={() => handleDelete(job.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default JobList; // Export the JobList component for use in other parts of the app
