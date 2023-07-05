import React, { ReactNode, useEffect, useState } from "react";
import { useRouter } from "next/router";
import NextNProgress from "nextjs-progressbar";
import CustomHead from "@/components/customHead";
import Header from "@/components/sections/header";
import Footer from "@/components/footer/Footer";
import { Category, Post, SidebarData } from "@/utils/types";
import { getCategories, getRecentPosts } from "@/services/apiService";
import Sidebar from "@/components/sidebar/sidebar";
import fetchSidebarData from "@/services/getSidebarData";
import PropTypes from "prop-types";

type UserLayoutProps = {
	children: ReactNode;
};

function UserLayout({ children }: UserLayoutProps) {
	const router = useRouter();
	const isHomePage = router.pathname === "/";
	const isPostPage = router.pathname.includes("/posts/");

	const [recentPosts, setRecentPosts] = useState<Post[]>([]);
	const [categories, setCategories] = useState<Category[]>([]);
	const [sidebarData, setsidebarData] = useState<SidebarData | null>({});

	useEffect(() => {
		const fetchHeaderData = async () => {
			try {
				const recentData = await getRecentPosts();
				const categoriesData = await getCategories();

				const sidebarDataChunk = await fetchSidebarData();

				setsidebarData(sidebarDataChunk);
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
					{!isHomePage && !isPostPage ? (
						<section className="rt-sidebar-section-layout-1">
							<div className="container">
								<div className="row gutter-40 sticky-coloum-wrap">
									<div className="col-xl-9 sticky-coloum-item">{children}</div>

									{sidebarData && <Sidebar sidebarData={sidebarData} />}
								</div>
							</div>
						</section>
					) : (
						children
					)}
				</main>

				<Footer posts={footerPosts} categories={categories} />
			</div>
		</>
	);
}

UserLayout.propTypes = {
	children: PropTypes.node.isRequired,
};

export default UserLayout;
