import Swiper from "@/components/sections/Swiper";
import Grid from "@/components/sections/grid";
import FeaturedTabbed from "@/components/sections/featured1";
import TopStories from "@/components/sections/topStories";
import Featured2 from "@/components/sections/featured2";
import Style1 from "@/components/post/style1";
import AdBanner from "@/components/adBanner";
import UpperSideBar from "@/components/sections/sideBarUpper";
import TagList from "@/components/sidebar/tags";

import { Category, Post } from "@/utils/types";

import {
	getAllPosts,
	getCategories,
	getPosts,
	getRecentPosts,
} from "@/services/apiService";
import CategoryList from "@/components/sidebar/hotCategories";

type Props = {
	posts: Array<Post>;
	recentPosts: Array<Post>;
	categories: Array<Category>;
	allPosts: Array<Post>;
};

const index = ({ posts, recentPosts, categories, allPosts }: Props) => {
	return (
		<>
			<section
				className="rt-feature-section feature-section-style-1 overflow-hidden"
				data-bg-image="media/elements/element_1.png"
			>
				<div className="container">
					{posts !== null ? (
						<Swiper posts={posts} />
					) : (
						<h3>something went wrong</h3>
					)}
				</div>
			</section>

			<section className="rt-main-post-section main-post-section-style-1 section-padding">
				<div className="container">
					{recentPosts !== null ? (
						<Grid posts={recentPosts} priority={true} size="md" />
					) : (
						<h3>something went wrong</h3>
					)}
				</div>
			</section>

			<TopStories title="Top Stories" posts={posts} />

			<section className="whats-new-style-1 section-padding">
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
								<UpperSideBar posts={posts} />
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="section-padding">
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
								<TagList tagList={categories} />
								<CategoryList categoryList={categories} />
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default index;

export async function getStaticProps() {
	try {
		const posts = await getPosts();
		const recentPosts = await getRecentPosts();
		const categories = await getCategories();
		const allPosts = await getAllPosts();

		return {
			props: {
				posts: posts && posts.length > 0 ? posts.slice(0, 4) : null,
				recentPosts: recentPosts && recentPosts.length > 0 ? recentPosts : null,
				categories:
					categories && categories.length > 0 ? categories.slice(0, 4) : null,
				allPosts: allPosts && allPosts.length > 0 ? allPosts : null,
			},
			revalidate: 10,
		};
	} catch (error) {
		console.error("Error fetching data:", error);
		return {
			props: {
				posts: null,
				recentPosts: null,
				categories: null,
				allPosts: null,
			},
			revalidate: 10,
		};
	}
}
