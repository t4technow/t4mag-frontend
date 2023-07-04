import axiosInstance from "@/config/axiosInstance";

const fetchCsrfToken = async () => {
	try {
		const response = await axiosInstance.get("/get-csrf-token/");

		return response.data.csrfToken;
	} catch (error) {
		console.error("Failed to fetch CSRF token:", error);
		return null;
	}
};

export default fetchCsrfToken;
