<?php
use App\Http\Controllers\Backend\Coach\CoachStatusController;
use App\Http\Controllers\Backend\Coach\CoachController;

// All route names are prefixed with 'admin.coach'.
Route::group([
    'namespace' => 'Coach',
    'middleware' => 'role:'.config('access.users.admin_role'),
], function () {

    Route::get('coach/deleted', [CoachStatusController::class, 'getDeleted'])->name('coach.deleted');

    Route::resource('coach', 'CoachController');

    Route::group([
        'prefix' => 'coach/{coach}'
    ], function () {
        // Deleted
        Route::get('delete', [CoachStatusController::class, 'delete'])->name('coach.delete-permanently');
        Route::get('restore', [CoachStatusController::class, 'restore'])->name('coach.restore');
        Route::post('assign_activities', [CoachController::class, 'assignActivities'])->name('coach.assignActivities');
    });

});
