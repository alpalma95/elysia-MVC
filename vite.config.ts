import { defineConfig } from "vite";


export default defineConfig({
    build: {
      manifest: true,
      outDir: "./public/build",
      copyPublicDir: false,
      rollupOptions: {
        input: {
            main: '/assets/main.ts',
            home: '/assets/pages/home.ts'
        },
      },
    },
  })