import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function get() {
  const posts = await getCollection("posts");
  const { SITE, BASE_URL } = import.meta.env;
  return rss({
    title: "Astro Learner | Blog",
    description: "My journey learning Astro",
    site: `${SITE}/${BASE_URL}`,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `${BASE_URL}posts/${post.slug}/`,
    })),
    customData: `<language>en-gb</language>`,
  });
}
