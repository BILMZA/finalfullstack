<?php

namespace App\Http\Controllers;

use App\Models\Job;
use Illuminate\Http\Request;
class JobController extends Controller //this class is used to handle job-related operations
{
    // Constructor to initialize any dependencies if needed
    public function __construct()
    {
        // Middleware can be added here if needed
    }

    // Fetch all job entries
    public function index()
    {
        // Return all jobs as JSON
        //yay function sabhi jobs ko fetch krne ke liye use hoti hai aur GET request se call hoti hai
        // Example: GET /api/jobs
        return response()->json(Job::all());
    }

    // Create a new job entry

    //hum user say yaha value ka format kya hoga define karne ke liye use kr rhay
    // Example: {"job_title": "Software Engineer", "company": "Tech Corp", "application_date": "2023-10-01", "status": "Applied"}
    public function store(Request $request)
    {
        // Validate the incoming request
        $validatedData = $request->validate([
            'job_title' => 'required|string|max:255',
            'company' => 'required|string|max:255',
            'application_date' => 'required|date',
            'status' => 'required|in:Applied,Interviewed,Rejected,Offered',
        ]);

        // Create a new job and return it as JSON
        $job = Job::create($validatedData);
        return response()->json($job, 201);
    }

    // Update an existing job entry
    //bilkul same format hai jaise store function me kiya tha
    public function update(Request $request, $id)
    {
        // Find the job by ID
        $job = Job::findOrFail($id);

        // Validate the incoming request
        $validatedData = $request->validate([
            'job_title' => 'required|string|max:255',
            'company' => 'required|string|max:255',
            'application_date' => 'required|date',
            'status' => 'required|in:Applied,Interviewed,Rejected,Offered',
        ]);

        // Update the job and return the updated data
        $job->update($validatedData);
        return response()->json($job);
    }

    // Delete a job entry
    // yay fucntion delete() function hai jo job ko delete karne ke liye use hoti hai
    // Example: DELETE /api/jobs/1
    public function destroy($id)
    {
        // Find the job by ID
        $job = Job::findOrFail($id);

        // Delete the job
        $job->delete();
        return response()->json(['message' => 'Job deleted successfully']);
    }
}
