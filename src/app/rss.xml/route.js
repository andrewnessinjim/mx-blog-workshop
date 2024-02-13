import { getBlogPostList } from "@/helpers/file-helpers";
import RSS from "rss";

export async function GET() {
  const rssFeed = new RSS({
    title: "Bits & Bytes Blog by Josh",
    feed_url: "http://localhost:3000/rss.xml",
    site_url: "http://localhost:3000",
  });

  const blogsData = await getBlogPostList();

  blogsData.forEach((blogData) => {
    rssFeed.item({
      title: blogData.title,
      description: blogData.abstract,
    });
  });

  const rssFeedXML = rssFeed.xml({ indent: true });

  return new Response(rssFeedXML, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
