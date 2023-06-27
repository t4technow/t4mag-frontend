/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		remotePatterns: [
			{
				protocol: "http",
				hostname: "127.0.0.1",
				port: "5555",
				pathname: "/media/**",
			},
			{
				protocol: "https",
				hostname: "api.t4technow.com",
				pathname: "/media/**",
			},
			{
				protocol: "http",
				hostname: "api.t4technow.com",
				pathname: "/media/**",
			},
		],
	},
	experimental: {
		scrollRestoration: true,
	},
};

module.exports = nextConfig;
