<?php

use App\Http\Controllers\Backend\Membership\MembershipStatusController;
use App\Http\Controllers\Backend\Membership\MembershipController;

// All route names are prefixed with 'admin.membership'.
Route::group([
    'namespace' => 'Membership',
    'middleware' => 'role:'.config('access.users.admin_role'),
], function () {

    Route::get('membership/deleted', [MembershipStatusController::class, 'getDeleted'])->name('membership.deleted');

    Route::resource('membership', 'MembershipController');

    Route::group([
        'prefix' => 'membership/{membership}'
    ], function () {
        // Deleted
        Route::get('delete', [MembershipStatusController::class, 'delete'])->name('membership.delete-permanently');
        Route::get('restore', [MembershipStatusController::class, 'restore'])->name('membership.restore');

        // Membership Renewal
        Route::patch('renew', [MembershipStatusController::class, 'renew'])->name('membership.renew');
        Route::patch('cancel', [MembershipStatusController::class, 'cancel'])->name('membership.cancel');
    });

});
