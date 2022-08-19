<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Inertia\Inertia;

class BerandaController extends Controller
{
    //
    public function beranda()
    {
        $posts = Http::get('https://jsonplaceholder.typicode.com/posts')->collect();
        return Inertia::render('Beranda',[
            'posts' => $posts
        ]);
    }
}
