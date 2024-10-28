import { resolve } from 'path';
import tailwindcss from "tailwindcss";
import { defineConfig } from "vite";

export default defineConfig({
    css: {
        postcss: {
            plugins: [tailwindcss()],
        },
    },
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                nested: resolve(__dirname, 'nested/index.html'),
            },
        },
    },
});