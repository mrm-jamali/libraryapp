import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/libraryapp/',   // ← اسم ریپو با / اول و آخر
  plugins: [react()],
})
