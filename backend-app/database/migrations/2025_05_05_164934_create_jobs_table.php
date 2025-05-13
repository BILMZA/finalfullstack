<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateJobsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('jobs', function (Blueprint $table) {
            $table->id();  // Auto-incrementing primary key
            $table->string('job_title');  // Job Title
            $table->string('company');    // Company Name
            $table->date('application_date');  // Application Date
            $table->enum('status', ['Applied', 'Interviewed', 'Rejected', 'Offered']);  // Status with enum options
            $table->timestamps();  // Created at and updated at timestamps
        });
    }

}
