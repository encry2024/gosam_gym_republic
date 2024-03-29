<?php

return [
    /*
    |--------------------------------------------------------------------------
    | Alert Language Lines
    |--------------------------------------------------------------------------
    |
    | The following language lines contain alert messages for various scenarios
    | during CRUD operations. You are free to modify these language lines
    | according to your application's requirements.
    |
    */

    'backend' => [
        'memberships' => [
            'created' => 'Membership ":membership" was successfully created.',
            'deleted' => 'Membership ":membership" was successfully deleted.',
            'updated' => 'Membership ":membership" was successfully updated.',
            'restored' => 'Membership ":membership" was successfully restored.',
            'deleted_permanently' => 'Membership ":membership" was successfully deleted permanently.'
        ],

        'customers' => [
            'created' => 'Customer ":customer" was successfully created.',
            'deleted' => 'Customer ":customer" was successfully deleted.',
            'updated' => 'Customer ":customer" was successfully updated.',
            'restored' => 'Customer ":customer" was successfully restored.',
            'deleted_permanently' => 'Customer ":customer" was successfully deleted permanently.'
        ],

        'activities' => [
            'created' => 'Activity ":activity" was successfully created.',
            'deleted' => 'Activity ":activity" was successfully deleted.',
            'updated' => 'Activity ":activity" was successfully updated.',
            'restored' => 'Activity ":activity" was successfully restored.',
        ],

        'coaches' => [
            'created' => 'Coach ":coach" was successfully created.',
            'deleted' => 'Coach ":coach" was successfully deleted.',
            'updated' => 'Coach ":coach" was successfully updated.',
            'restored' => 'Coach ":coach" was successfully restored.',
            'assigned_activities' => 'Activities ":activities" was successfully assigned to this coach.',
            'removed_activities' => 'All activities was successfully removed to this coach.'
        ],

        'roles' => [
            'created' => 'The role was successfully created.',
            'deleted' => 'The role was successfully deleted.',
            'updated' => 'The role was successfully updated.',
        ],

        'users' => [
            'cant_resend_confirmation' => 'The application is currently set to manually approve users.',
            'confirmation_email' => 'A new confirmation e-mail has been sent to the address on file.',
            'confirmed' => 'The user was successfully confirmed.',
            'created' => 'The user was successfully created.',
            'deleted' => 'The user was successfully deleted.',
            'deleted_permanently' => 'The user was deleted permanently.',
            'restored' => 'The user was successfully restored.',
            'session_cleared' => "The user's session was successfully cleared.",
            'social_deleted' => 'Social Account Successfully Removed',
            'unconfirmed' => 'The user was successfully un-confirmed',
            'updated' => 'The user was successfully updated.',
            'updated_password' => "The user's password was successfully updated.",
        ],
    ],

    'frontend' => [
        'contact' => [
            'sent' => 'Your information was successfully sent. We will respond back to the e-mail provided as soon as we can.',
        ],
    ],
];
