<?php

use App\Http\Controllers\Backend\Log\LogController;

Route::group([
    'namespace' => 'Log',
], function () {

    Route::resource('logs', 'LogController');

    Route::get('logs/customer/{customer}', [LogController::class, 'showCustomerLog'])->name('logs.customer.show');

});
