// @ts-check
import { defineConfig } from 'astro/config';

import node from '@astrojs/node';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';


// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: node({mode: 'standalone'}),
  integrations: [tailwind(), react(), mdx({
    optimize: true,
  })],
  vite: {
    define: {
      'process.env': JSON.stringify(process.env)
    },
    build: {
      minify: 'terser'
    },
  },
});