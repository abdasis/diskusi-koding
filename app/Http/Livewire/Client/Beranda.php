<?php

namespace App\Http\Livewire\Client;

use Livewire\Component;

class Beranda extends Component
{
    public function render()
    {
        return view('livewire.client.beranda')->layout('layouts.guest');
    }
}
