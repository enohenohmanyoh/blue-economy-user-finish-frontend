
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    global: "window", // ✅ Fix for SockJS "global is not defined"
  },
})






/*
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,       // 👈 custom default port
    strictPort: true, // 👈 fail if 5175 is busy instead of using another port
  },
})

*/
