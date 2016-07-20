<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Input;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Session;
use Intervention\Image\ImageManager;
use Illuminate\Support\Facades\File;

use App\Http\Requests;

use App\Banner;

class BannerController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $banners = Banner::all();
        return view('admin.banner.index')->withBanners($banners);
    }

    public function indexPagina()
    {
        $banners = Banner::where('estatus', 1)->get();
        return view('pagina.inicio')->withBanners($banners);
    }
    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $image = Input::file('imagen');
        $descripcion = Input::get('descripcion');
        $filename  = time() . '.' . $image->getClientOriginalExtension();
        $path = public_path('banners/' . $filename);
        $manager = new ImageManager(array('driver' => 'gd'));
        $image = $manager->make($image->getRealPath())->resize(1108, 520)->save($path);
        $banners = new Banner();
        $banners->url = $filename;
        $banners->descripcion = $request->descripcion;
        $banners->estatus = 1;
        $banners->save();
        Session::flash('message', array('success','Se ha creado un nuevo banner.'));
        return Redirect::to('/admin/banner');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $banner = Banner::findOrFail($id);
        return view('admin.banner.edit')->withBanner($banner);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $banner = Banner::find($id);
        $pathDelete = public_path('banners/' . $banner->url);
        $image = Input::file('imagen');
        $filename  = time() . '.' . $image->getClientOriginalExtension();
        $path = public_path('banners/' . $filename);
        $manager = new ImageManager(array('driver' => 'gd'));
        $image = $manager->make($image->getRealPath())->resize(1108, 520)->save($path);
        $banner->url = $filename;
        $banner->descripcion = $request->descripcion;
        $banner->estatus = $request->estatus;
        $banner->save();
        File::delete($pathDelete);
        Session::flash('message', array('info','El Banner se edito correctamente.'));
        return Redirect::to('/admin/banner');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
