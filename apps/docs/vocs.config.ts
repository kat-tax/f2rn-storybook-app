import {defineConfig} from 'vocs';
import vocsConfig from 'cfg/vocs';
import viteConfig from 'cfg/vite';

export default defineConfig({
  ...vocsConfig,
  rootDir: './',
  vite: {
    resolve: viteConfig.resolve,
    build: {
      outDir: '../../dist/docs',
    },
  },
});
