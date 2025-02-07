// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  outDir: "dist",
  site: 'https://kamelelmaz.github.io',
  base: '/MyPortfolio',
  i18n: {
    locales: ["en", "fr"],
    defaultLocale: "en"
  },
  integrations: [tailwind()]
});