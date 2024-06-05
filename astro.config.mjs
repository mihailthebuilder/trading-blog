import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://learningquant.com",
  integrations: [mdx(), tailwind(), sitemap()],
  redirects: {
    "/blog/mihail-blog-introduction": "/blog/202406/mihail-blog-introduction",
    "/blog/why-algorithmic-trading": "/blog/202406/why-algorithmic-trading",
  },
});
