<?php

namespace App\Models;

//use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Job extends Model
{
  //  use HasFactory;

    // Define the table associated with the model
    //protected $table = 'jobs'; // Optional, but good to be explicit

    // Define the fillable attributes to allow mass-assignment
    protected $fillable = [
        'job_title', 
        'company', 
        'application_date', 
        'status'
    ];

    // If needed, you can define the date format
    protected $casts = [
        'application_date' => 'date', // Ensure the application date is properly cast
    ];
}
