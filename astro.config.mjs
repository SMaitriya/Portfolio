import { defineConfig } from "astro/config"
import mdx from "@astrojs/mdx"
import sitemap from "@astrojs/sitemap"
import tailwind from "@astrojs/tailwind"
import solidJs from "@astrojs/solid-js"

// https://astro.build/config
export default defineConfig({
<<<<<<< HEAD
  site: 'https://smaitriya.github.com/',
=======
  site: 'https://maitriya.fr/',
>>>>>>> b6dc66c3dd18d0d122cda5540f05e399cb1c50a3
  integrations: [mdx(), sitemap(), solidJs(), tailwind({ applyBaseStyles: false })],
})
