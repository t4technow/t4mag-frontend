// // import "@/assets/css/all.min.css";
// import { AppProps } from "next/app";

// import NextNProgress from "nextjs-progressbar";
// import CustomHead from "@/components/customHead";
// import Header from "@/components/sections/header";

import "@/assets/css/animate.min.css";
import "@/assets/css/bootstrap.min.css";
import "@/assets/css/magnific-popup.css";

import "@/styles/globals.css";
import "@/styles/style.css";
// import { baseUrl } from "@/config/constants";
// import { useEffect, useState } from "react";
// import { Category, Post } from "@/utils/types";
// import Footer from "@/components/footer/Footer";

// const App = ({ Component, pageProps }: AppProps) => {
// const [recentPosts, setRecentPosts] = useState<Post[]>([]);
// const [categories, setCategories] = useState<Category[]>([]);

// useEffect(() => {
// const fetchHeaderData = async () => {
// try {
// const recentResponse = await fetch(`${baseUrl}/posts/recent`);
// const recentData =
// recentResponse.status === 200 ? await recentResponse.json() : [];

// const categoriesResponse = await fetch(`${baseUrl}/categories`);
// const categoriesData =
// categoriesResponse.status === 200
// ? await categoriesResponse.json()
// : [];

// setRecentPosts(recentData);
// setCategories(categoriesData);
// } catch (error) {
// console.error("Error fetching header data:", error);
// }
// };

// fetchHeaderData();
// }, []);

// const footerPosts: Post[] = recentPosts.slice(0, 2);

// return (
// <>
// <CustomHead />
// <NextNProgress
// color="#29D"
// startPosition={0.3}
// stopDelayMs={200}
// height={3}
// showOnShallow={true}
// options={{ showSpinner: false }}
// />
// <div id="main_content" className="footer-fixed">
// <Header recentPosts={recentPosts} categories={categories} />
// <main>
// <Component {...pageProps} />
// </main>
// <Footer posts={footerPosts} categories={categories} />
// </div>
// </>
// );
// };

// export default App;

import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
Component: NextPageWithLayout;
};

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
// Use the layout defined at the page level, if available
const getLayout = Component.getLayout ?? ((page) => page);

    return getLayout(<Component {...pageProps} />);

}

// import "@/assets/css/all.min.css";
import { AppProps } from "next/app";

import NextNProgress from "nextjs-progressbar";
import CustomHead from "@/components/customHead";
import Header from "@/components/sections/header";

import "@/assets/css/animate.min.css";
import "@/assets/css/bootstrap.min.css";
import "@/assets/css/magnific-popup.css";

import "@/styles/globals.css";
import "@/styles/style.css";
import { baseUrl } from "@/config/constants";
import { useEffect, useState } from "react";
import { Category, Post } from "@/utils/types";
import Footer from "@/components/footer/Footer";

const App = ({ Component, pageProps }: AppProps) => {
const [recentPosts, setRecentPosts] = useState<Post[]>([]);
const [categories, setCategories] = useState<Category[]>([]);

    useEffect(() => {
    	const fetchHeaderData = async () => {
    		try {
    			const recentResponse = await fetch(`${baseUrl}/posts/recent`);
    			const recentData =
    				recentResponse.status === 200 ? await recentResponse.json() : [];

    			const categoriesResponse = await fetch(`${baseUrl}/categories`);
    			const categoriesData =
    				categoriesResponse.status === 200
    					? await categoriesResponse.json()
    					: [];

    			setRecentPosts(recentData);
    			setCategories(categoriesData);
    		} catch (error) {
    			console.error("Error fetching header data:", error);
    		}
    	};

    	fetchHeaderData();
    }, []);

    const footerPosts: Post[] = recentPosts.slice(0, 2);

    return (
    	<>
    		<CustomHead />
    		<NextNProgress
    			color="#29D"
    			startPosition={0.3}
    			stopDelayMs={200}
    			height={3}
    			showOnShallow={true}
    			options={{ showSpinner: false }}
    		/>
    		<div id="main_content" className="footer-fixed">
    			<Header recentPosts={recentPosts} categories={categories} />
    			<main>
    				<Component {...pageProps} />
    			</main>
    			<Footer posts={footerPosts} categories={categories} />
    		</div>
    	</>
    );

};

export default App;
