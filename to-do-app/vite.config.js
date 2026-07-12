import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Poor To-Do List',
        short_name: 'Poor To-Do',
        description: 'Shitty code and awful css makes a to-do list.',
        theme_color: '#020617', // Matches your blue-950 background gradient!
        icons: [
          {
            src: 'todo-list-icon-task-icon-clipboard-icon-free-vector.jpg', // You will need to drop an icon file in your /public folder
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'todo-list-icon-task-icon-clipboard-icon-free-vector.jpg',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ],
})
