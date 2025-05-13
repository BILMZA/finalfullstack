<?php

namespace App\Providers;

use Illuminate\Support\Facades\Route;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        // You can add service registrations here if needed
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        // Manually load the api.php routes file
        Route::prefix('api')
            ->middleware('api')
            // Removed the namespace as it is not defined
            ->group(base_path('routes/api.php'));
    }
}
