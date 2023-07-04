import {
	getCategories,
	getCategoryLatesPost,
	getPosts,
} from "@/services/apiService";
import { CategoryLatestPost, Post } from "@/utils/types";
import { format } from "date-fns";

const Sitemap = () => {
	return null;
};

export default Sitemap;

export const getServerSideProps = async (context: any) => {
	context.res.setHeader("Content-Type", "text/xml");
	const xml = await generateSitemap();
	context.res.write(xml);
	context.res.end();
	return {
		props: {},
	};
};

async function generateSitemap(): Promise<string> {
	const posts = await getPosts();
	const categories = await getCategoryLatesPost();

	const pages = [...posts, ...categories];

	return `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  
  ${pages
		.map(
			(page) => `
			<url>
        <loc>https://www.t4technow.com/posts/${page.slug}</loc>
				<lastmod>
				${
					page.created_at
						? format(new Date(page.created_at), "yyyy-MM-dd")
						: page.latest_post
						? format(new Date(page.latest_post.created_at), "yyyy-MM-dd")
						: ""
				}
				</lastmod>
      </url>`
		)
		.join("")}
  </urlset>`;
}
