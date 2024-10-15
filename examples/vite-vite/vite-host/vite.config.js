import { federation } from '@module-federation/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import topLevelAwait from 'vite-plugin-top-level-await';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    open: true,
    port: 5175,
  },
  preview: {
    port: 5175,
  },
  plugins: [
    react(),
    federation({
      name: 'rt-shell',

      /**
       * This remotes doesn't exist locally.
       * We're adding this for testing purposes
       */
      remotes: {
        mfapp01: 'mfapp01@https://unpkg.com/mf-app-01@1.0.11/dist/remoteEntry.js',
        remote2: 'mfapp02@https://unpkg.com/mf-app-02/dist/remoteEntry.js',
        remote3:
          'remote1@https://unpkg.com/react-manifest-example_remote1@1.0.6/dist/mf-manifest.json',
        '@namespace/viteViteRemote': 'http://localhost:5176/mf-manifest.json',
      },
      shared: {
        'react/': {
          requiredVersion: '16.14.0',
          version: '16.14.0',
        },
        'react-dom': {},
      },
      /**
       * Add logs to browser dev tools.
       */
      runtimePlugins: ['./src/mfPlugins'],
    }),
    // If you set build.target: "chrome89", you can remove this plugin
    false && topLevelAwait(),
  ],
  build: {
    target: 'chrome89',
    minify: false,
  },
});
