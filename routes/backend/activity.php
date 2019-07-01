<?php
use App\Http\Controllers\Backend\Activity\ActivityStatusController;
use App\Http\Controllers\Backend\Activity\ActivityController;

// All route names are prefixed with 'admin.activity'.
Route::group([
    'namespace' => 'Activity',
    'middleware' => 'role:'.config('access.users.admin_role'),
], function () {

    Route::get('activity/deleted', [ActivityStatusController::class, 'getDeleted'])->name('activity.deleted');
    Route::post('check_existing_activity', [ActivityController::class, 'checkExistingActivity'])
        ->name('activity.checkExistingActivity');

    Route::resource('activity', 'ActivityController');

    Route::group([
        'prefix' => 'activity/{activity}'
    ], function () {
        // Deleted
        Route::get('delete', [ActivityStatusController::class, 'delete'])->name('activity.delete-permanently');
        Route::get('restore', [ActivityStatusController::class, 'restore'])->name('activity.restore');

        // Get Related Coaches
        Route::get('get/related_coaches', [ActivityController::class, 'getRelatedCoaches'])
            ->name('activity.getRelatedCoaches');
    });

});
