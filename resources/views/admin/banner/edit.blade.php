@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row">
            <div class="col-md-10 col-md-offset-1">
                <div class="panel panel-default">
                    <div class="panel-heading">Edición de Banner</div>
                    <div class="panel-body">
                        <form action="{{ url('/admin/banner/'.$banner->id) }}" method="POST" enctype="multipart/form-data" class="form-horizontal">
                            {{ csrf_field() }}
                            <input type="hidden" name="_method" value="PUT">
                            @if ($errors->has('descripcion'))
                                <div class="alert-danger">
                                    <span class="help-block">
                                        <strong>{{ $errors->first('descripcion') }}</strong>
                                    </span>
                                </div>
                            @endif
                            <div class="form-group">
                                <label for="imagen" class="col-sm-3 control-label">Elige una imágen</label>
                                <div class="col-sm-6">
                                    <input type="file" class="form-control" name="imagen" id="imagen">
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="descripcion" class="col-sm-3 control-label">Edita Descripción</label>
                                <div class="col-sm-6">
                                    <input type="text" class="form-control" name="descripcion" id="descripcion" placeholder="Descripción del Rol" value="{{ $banner->descripcion }}"></input>
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="estatus" class="col-sm-3 control-label">Estatus</label>
                                <div class="col-sm-6">
                                    <select class="form-control" name="estatus" id="estatus">
                                        <option value="1" {{ $banner->estatus == 1 ? 'selected' : '' }}>Activo</option>
                                        <option value="0" {{ $banner->estatus == 0 ? 'selected' : '' }}>Inactivo</option>
                                    </select>
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-sm-3 control-label">Imagen Actual</label>
                                <div class="col-sm-6">
                                    <img width="200" height="100" src="{{URL::to('/banners/'.$banner->url)}}" class="img-rounded">
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="col-sm-offset-3 col-sm-6">
                                    <button type="submit" class="btn btn-success">
                                        <i class="fa fa-pencil"></i> Editar Banner
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection