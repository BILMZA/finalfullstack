<?php
//route api ko define karne ke liye use hota hai
//        yaha pere hum woh function define karte hai jo humne controller me define kiya hai
// api ka maqsad yeh hai ki humari application ke backend aur frontend ke darmiyan ek interface create karna hai
// jisse humari application ke backend aur frontend ke darmiyan data exchange ho sake
// axios ya fetch API ke zariye hum is api ko call karte hai
// axios ka maqsad yeh hai ki humari application ke frontend se backend ke sath data exchange karna hai
use Illuminate\Http\Request; 
// Iska matlab hai hum Laravel ka Request class use kar rahe hain 
// jiske zariye hum frontend se aane wale data (form, API request waghera) ko handle kar sakte hain.

use Illuminate\Support\Facades\Schema;
// Schema ka use database structure banane (tables create/update karne) ke liye hota hai 
// jaise migrations ke through tables define karte hain.

use Illuminate\Support\Facades\Route; 
// Route ka matlab hai URL aur controller ke darmiyan connection banata hai. 
// Agar user kisi URL pe jaye, toh Route decide karta hai kaunsa function call hoga.

use App\Http\Controllers\JobController;
// Yeh specific controller ko import karta hai jahan pe humne logic likha hota hai 
// (jaise job create karna, delete karna, update karna). 
// Route is controller ke functions ko call karta hai.

// Test route to check if backend is working
Route::get('/check', function () {
    return response()->json(['message' => ' Backend route is working']);
});
//GET , POST ETC ARE HTTP METHODS THAT ARE USED TO INTERACT WITH THE SERVER AND THEIR LOGIC 
// IS HANDLED BY THE CONTROLLER , THEY ARE MAINLY USED FOR CRUD OPERATIONS AND MAINLY USED FOR TESTING PURPOSES
// Job API routes
Route::get('/jobs', [JobController::class, 'index']); // Fetch all jobs
Route::post('/jobs', [JobController::class, 'store']); // Create a new job
Route::put('/jobs/{id}', [JobController::class, 'update']); // Update an existing job
Route::delete('/jobs/{id}', [JobController::class, 'destroy']); // Delete a job
