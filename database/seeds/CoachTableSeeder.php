<?php

use Illuminate\Database\Seeder;

class CoachTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $coach = \App\Models\Coach\Coach::create([
            'first_name' => 'Christan Jake',
            'last_name' => 'Gatchalian',
            'address' => '#8 Roxas Street, Happy Glen Loop Subdivision, Brngy. 168, Deparo, Caloocan City',
            'contact_number' => '09667036547',
            'employment_type' => 'Employed'
        ]);

        $coach->activityCoaches()->attach(['activity_id' => 1]);

        $coach = \App\Models\Coach\Coach::create([
            'first_name' => 'Jonathan',
            'last_name' => 'Wick',
            'address' => 'Jardani Jovanovic',
            'contact_number' => '09667036547',
            'employment_type' => 'Employed'
        ]);

        $coach->activityCoaches()->attach(['activity_id' => 2]);

        $coach = \App\Models\Coach\Coach::create([
            'first_name' => 'Richard',
            'last_name' => 'Riddick',
            'address' => 'Furia',
            'contact_number' => '09667036547',
            'employment_type' => 'Employed'
        ]);

        $coach->activityCoaches()->attach(['activity_id' => 3]);
    }
}
