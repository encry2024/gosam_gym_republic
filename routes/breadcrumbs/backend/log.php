<?php

Breadcrumbs::for('admin.logs.index', function ($trail) {
    $trail->push(__('strings.backend.logs.title'), route('admin.logs.index'));
});