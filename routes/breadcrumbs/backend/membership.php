<?php

Breadcrumbs::for('admin.membership.index', function ($trail) {
    $trail->parent('admin.dashboard');
    $trail->push(__('labels.backend.memberships.management'), route('admin.membership.index'));
});

Breadcrumbs::for('admin.membership.deleted', function ($trail) {
    $trail->parent('admin.membership.index');
    $trail->push(__('menus.backend.memberships.deleted'), route('admin.membership.deleted'));
});

Breadcrumbs::for('admin.membership.create', function ($trail) {
    $trail->parent('admin.membership.index');
    $trail->push(__('labels.backend.memberships.create'), route('admin.membership.create'));
});

Breadcrumbs::for('admin.membership.show', function ($trail, $id) {
    $trail->parent('admin.membership.index');
    $trail->push(__('menus.backend.memberships.view', ['membership' => $id->id]), route('admin.membership.show', $id));
});

Breadcrumbs::for('admin.membership.edit', function ($trail, $id) {
    $trail->parent('admin.membership.index');
    $trail->push(__('menus.backend.memberships.edit'), route('admin.membership.edit', $id));
});
