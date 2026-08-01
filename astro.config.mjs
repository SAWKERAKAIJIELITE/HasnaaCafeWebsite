// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import keystatic from "@keystatic/astro";
import react from '@astrojs/react';
import markdoc from '@astrojs/markdoc';
import node from '@astrojs/node';


// https://astro.build/config
export default defineConfig({
    output: 'server',
    adapter: node({ mode: 'standalone' }),
    integrations: [sitemap(), keystatic(), react(), markdoc()],

    vite: {
        plugins: [tailwindcss()],
    },
});
