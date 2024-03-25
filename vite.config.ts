import { defineConfig, PluginOption } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import react from '@vitejs/plugin-react-swc';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default () => {
  const plugins: PluginOption[] = [react(), svgr(), tsconfigPaths()];

  return defineConfig({
    plugins,

    // --------------- Build configuration
    build: {
      outDir: 'dist',
      rollupOptions: {
        cache: false,
      },
      sourcemap: true,
    },

    // ------------- Css configuration
    css: {
      devSourcemap: true,
      postcss: './postcss.config.cjs',
      modules: {
        localsConvention: 'camelCase',
        generateScopedName: '[local]_[hash:base64:5]',
      },
    },
  });
};
