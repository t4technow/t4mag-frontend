import axiosInstance from "@/config/axiosInstance";
import { Category } from "@/utils/types";

const fetchSidebarData = async () => {
	try {
		const [
			recentPostsResponse,
			popularPostsResponse,
			categoryListResponse,
			tagListResponse,
		] = await Promise.all([
			axiosInstance.get("/posts/recent/"),
			axiosInstance.get("/posts/popular/"),
			axiosInstance.get("/categories/"),
			axiosInstance.get("/tags/"),
		]);

		const recentPosts = recentPostsResponse.data.slice(0, 4);
		const popularPosts = popularPostsResponse.data.slice(0, 4);
		const categoryList = categoryListResponse.data.filter(
			(category: Category) => category.post_count > 0
		);
		const tagList = tagListResponse.data;

		return {
			recentPosts,
			popularPosts,
			categoryList,
			tagList,
		};
	} catch (error) {
		console.error("Error fetching sidebar data:", error);
		return null;
	}
};

export default fetchSidebarData;
