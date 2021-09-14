import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import svgicon from 'vite-plugin-svgicon';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        svgicon({
            include: ['**/src/assets/icons/*.svg'],
        })],
    resolve: {
        alias: [
            { find: '@', replacement: path.resolve(__dirname, './src') },
        ],
    },
});
