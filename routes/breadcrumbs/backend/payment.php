<?php

Breadcrumbs::for('admin.payment.index', function ($trail) {
    $trail->push(__('labels.backend.payments.management'), route('admin.payment.index'));
});

Breadcrumbs::for('admin.payment.deleted', function ($trail) {
    $trail->parent('admin.payment.index');
    $trail->push(__('menus.backend.payments.deleted'), route('admin.payment.deleted'));
});

Breadcrumbs::for('admin.payment.show', function ($trail, $id) {
    $trail->parent('admin.payment.index');
    $trail->push(__('menus.backend.payments.view', ['amount' => $id->amount]), route('admin.payment.show', $id));
});

Breadcrumbs::for('admin.payment.edit', function ($trail, $id) {
    $trail->parent('admin.payment.index');
    $trail->push(__('menus.backend.payments.edit'), route('admin.payment.edit', $id));
});
