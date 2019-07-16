<?php

Breadcrumbs::for('admin.coach.index', function ($trail) {
    $trail->push(__('labels.backend.coaches.management'), route('admin.coach.index'));
});

Breadcrumbs::for('admin.coach.deleted', function ($trail) {
    $trail->parent('admin.coach.index');
    $trail->push(__('menus.backend.coaches.deleted'), route('admin.coach.deleted'));
});

Breadcrumbs::for('admin.coach.create', function ($trail) {
    $trail->parent('admin.coach.index');
    $trail->push(__('labels.backend.coaches.create'), route('admin.coach.create'));
});

Breadcrumbs::for('admin.coach.show', function ($trail, $id) {
    $trail->parent('admin.coach.index');
    $trail->push(__('menus.backend.coaches.view', ['coach' => $id->name]), route('admin.coach.show', $id));
});

Breadcrumbs::for('admin.coach.edit', function ($trail, $id) {
    $trail->parent('admin.coach.index');
    $trail->push(__('menus.backend.coaches.edit'), route('admin.coach.edit', $id));
});
