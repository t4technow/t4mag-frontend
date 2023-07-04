import axiosInstance from "@/config/axiosInstance";

const fetchCategoryPosts = async (category?: string | string[]) => {
	try {
		const categoryResponse = await axiosInstance.get(`/categories/${category}`);
		const categoryPostList = categoryResponse.data;

		return {
			categoryPostList,
		};
	} catch (error) {
		console.error("Error fetching category posts data:", error);
		return null;
	}
};

export default fetchCategoryPosts;
