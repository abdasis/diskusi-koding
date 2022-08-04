import {defineConfig} from 'vite';
import laravel from 'laravel-vite-plugin';

import livewire from '@defstudio/vite-livewire-plugin'; // <-- import

export default defineConfig({
    //...

    plugins: [
        laravel({
            input: [
                'resources/js/app.js',
            ],
            refresh: ['resources/views/**', 'public/css/style.css'],
        }),

        livewire({  // <-- add livewire plugin
            refresh: [
                'resources/css/app.css',
                'resources/views/**'
            ],  // <-- will refresh css (tailwind ) as well
        }),
    ],
});
