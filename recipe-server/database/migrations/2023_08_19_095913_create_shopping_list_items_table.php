<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('shopping_list_items', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('shopping_list_id');
            $table->unsignedBigInteger('ingredient_id');
            $table->decimal('quantity', 8, 2);
            $table->timestamps();

            $table->foreign('shopping_list_id')->references('id')->on('shopping_lists')->onDelete('cascade');
            $table->foreign('ingredient_id')->references('id')->on('ingredients')->onDelete('cascade');
        });
    }
    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('shopping_list_items');
    }
};
