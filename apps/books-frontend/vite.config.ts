/// <reference types='vitest' />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import { nxCopyAssetsPlugin } from '@nx/vite/plugins/nx-copy-assets.plugin';
import federation, { Shared } from '@originjs/vite-plugin-federation';

export default defineConfig({
  root: __dirname,
  cacheDir: '../../node_modules/.vite/apps/books-frontend',

  server: {
    port: 4200,
    host: 'localhost',
    cors: {
      origin: [
        'http://localhost:5000', // Host app
        'http://localhost:5001', // Remote app (if any)
        'http://localhost:4200', // Books frontend itself (useful for testing)
      ],
      methods: ['GET', 'POST'],
      allowedHeaders: ['Content-Type'],
    },
  },
  preview: {
    port: 4200,
    host: 'localhost',
    cors: true,
  },
  optimizeDeps: {
    include: ['react', 'react-dom'],
  },
  plugins: [
    react(),
    tailwindcss(),
    federation({
      name: 'books-frontend',
      filename: 'remoteEntry.js',
      exposes: {
        './App': './src/app/app.tsx',
        './tailwind-styles': './src/app/index.css',
      },
      shared: {
        react: {
          singleton: true,
          requiredVersion: '18.2.0',
        },
        'react-dom': {
          singleton: true,
          requiredVersion: '18.2.0',
        },
      } as Shared,
    }),
    nxViteTsPaths(),
    nxCopyAssetsPlugin(['*.md']),
  ],

  build: {
    outDir: '../../dist/apps/books-frontend',
    emptyOutDir: true,
    reportCompressedSize: true,
    commonjsOptions: {
      transformMixedEsModules: true,
    },
    target: 'esnext',
  },
});
