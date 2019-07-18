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
        \App\Models\Activity\Activity::create([
            'name'              => 'Muay Thai',
            'member_rate'       => 200.00,
            'non_member_rate'   => 250.00,
            'coach_fee'         => 1000.00,
            'monthly_rate'      => 1000.00,
            'membership_fee'    => 500.00,
            'sessions'          => '12',
            'quota'             => '2'
        ]);

        \App\Models\Activity\Activity::create([
            'name'              => 'Boxing',
            'member_rate'       => 200.00,
            'non_member_rate'   => 250.00,
            'coach_fee'         => 1000.00,
            'monthly_rate'      => 1000.00,
            'membership_fee'    => 500.00,
            'sessions'          => '12',
            'quota'             => '2'
        ]);

        \App\Models\Activity\Activity::create([
            'name'              => 'Mixed Martial Art',
            'member_rate'       => 200.00,
            'non_member_rate'   => 250.00,
            'coach_fee'         => 1000.00,
            'monthly_rate'      => 1000.00,
            'membership_fee'    => 500.00,
            'sessions'          => '12',
            'quota'             => '2'
        ]);

        \App\Models\Activity\Activity::create([
            'name'              => 'Taekwondo',
            'member_rate'       => 200.00,
            'non_member_rate'   => 250.00,
            'coach_fee'         => 1000.00,
            'monthly_rate'      => 1000.00,
            'membership_fee'    => 500.00,
            'sessions'          => '12',
            'quota'             => '2'
        ]);

        \App\Models\Activity\Activity::create([
            'name'              => 'Jiu Jitsu',
            'member_rate'       => 200.00,
            'non_member_rate'   => 250.00,
            'coach_fee'         => 1000.00,
            'monthly_rate'      => 1000.00,
            'membership_fee'    => 500.00,
            'sessions'          => '12',
            'quota'             => '2'
        ]);

        \App\Models\Activity\Activity::create([
            'name'              => 'Gym',
            'member_rate'       => 200.00,
            'non_member_rate'   => 250.00,
            'coach_fee'         => 0.00,
            'monthly_rate'      => 1000.00,
            'membership_fee'    => 500.00,
            'sessions'          => '12',
            'quota'             => '2'
        ]);
    }
}
