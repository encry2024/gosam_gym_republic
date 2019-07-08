<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateMembershipsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('memberships', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('customer_id')->unsigned();
            $table->integer('activity_id')->unsigned();
            $table->float('monthly_fee', 12, 2);
            $table->integer('coach_id')->unsigned();
            $table->float('coach_fee', 12, 2);
            $table->date('activity_date_subscription');
            $table->date('activity_date_expiry');
            $table->float('fee', 12, 2);
            $table->date('date_registered');
            $table->date('date_expiry');
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('memberships');
    }
}
