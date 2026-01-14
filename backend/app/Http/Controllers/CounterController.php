<?php
// backend/app/Http/Controllers/CounterController.php
namespace App\Http\Controllers;

use Illuminate\Support\Facades\Cache;

class CounterController extends Controller
{
    public function get()
    {
        $count = Cache::get('counter', 0);
        return response()->json(['count' => $count]);
    }

    public function increment()
    {
        $count = Cache::get('counter', 0);
        $count++;

        Cache::put('counter', $count);

        return response()->json(['count' => $count]);
    }
}
