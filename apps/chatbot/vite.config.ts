/// <reference types='vitest' />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import { nxCopyAssetsPlugin } from '@nx/vite/plugins/nx-copy-assets.plugin';
import federation, { Shared } from '@originjs/vite-plugin-federation';

export default defineConfig({
  root: __dirname,
  cacheDir: '../../node_modules/.vite/apps/chatbot',

  server: {
    port: 4700,
    host: 'localhost',
    cors: {
      origin: [
        'http://localhost:5000', // Host app
        'http://localhost:5001', // Remote app (if any)
        'http://localhost:4200', // Books frontend itself (useful for testing)
        'http://localhost:4700',
      ],
      methods: ['GET', 'POST'],
      allowedHeaders: ['Content-Type'],
    },
  },

  preview: {
    port: 4500,
    host: 'localhost',
    cors: true,
  },

  plugins: [
    react(),
    tailwindcss(),
    federation({
      name: 'chatbot',
      filename: 'remoteEntry.js',
      exposes: {
        './App': './src/app/app.tsx', // <-- Make sure this file exists and is built
        './tailwind-styles': './src/app/index.css',
      },
      shared: {
        react: { singleton: true, requiredVersion: '18.2.0' },
        'react-dom': { singleton: true, requiredVersion: '18.2.0' },
        'react-router-dom': { singleton: true },
      } as Shared,
    }),
    nxViteTsPaths(),
    nxCopyAssetsPlugin(['*.md']),
  ],
  build: {
    outDir: '../../dist/apps/chatbot',
    emptyOutDir: true,
    reportCompressedSize: true,
    commonjsOptions: {
      transformMixedEsModules: true,
    },
    target: 'esnext',
  },
});
