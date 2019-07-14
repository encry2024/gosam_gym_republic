<?php

use App\Http\Controllers\Frontend\Log\LogController;

Route::group([
    'namespace' => 'Log',
], function () {

    Route::resource('logs', 'LogController');

});
