<?php

return [
    /*
    |--------------------------------------------------------------------------
    | Labels Language Lines
    |--------------------------------------------------------------------------
    |
    | The following language lines are used in labels throughout the system.
    | Regardless where it is placed, a label can be listed here so it is easily
    | found in a intuitive way.
    |
    */

    'general' => [
        'all' => 'All',
        'yes' => 'Yes',
        'no' => 'No',
        'copyright' => 'Copyright',
        'custom' => 'Custom',
        'actions' => 'Actions',
        'active' => 'Active',
        'buttons' => [
            'save' => 'Save',
            'update' => 'Update',
        ],
        'hide' => 'Hide',
        'inactive' => 'Inactive',
        'none' => 'None',
        'show' => 'Show',
        'toggle_navigation' => 'Toggle Navigation',
        'create_new' => 'Create New',
        'toolbar_btn_groups' => 'Toolbar with button groups',
        'more' => 'More',
    ],

    'backend' => [
        'payments' => [
            'management' => 'Payment Management',
            'list' => 'Payment List',
            'deleted' => 'Deleted Memberships',

            'table' => [
                'amount' => 'Amount Paid',
                'created_at' => 'Date Created',
                'updated_at' => 'Last Updated',
                'deleted_at' => 'Date Deleted',
                'total' => 'payment total|payments total'
            ],

            'tabs' => [
                'titles' => [
                    'overview' => 'Overview',
                    'history' => 'History',
                ],

                'content' => [
                    'overview' => [
                        'amount' => 'Amount Paid',
                        'created_at' => 'Date Created',
                        'updated_at' => 'Last Updated',
                        'deleted_at' => 'Date Deleted',
                    ],
                ],
            ],

            'view' => 'View Payment',
        ],

        'memberships' => [
            'management' => 'Membership Management',
            'list' => 'Membership List',
            'create' => 'Create Membership',
            'deleted' => 'Deleted Memberships',

            'table' => [
                'customer_name' => 'Customer Name',
                'activity_name' => 'Last Name',
                'coach_name' => 'Coach Name',
                'activity_date_registered' => 'Date Activity Registered',
                'activity_date_expiry' => 'Activity Membership Expiry',
                'fee' => 'Monthly Membership Fee',
                'date_registered' => 'Membership Date Registered',
                'date_expiry' => 'Membership Expiration Date',
                'created_at' => 'Date Created',
                'updated_at' => 'Last Updated',
                'deleted_at' => 'Date Deleted',
                'total' => 'membership total|memberships total'
            ],

            'tabs' => [
                'titles' => [
                    'overview' => 'Overview',
                    'history' => 'History',
                ],

                'content' => [
                    'overview' => [
                        'customer_name' => 'Customer Name',
                        'activity_name' => 'Last Name',
                        'coach_name' => 'Coach Name',
                        'activity_date_registered' => 'Date Activity Registered',
                        'activity_date_expiry' => 'Activity Membership Expiry',
                        'fee' => 'Monthly Membership Fee',
                        'date_registered' => 'Membership Date Registered',
                        'date_expiry' => 'Membership Expiration Date',
                        'created_at' => 'Date Created',
                        'updated_at' => 'Last Updated',
                        'deleted_at' => 'Date Deleted',
                    ],
                ],
            ],

            'view' => 'View :membership',
        ],

        'customers' => [
            'management' => 'Customer Management',
            'list' => 'Customer List',
            'create' => 'Create Customer',
            'deleted' => 'Deleted Customers',

            'table' => [
                'first_name' => 'First Name',
                'last_name' => 'Last Name',
                'email' => 'E-mail',
                'address' => 'Address',
                'contact_number' => 'Contact Number',
                'emergency_number' => 'Emergency Contact Number',
                'date_of_birth' => 'Date of Birth',
                'age' => 'Age',
                'created_at' => 'Date Created',
                'updated_at' => 'Last Updated',
                'deleted_at' => 'Date Deleted',
                'total' => 'customer total|customers total'
            ],

            'tabs' => [
                'titles' => [
                    'overview' => 'Overview',
                    'history' => 'History',
                ],

                'content' => [
                    'overview' => [
                        'first_name' => 'First Name',
                        'last_name' => 'Last Name',
                        'email' => 'E-mail',
                        'address' => 'Address',
                        'contact_number' => 'Contact Number',
                        'emergency_number' => 'Emergency Contact Number',
                        'date_of_birth' => 'Date of Birth',
                        'age' => 'Age',
                        'created_at' => 'Date Created',
                        'updated_at' => 'Last Updated',
                        'deleted_at' => 'Date Deleted',
                    ],
                ],
            ],

            'view' => 'View :customer',
        ],

        'activities' => [
            'management' => 'Activity Management',
            'list' => 'Activity List',
            'create' => 'Create Activity',
            'deleted' => 'Deleted Activityes',

            'table' => [
                'name' => 'Name',
                'member_rate' => 'Member Rate',
                'non_member_rate' => 'Non-Member Rate',
                'coach_fee' => 'Coach Fee',
                'monthly_rate' => 'Monthly Rate',
                'membership_fee' => 'Membership Fee',
                'session' => 'Session',
                'quota' => 'Quota',
                'created_at' => 'Date Created',
                'updated_at' => 'Last Updated',
                'deleted_at' => 'Date Deleted',
                'total' => 'activity total|activities total'
            ],

            'tabs' => [
                'titles' => [
                    'overview' => 'Overview',
                    'history' => 'History',
                ],

                'content' => [
                    'overview' => [
                        'name' => 'Name',
                        'member_rate' => 'Member Rate',
                        'non_member_rate' => 'Non-Member Rate',
                        'coach_fee' => 'Coach Fee',
                        'monthly_rate' => 'Monthly Rate',
                        'membership_fee' => 'Membership Fee',
                        'sessions' => 'Sessions',
                        'quota' => 'Quota',
                        'created_at' => 'Date Created',
                        'updated_at' => 'Last Updated',
                        'deleted_at' => 'Date Deleted',
                    ],
                ],
            ],

            'view' => 'View :activity',
        ],

        'coaches' => [
            'management' => 'Coach Management',
            'list' => 'Coach List',
            'create' => 'Create Coach',
            'deleted' => 'Deleted Coaches',

            'table' => [
                'avatar' => 'Avatar',
                'first_name' => 'First Name',
                'last_name' => 'Last Name',
                'contact_number' => 'Contact Number',
                'address' => 'Address',
                'created_at' => 'Date Created',
                'updated_at' => 'Last Updated',
                'deleted_at' => 'Date Deleted',
                'total' => 'coach total|coaches total'
            ],

            'tabs' => [
                'titles' => [
                    'overview' => 'Overview',
                    'history' => 'History',
                ],

                'content' => [
                    'overview' => [
                        'avatar' => 'Avatar',
                        'first_name' => 'First Name',
                        'last_name' => 'Last Name',
                        'contact_number' => 'Contact Number',
                        'address' => 'Address',
                        'created_at' => 'Date Created',
                        'updated_at' => 'Last Updated',
                        'deleted_at' => 'Date Deleted'
                    ],
                ],
            ],

            'view' => 'View :coach',
        ],

        'access' => [
            'roles' => [
                'create' => 'Create Role',
                'edit' => 'Edit Role',
                'management' => 'Role Management',

                'table' => [
                    'number_of_users' => 'Number of Users',
                    'permissions' => 'Permissions',
                    'role' => 'Role',
                    'sort' => 'Sort',
                    'total' => 'role total|roles total',
                ],
            ],

            'users' => [
                'active' => 'Active Users',
                'all_permissions' => 'All Permissions',
                'change_password' => 'Change Password',
                'change_password_for' => 'Change Password for :user',
                'create' => 'Create User',
                'deactivated' => 'Deactivated Users',
                'deleted' => 'Deleted Users',
                'edit' => 'Edit User',
                'management' => 'User Management',
                'no_permissions' => 'No Permissions',
                'no_roles' => 'No Roles to set.',
                'permissions' => 'Permissions',
                'user_actions' => 'User Actions',

                'table' => [
                    'confirmed' => 'Confirmed',
                    'created' => 'Created',
                    'email' => 'E-mail',
                    'id' => 'ID',
                    'last_updated' => 'Last Updated',
                    'name' => 'Name',
                    'first_name' => 'First Name',
                    'last_name' => 'Last Name',
                    'no_deactivated' => 'No Deactivated Users',
                    'no_deleted' => 'No Deleted Users',
                    'other_permissions' => 'Other Permissions',
                    'permissions' => 'Permissions',
                    'abilities' => 'Abilities',
                    'roles' => 'Roles',
                    'social' => 'Social',
                    'total' => 'user total|users total',
                ],

                'tabs' => [
                    'titles' => [
                        'overview' => 'Overview',
                        'history' => 'History',
                    ],

                    'content' => [
                        'overview' => [
                            'avatar' => 'Avatar',
                            'confirmed' => 'Confirmed',
                            'created_at' => 'Created At',
                            'deleted_at' => 'Deleted At',
                            'email' => 'E-mail',
                            'last_login_at' => 'Last Login At',
                            'last_login_ip' => 'Last Login IP',
                            'last_updated' => 'Last Updated',
                            'name' => 'Name',
                            'first_name' => 'First Name',
                            'last_name' => 'Last Name',
                            'status' => 'Status',
                            'timezone' => 'Timezone',
                        ],
                    ],
                ],

                'view' => 'View User',
            ],
        ],
    ],

    'frontend' => [
        'auth' => [
            'login_box_title' => 'Login',
            'login_button' => 'Login',
            'login_with' => 'Login with :social_media',
            'register_box_title' => 'Register',
            'register_button' => 'Register',
            'remember_me' => 'Remember Me',
        ],

        'contact' => [
            'box_title' => 'Contact Us',
            'button' => 'Send Information',
        ],

        'passwords' => [
            'expired_password_box_title' => 'Your password has expired.',
            'forgot_password' => 'Forgot Your Password?',
            'reset_password_box_title' => 'Reset Password',
            'reset_password_button' => 'Reset Password',
            'update_password_button' => 'Update Password',
            'send_password_reset_link_button' => 'Send Password Reset Link',
        ],

        'user' => [
            'passwords' => [
                'change' => 'Change Password',
            ],

            'profile' => [
                'avatar' => 'Avatar',
                'created_at' => 'Created At',
                'edit_information' => 'Edit Information',
                'email' => 'E-mail',
                'last_updated' => 'Last Updated',
                'name' => 'Name',
                'first_name' => 'First Name',
                'last_name' => 'Last Name',
                'update_information' => 'Update Information',
            ],
        ],
    ],
];
