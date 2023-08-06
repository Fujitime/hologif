import { defineConfig } from "vite"

export default defineConfig({
    build : {
        outDir: 'production',
        rollupOptions: {
            input : {
                index : "index.html",
                gallery : "gallery.html"
            }
        }
    },
    server: {
        port: 7000
    }
})