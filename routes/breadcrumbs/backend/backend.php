<?php

Breadcrumbs::for('admin.dashboard', function ($trail) {
    $trail->push(__('strings.backend.dashboard.title'), route('admin.dashboard'));
});

require __DIR__.'/auth.php';
require __DIR__.'/log-viewer.php';
require __DIR__.'/coach.php';
require __DIR__.'/activity.php';
require __DIR__.'/customer.php';
require __DIR__.'/membership.php';
require __DIR__.'/payment.php';
require __DIR__.'/log.php';