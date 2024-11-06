// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import { imageService } from "@unpic/astro/service";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  site: 'https://canxerian.com',
  image: {
    service: imageService({
      placeholder: "blurhash",
    }),
  }
});