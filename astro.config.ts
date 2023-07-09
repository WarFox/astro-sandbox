import { defineConfig } from "astro/config";
import preact from "@astrojs/preact";

import orgajs from "@orgajs/astro";

// https://astro.build/config
export default defineConfig({
  site: "https://warfox.github.io",
  base: "/astro-sandbox",
  integrations: [preact(), orgajs()],
});
