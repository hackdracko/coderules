@extends('layouts.app')

@section('content')
    @if (Session::has('message'))
        <div class="alert alert-{{ Session::get('message')[0] }} alert-dismissible" role="alert">
            <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            {{ Session::get('message')[1] }}
        </div>
    @endif
    <div class="container">
        <div class="row">
            <div class="col-md-10 col-md-offset-1">
                <div class="panel panel-default">
                    <div class="panel-heading">Administración de Banners</div>

                    <div class="panel-body">
                        <form action="{{ url('/admin/banner') }}" method="POST" enctype="multipart/form-data" class="form-horizontal">
                            {{ csrf_field() }}
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
                                <label for="descripcion" class="col-sm-3 control-label">Descripción del Banner</label>
                                <div class="col-sm-6">
                                    <input type="text" class="form-control" name="descripcion" id="descripcion" placeholder="Descripción del Rol"></input>
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="col-sm-offset-3 col-sm-6">
                                    <button type="submit" class="btn btn-success">
                                        <i class="fa fa-plus"></i> Agregar Banner
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="col-md-10 col-md-offset-1">

        <div class="panel-heading">
            Banners Actuales
        </div>

        <div class="panel-body">
            <table class="table table-striped table-hover roles-table">

                <!-- Table Headings -->
                <thead>
                <tr>
                    <th class="text-center">Imagen</th>
                    <th class="text-center">Descripción del Rol</th>
                    <th class="text-center">Fecha de Registro</th>
                    <th class="text-center">Fecha de Modificación</th>
                    <th class="text-center">Estatus</th>
                    <th class="text-center">Acciones</th>
                </tr>
                <tr>
                    <th class="text-center">&nbsp;</th>
                    <th class="text-center">&nbsp;</th>
                    <th class="text-center">&nbsp;</th>
                    <th class="text-center">&nbsp;</th>
                    <th class="text-center">&nbsp;</th>
                    <th class="text-center"><div class="col-md-6">Editar</div><div class="col-md-6">Eliminar</div></th>
                </tr>
                </thead>

                <!-- Table Body -->
                <tbody>
                @foreach ($banners as $banner)
                    <tr>
                        <!-- Task Name -->
                        <td class="table-text text-center">
                            <div><img width="200" height="100" src="{{URL::to('/banners/'.$banner->url)}}" class="img-rounded"></div>
                        </td>
                        <td class="table-text text-center">
                            <div>{{ $banner->descripcion }}</div>
                        </td>
                        <td class="table-text text-center">
                            <div>{{ $banner->created_at }}</div>
                        </td>
                        <td class="table-text text-center">
                            <div>{{ $banner->updated_at }}</div>
                        </td>
                        @if ($banner->estatus == 1)
                            <td class="table-text text-center">
                                <span class="label label-success">Activo</span>
                            </td>
                        @else
                            <td class="table-text text-center">
                                <span class="label label-danger">Inactivo</span>
                            </td>
                        @endif
                        <td>
                            <div class="col-md-6 text-center">
                                <a href="{{ url('/admin/banner/'.$banner->id.'/edit') }}">
                                    <span class="glyphicon glyphicon-pencil" aria-hidden="true" style="cursor:pointer;">
                                    </span>
                                </a>
                            </div>
                            <div class="col-md-6 text-center">
                                <a href="{{ url('/admin/banner/logicaldelete/'.$banner->id) }}">
                                    <span class="glyphicon glyphicon-trash" aria-hidden="true">

                                    </span>
                                </a>
                            </div>
                        </td>
                    </tr>

                @endforeach
                </tbody>
            </table>
        </div>

    </div>
@endsection