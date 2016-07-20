<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Banner extends Model
{
    protected $table = "pagina_banners";
    protected $primaryKey = "id";
    protected $fillable = ['url', 'url_thumbnail', 'descripcion', 'estatus'];
}
