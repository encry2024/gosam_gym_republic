<?php

Breadcrumbs::for('admin.reports', function ($trail) {
    $trail->push("Reports Management", route('admin.reports'));
});
