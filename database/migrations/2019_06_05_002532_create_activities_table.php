<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateActivitiesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('activities', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('name')->unique();
            $table->float('member_rate', 8, 2)->nullable();
            $table->float('non_member_rate', 8, 2)->nullable();
            $table->float('coach_fee', 8, 2)->nullable();
            $table->float('monthly_rate', 8, 2)->nullable();
            $table->float('membership_fee', 8, 2)->nullable();
            $table->integer('sessions')->nullable();
            $table->integer('quota')->nullable();
            $table->timestamps();
            $table->softDeletes();

            $table->index(['name']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('activities');
    }
}
