import axiosInstance from "@/config/axiosInstance";

const fetchTagPosts = async (tag: string) => {
	try {
		const tagResponse = await axiosInstance.get(`/categories/${tag}`);
		const tagPostList = tagResponse.data;

		return {
			tagPostList,
		};
	} catch (error) {
		console.error("Error fetching tag posts data:", error);
		return null;
	}
};

export default fetchTagPosts;
