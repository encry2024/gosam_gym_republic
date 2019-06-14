<?php

return [
    // ...

    'unavailable_audits' => 'No User Audits available',

    'created' => [
        'modified' => [
            'first_name'    => 'The first name has been created <strong>:new</strong>',
            'last_name'     => 'The last name has been created <strong>:new</strong>',
            'address'     => 'The address has been created <strong>:new</strong>',
            'contact_number'     => 'The contact number has been created <strong>:new</strong>',
        ]
    ],

    'restored' => [
        'modified' => [
            'first_name'    => 'The first name has been created <strong>:new</strong>',
            'last_name'     => 'The last name has been created <strong>:new</strong>',
            'address'     => 'The address has been created <strong>:new</strong>',
            'contact_number'     => 'The contact number has been created <strong>:new</strong>',
        ]
    ],

    'deleted' => [
        'modified' => [
            'first_name'    => 'The first name has been created <strong>:old</strong>',
            'last_name'     => 'The last name has been created <strong>:old</strong>',
            'address'     => 'The address has been created <strong>:old</strong>',
            'contact_number'     => 'The contact number has been created <strong>:old</strong>',
        ]
    ],

    'updated'            => [
        'metadata' => 'On :audit_created_at, <strong>:user_first_name :user_last_name</strong> [:audit_ip_address] updated this record via :audit_url',
        'modified' => [
            'first_name'   => 'The first name has been modified from <strong>:old</strong> to <strong>:new</strong>',
            'last_name' => 'The last name has been modified from <strong>:old</strong> to <strong>:new</strong>',
            'last_login_at' => 'Last login at <strong>:new</strong>',
            'timezone' => 'Timezone: <strong>:new</strong>',
            'last_login_ip' => 'Last logged in IP: <strong>:new</strong>',
        ],
    ],
    // ...
];