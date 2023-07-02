import axiosInstance from "@/config/axiosInstance";

const fetchData = async (url: string) => {
	try {
		const response = await axiosInstance.get(url);
		return response.data;
	} catch (error) {
		console.error("Error fetching data:", error);
		return null;
	}
};

export const getPosts = () => fetchData("/posts/");
export const getRecentPosts = () => fetchData("/posts/recent");
export const getCategories = () => fetchData("/categories");
export const getAllPosts = () => fetchData("/posts/");
