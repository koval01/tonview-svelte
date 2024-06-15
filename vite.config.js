import { defineConfig } from 'vite'

import { svelte } from '@sveltejs/vite-plugin-svelte'

export default defineConfig({
    plugins: [
        svelte()
    ],
    build: {
        minify: 'terser',
        terserOptions: {
            ecma: 2020,
            compress: {
                unsafe: true,
                drop_console: true,
                booleans_as_integers: true
            },
            format: {
                ascii_only: true
            }
        }
    }
})
