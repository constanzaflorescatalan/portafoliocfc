import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// `host: true` permite abrir el sitio desde el celular en la misma red wifi.
export default defineConfig({
  plugins: [react()],
  server: { host: true, open: true },
});
