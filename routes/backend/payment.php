<?php
use App\Http\Controllers\Backend\Payment\PaymentStatusController;
use App\Http\Controllers\Backend\Payment\PaymentController;

// All route names are prefixed with 'admin.payment'.
Route::group([
    'namespace' => 'Payment',
    'middleware' => 'role:'.config('access.users.admin_role'),
], function () {

    Route::get('payment/deleted', [PaymentStatusController::class, 'getDeleted'])->name('payment.deleted');

    Route::resource('payment', 'PaymentController');

    Route::group([
        'prefix' => 'payment/{payment}'
    ], function () {
        // Deleted
        Route::get('delete', [PaymentStatusController::class, 'delete'])->name('payment.delete-permanently');
        Route::get('restore', [PaymentStatusController::class, 'restore'])->name('payment.restore');
    });

});
