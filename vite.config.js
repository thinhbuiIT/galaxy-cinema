import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// const port = import.meta.env.VITE_REACT_APP_PORT_RUNNING
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // server: {
  //   port: 3000, // Cổng mặc định
  // },
})
