<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePaginaBannersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('pagina_banners', function (Blueprint $table) {
            $table->increments('id');
            $table->string('url');
            $table->string('url_thumbnail');
            $table->string('descripcion');
            $table->boolean("estatus");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('pagina_banners');
    }
}
