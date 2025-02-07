// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://kamelelmaz.github.io',
  i18n: {
    locales: ["en", "fr"],
    defaultLocale: "en"
  },
  integrations: [tailwind()]
});