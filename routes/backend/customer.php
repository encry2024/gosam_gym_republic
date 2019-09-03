<?php
use App\Http\Controllers\Backend\Customer\CustomerStatusController;
use App\Http\Controllers\Backend\Customer\CustomerController;
use App\Http\Controllers\Backend\CustomerActivity\CustomerActivityController;

// All route names are prefixed with 'admin.customer'.
Route::group([
    'namespace' => 'Customer',
    'middleware' => 'role:'.config('access.users.admin_role'),
], function () {

    Route::get('customer/deleted', [CustomerStatusController::class, 'getDeleted'])->name('customer.deleted');

    Route::resource('customer', 'CustomerController');

    Route::get('customers/search/{customerName?}', [CustomerController::class, 'search'])->name('customer.search');

    Route::group([
        'prefix' => 'customer/{customer}'
    ], function () {
        // Deleted
        Route::get('delete', [CustomerStatusController::class, 'delete'])->name('customer.delete-permanently');
        Route::get('restore', [CustomerStatusController::class, 'restore'])->name('customer.restore');

        // Get Customer Activity
        Route::get('activity/{activity}', [CustomerActivityController::class, 'show'])->name('customer.activity.show');
    });

});
