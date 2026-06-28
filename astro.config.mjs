// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.airic.dev',
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    starlight({
      title: 'Airic',
      description:
        'Airic is an open-source methodology runtime. Convert playbooks, SOPs, and expert workflows into document-defined agent packs.',
      customCss: ['./src/styles/starlight-overrides.css'],
      logo: {
        light: './src/assets/airic-icon-light.png',
        dark: './src/assets/airic-icon-dark.png',
        alt: 'Airic',
        replacesTitle: true,
      },
      head: [
        {
          tag: 'link',
          attrs: { rel: 'icon', href: '/favicon.ico', sizes: '48x48' },
        },
        {
          tag: 'link',
          attrs: {
            rel: 'icon',
            type: 'image/png',
            sizes: '32x32',
            href: '/airic-icon-32.png',
          },
        },
        {
          tag: 'link',
          attrs: {
            rel: 'apple-touch-icon',
            sizes: '180x180',
            href: '/apple-touch-icon.png',
          },
        },
        {
          tag: 'link',
          attrs: { rel: 'manifest', href: '/site.webmanifest' },
        },
        {
          tag: 'link',
          attrs: {
            rel: 'preconnect',
            href: 'https://fonts.googleapis.com',
          },
        },
        {
          tag: 'link',
          attrs: {
            rel: 'preconnect',
            href: 'https://fonts.gstatic.com',
            crossorigin: true,
          },
        },
        {
          tag: 'link',
          attrs: {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css2?family=Inter+Tight:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap',
          },
        },
      ],
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/airicdev',
        },
      ],
      sidebar: [
        { label: 'Home', link: '/' },
        { label: 'Introduction', link: '/docs/' },
        {
          label: 'Guides',
          items: [
            { label: 'Getting Started', link: '/docs/getting-started/' },
            { label: 'Packsmith', link: '/docs/packsmith/' },
          ],
        },
        {
          label: 'Concepts',
          items: [
            {
              label: 'Document-defined agents',
              link: '/docs/concepts/document-defined-agents/',
            },
            { label: 'Reflection', link: '/docs/concepts/reflection/' },
            {
              label: 'vs Traditional agents',
              link: '/docs/concepts/comparison/',
            },
          ],
        },
      ],
    }),
  ],
});
