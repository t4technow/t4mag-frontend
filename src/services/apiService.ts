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
export const getAllPosts = () => fetchData("/posts/");
export const getRecentPosts = () => fetchData("/posts/recent/");
export const getPopularPosts = () => fetchData("/posts/popular/");

export const getCategories = () => fetchData("/categories/");
export const getCategoryLatesPost = () => fetchData('categories/posts/latest/')
export const getCategoryDetails = (url?: string | string[]) =>
	fetchData(`/categories/${url}/`);

export const getTags = () => fetchData("/tags/");
export const getTagDetails = (url?: string | string[]) =>
	fetchData(`/tags/${url}/`);
