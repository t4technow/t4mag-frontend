import { useState } from "react";
import { Category, Post } from "@/utils/types";
import { baseUrl } from "../config/constants";

type HeaderData = {
	recentPosts: Post[];
	categories: Category[];
};

const useHeaderData = async (): Promise<HeaderData> => {
	const [recentPosts, setRecentPosts] = useState<Post[]>([]);
	const [categories, setCategories] = useState<Category[]>([]);

	try {
		const recentResponse = await fetch(`${baseUrl}/posts/recent`);
		const recentData =
			recentResponse.status === 200 ? await recentResponse.json() : [];

		const categoriesResponse = await fetch(`${baseUrl}/categories`);
		const categoriesData =
			categoriesResponse.status === 200 ? await categoriesResponse.json() : [];

		setRecentPosts(recentData);
		setCategories(categoriesData);

		return { recentPosts, categories };
	} catch (error) {
		console.error("Error fetching header data:", error);
		return { recentPosts: [], categories: [] };
	}
};

export default useHeaderData;
