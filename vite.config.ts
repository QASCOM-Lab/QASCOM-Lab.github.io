import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { writeFileSync } from 'fs';

// Plugin to create .nojekyll file for GitHub Pages
const nojekyllPlugin = () => {
  return {
    name: 'nojekyll',
    writeBundle() {
      writeFileSync(path.resolve(__dirname, 'dist/.nojekyll'), '');
    }
  };
};

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      base: '/', // GitHub Pages base path (root for .github.io repos)
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [
        react(),
        nojekyllPlugin()
      ],
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      },
      build: {
        // Ensure proper module format for GitHub Pages
        rollupOptions: {
          output: {
            // Ensure proper format for ES modules
            format: 'es',
          }
        },
        // Ensure assets are properly handled
        assetsDir: 'assets',
      }
    };
});
