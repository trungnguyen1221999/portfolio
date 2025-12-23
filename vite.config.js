import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { viteStaticCopy } from 'vite-plugin-static-copy';

// https://vite.dev/config/
export default defineConfig({
  base: "/",
  plugins: [
    react(),
    tailwindcss(),
    viteStaticCopy({
      targets: [
        { src: 'public/manifest.json', dest: '' },
        { src: 'public/sw.js', dest: '' },
        { src: 'public/assets/icons', dest: 'assets/icons' }
      ]
    })
  ],
})
