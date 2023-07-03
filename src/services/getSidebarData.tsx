import axiosInstance from "@/config/axiosInstance";

const fetchSidebarData = async () => {
	try {
		const [recentPostsResponse, categoryListResponse, tagListResponse] =
			await Promise.all([
				axiosInstance.get("/posts/recent"),
				axiosInstance.get("/categories"),
				axiosInstance.get("/tags"),
			]);

		const recentPosts = recentPostsResponse.data;
		const categoryList = categoryListResponse.data;
		const tagList = tagListResponse.data;

		return {
			recentPosts,
			categoryList,
			tagList,
		};
	} catch (error) {
		console.error("Error fetching sidebar data:", error);
		return null;
	}
};

export default fetchSidebarData;
