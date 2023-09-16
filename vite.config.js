import { defineConfig } from "vite"

export default defineConfig({
    build : {
        outDir: 'dist',
        rollupOptions: {
            input : {
                index : "index.html",
                gallery : "gallery.html"
            }
        }
    },
    server: {
        host: "0.0.0.0",
        port: 8000,
    }
})
