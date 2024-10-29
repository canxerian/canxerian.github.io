import { glob } from "glob";
import { resolve } from "path";
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
            input: [
                resolve(__dirname, "index.html"),
                ...glob.sync(resolve(__dirname, "projects", "*.html")),
            ]
        },
    },
    appType: "mpa"
});