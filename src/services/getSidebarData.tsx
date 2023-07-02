import axiosInstance from "@/config/axiosInstance";

const fetchSidebarData = async () => {
	try {
		const [recentPostsResponse, categoryListResponse] = await Promise.all([
			axiosInstance.get("/posts/recent"),
			axiosInstance.get("/categories"),
		]);

		const recentPosts = recentPostsResponse.data;
		const categoryList = categoryListResponse.data;

		return {
			recentPosts,
			categoryList,
		};
	} catch (error) {
		console.error("Error fetching sidebar data:", error);
		return null;
	}
};

export default fetchSidebarData;
