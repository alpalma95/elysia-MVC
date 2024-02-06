import { defineConfig } from "vite";


export default defineConfig({
    build: {
      manifest: true,
      outDir: "./public/build",
      copyPublicDir: false,
      rollupOptions: {
        input: {
            main: '/frontend/main.ts',
            home: '/frontend/pages/home.ts'
        },
      },
    },
  })