<?php
use App\Http\Controllers\Backend\Membership\MembershipStatusController;
use App\Http\Controllers\Backend\Membership\MembershipController;

// All route names are prefixed with 'admin.membership'.
Route::group([
    'namespace' => 'Membership',
    'middleware' => 'role:'.config('access.users.admin_role'),
], function () {

    Route::get('membership/deleted', [MembershipStatusController::class, 'getDeleted'])->name('membership.deleted');
    Route::post('check_existing_membership', [MembershipController::class, 'checkExistingMembership'])->name('membership.checkExistingMembership');

    Route::resource('membership', 'MembershipController');

    Route::group([
        'prefix' => 'membership/{membership}'
    ], function () {
        // Deleted
        Route::get('delete', [MembershipStatusController::class, 'delete'])->name('membership.delete-permanently');
        Route::get('restore', [MembershipStatusController::class, 'restore'])->name('membership.restore');
    });

});
