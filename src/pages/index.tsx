import Swiper from "@/components/sections/Swiper";
import Grid from "@/components/sections/grid";
import FeaturedTabbed from "@/components/sections/featured1";
import TopStories from "@/components/sections/topStories";
import Featured2 from "@/components/sections/featured2";
import Style1 from "@/components/post/style1";
import AdBanner from "@/components/adBanner";
import UpperSideBar from "@/components/sections/sideBarUpper";
import TagList from "@/components/sidebar/tags";

import { Category, Post, Tag } from "@/utils/types";

import {
	getAllPosts,
	getCategories,
	getPopularPosts,
	getPosts,
	getRecentPosts,
	getTags,
} from "@/services/apiService";
import CategoryList from "@/components/sidebar/hotCategories";
import PopularWidget from "@/components/post/popularWidget";
import UserLayout from "@/layout/userLayout";
import { ReactElement, useState } from "react";

import { Variants, motion } from "framer-motion";

type Props = {
	posts: Post[];
	allPosts: Post[];
	recentPosts: Post[];
	popularPosts: Post[];
	categories: Category[];
	tags: Tag[];
};

const HomePage = ({
	posts,
	recentPosts,
	popularPosts,
	allPosts,
	categories,
	tags,
}: Props) => {
	const introHeaderVariants: Variants = {
		hide: {
			opacity: 0,
			y: 50,
		},
		show: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.6,
				delay: 0.4,
				type: "tween",
			},
		},
	};

	return (
		<>
			<section
				className="rt-feature-section feature-section-style-1 overflow-hidden"
				data-bg-image="images/elements/element_1.png"
			// initial="hide"
			// whileInView="show"
			// exit="hide"
			// variants={introHeaderVariants}
			>
				<div className="container">
					{posts !== null ? (
						<Swiper posts={posts} />
					) : (
						<h3>something went wrong</h3>
					)}
				</div>
			</section>

			<section
				className="rt-main-post-section main-post-section-style-1 section-padding"
			// initial="hide"
			// whileInView="show"
			// exit="hide"
			// variants={introHeaderVariants}
			>
				<div className="container">
					{recentPosts !== null ? (
						<Grid posts={recentPosts} priority={true} size="md" />
					) : (
						<h3>something went wrong</h3>
					)}
				</div>
			</section>

			<TopStories title="Top Stories" posts={posts} />

			<section
				className="whats-new-style-1 section-padding"
			// initial="hide"
			// whileInView="show"
			// exit="hide"
			// variants={introHeaderVariants}
			>
				<div className="container">
					<div className="row gutter-30 sticky-coloum-wrap">
						<div className="col-xl-9 sticky-coloum-item">
							<div className="featured-area-style-1 overflow-hidden">
								{allPosts !== null && categories !== null ? (
									<FeaturedTabbed
										title="What’s New"
										categories={categories}
										posts={allPosts}
									/>
								) : (
									<h3>something went wrong</h3>
								)}

								<Featured2 title="Featured Style 2" posts={posts} />
							</div>
						</div>
						<div className="col-xl-3 sticky-coloum-item sticky-sidebar">
							<div className="rt-sidebar sticky-wrap">
								<UpperSideBar posts={recentPosts} />
								<TagList tagList={tags} />
							</div>
						</div>
					</div>
				</div>
			</section>

			<section
				className="section-padding"
			// initial="hide"
			// whileInView="show"
			// exit="hide"
			// variants={introHeaderVariants}
			>
				<div className="container">
					<div className="row gutter-24 sticky-coloum-wrap">
						<div className="col-xl-9 sticky-coloum-item">
							<div className="featured-area-style-1 sticky-wrap">
								<Style1 posts={posts} title="Latest News" />
								<AdBanner />
							</div>
						</div>
						<div className="col-xl-3 sticky-coloum-item sticky-sidebar">
							<div className="rt-sidebar sticky-wrap">
								<PopularWidget posts={popularPosts} />
								<CategoryList categoryList={categories} />
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

HomePage.getLayout = function getLayout(page: ReactElement) {
	return <UserLayout>{page}</UserLayout>;
};

export default HomePage;

export async function getStaticProps() {
	try {
		const posts = await getPosts();
		const allPosts = await getAllPosts();
		const recentPosts = await getRecentPosts();
		const popularPosts = await getPopularPosts();
		const categories = await getCategories();
		const tags = await getTags();
		console.log(posts);
		return {
			props: {
				posts: posts && posts.length > 0 ? posts.slice(0, 4) : null,
				allPosts: allPosts && allPosts.length > 0 ? allPosts : null,
				recentPosts:
					recentPosts && recentPosts.length > 0
						? recentPosts.slice(0, 4)
						: null,
				popularPosts:
					popularPosts && popularPosts.length > 0
						? popularPosts.slice(0, 4)
						: null,
				categories:
					categories && categories.length > 0 ? categories.slice(0, 4) : null,

				tags: tags && tags.length > 0 ? tags : null,
			},
			revalidate: 10,
		};
	} catch (error) {
		console.error("Error fetching data:", error);
		return {
			props: {
				posts: null,
				allPosts: null,
				recentPosts: null,
				popularPosts: null,
				categories: null,
				tags: null,
			},
			revalidate: 10,
		};
	}
}
