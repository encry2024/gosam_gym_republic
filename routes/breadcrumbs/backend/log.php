<?php

Breadcrumbs::for('admin.logs.index', function ($trail) {
    $trail->push(__('strings.backend.logs.title'), route('admin.logs.index'));
});

Breadcrumbs::for('admin.logs.show', function ($trail, $id) {
    $trail->parent('admin.logs.index');
    $trail->push(__('menus.backend.logs.view', ['customer' => $id->name]), route('admin.logs.show', $id));
});

Breadcrumbs::for('admin.logs.customer.show', function ($trail, $id) {
    $trail->parent('admin.logs.index');
    $trail->push(__('menus.backend.logs.view', ['customer' => $id->name]), route('admin.logs.customer.show', $id));
});