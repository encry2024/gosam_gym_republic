<?php

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;

/**
 * Class PermissionRoleTableSeeder.
 */
class PermissionRoleTableSeeder extends Seeder
{
    use DisableForeignKeys;

    /**
     * Run the database seed.
     */
    public function run()
    {
        $this->disableForeignKeys();

        // Create Roles
        $admin = Role::create(['name' => config('access.users.admin_role')]);
        $executive = Role::create(['name' => 'executive']);
        $user = Role::create(['name' => config('access.users.default_role')]);

        // Create Permissions
        $permissions = [
            'view backend',

            'view coach',
            'store coach',
            'edit coach',
            'delete coach',
            'restore coach',
            'delete permanently coach',

            'view activity',
            'store activity',
            'edit activity',
            'delete activity',
            'restore activity',
            'delete permanently activity',

            'view customer',
            'store customer',
            'edit customer',
            'delete customer',
            'restore customer',
            'permanently delete customer',
        ];

        foreach ($permissions as $permission) {
            Permission::create(['name' => $permission]);
        }

        // ALWAYS GIVE ADMIN ROLE ALL PERMISSIONS
        $admin->givePermissionTo(Permission::all());

        // Assign Permissions to other Roles
        $executive->givePermissionTo('view backend');

        $this->enableForeignKeys();
    }
}
