<?php

Breadcrumbs::for('admin.activity.index', function ($trail) {
    $trail->parent('admin.dashboard');
    $trail->push(__('labels.backend.activities.management'), route('admin.activity.index'));
});

Breadcrumbs::for('admin.activity.deleted', function ($trail) {
    $trail->parent('admin.activity.index');
    $trail->push(__('menus.backend.activities.deleted'), route('admin.activity.deleted'));
});

Breadcrumbs::for('admin.activity.create', function ($trail) {
    $trail->parent('admin.activity.index');
    $trail->push(__('labels.backend.activities.create'), route('admin.activity.create'));
});

Breadcrumbs::for('admin.activity.show', function ($trail, $id) {
    $trail->parent('admin.activity.index');
    $trail->push(__('menus.backend.activities.view', ['activity' => $id->name]), route('admin.activity.show', $id));
});

Breadcrumbs::for('admin.activity.edit', function ($trail, $id) {
    $trail->parent('admin.activity.index');
    $trail->push(__('menus.backend.activities.edit'), route('admin.activity.edit', $id));
});
