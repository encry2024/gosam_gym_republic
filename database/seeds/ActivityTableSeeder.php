<?php

use Illuminate\Database\Seeder;

class ActivityTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Add the master administrator, user id of 1
        \App\Models\Activity\Activity::create([
            'name'              => 'Muay Thai',
            'member_rate'       => '200',
            'non_member_rate'   => '250',
            'coach_fee'         => '1000',
            'monthly_rate'      => '1000',
            'membership_fee'    => '500',
            'sessions'          => '12',
            'quota'             => '12'
        ]);

        \App\Models\Activity\Activity::create([
            'name'              => 'Boxing',
            'member_rate'       => '200',
            'non_member_rate'   => '250',
            'coach_fee'         => '1000',
            'monthly_rate'      => '1000',
            'membership_fee'    => '500',
            'sessions'          => '12',
            'quota'             => '12'
        ]);

        \App\Models\Activity\Activity::create([
            'name'              => 'Mixed Martial Art',
            'member_rate'       => '200',
            'non_member_rate'   => '250',
            'coach_fee'         => '1000',
            'monthly_rate'      => '1000',
            'membership_fee'    => '500',
            'sessions'          => '12',
            'quota'             => '12'
        ]);

        \App\Models\Activity\Activity::create([
            'name'              => 'Taekwondo',
            'member_rate'       => '200',
            'non_member_rate'   => '250',
            'coach_fee'         => '1000',
            'monthly_rate'      => '1000',
            'membership_fee'    => '500',
            'sessions'          => '12',
            'quota'             => '12'
        ]);

        \App\Models\Activity\Activity::create([
            'name'              => 'Jiu Jitsu',
            'member_rate'       => '200',
            'non_member_rate'   => '250',
            'coach_fee'         => '1000',
            'monthly_rate'      => '1000',
            'membership_fee'    => '500',
            'sessions'          => '12',
            'quota'             => '12'
        ]);
    }
}
