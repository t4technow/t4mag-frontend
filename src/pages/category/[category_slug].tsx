import Style4 from "@/components/post/style4";
import Sidebar from "@/components/sidebar/sidebar";
import { baseUrl } from "@/config/constants";
import { getCategoryDetails } from "@/services/apiService";
import fetchCategoryPosts from "@/services/getCategoryPosts";
import fetchSidebarData from "@/services/getSidebarData";

import { Category, CategoryDetails, Post, SidebarData } from "@/utils/types";
import { GetStaticPropsContext } from "next";
import Link from "next/link";
import { useRouter } from "next/router";

type Props = {
	categoryData: CategoryDetails;
	sidebarData: SidebarData;
};

const SingleCategory = ({ categoryData, sidebarData }: Props) => {
	const router = useRouter();
	if (router.isFallback) {
		return <h1>Loading...</h1>;
	}

	return (
		<section className="rt-sidebar-section-layout-1">
			<div className="container">
				<div className="row gutter-40 sticky-coloum-wrap">
					<div className="col-xl-9 sticky-coloum-item">
						<div className="theiaStickySidebar">
							<div className="rt-left-sidebar-sapcer-5">
								<div className="post-list-style-4">
									{categoryData.posts?.map((post: Post) => (
										<Style4 post={post} key={post.id} />
									))}
								</div>

								<nav className="rt-pagination-area gap-top-90">
									<ul className="pagination rt-pagination justify-content-center">
										<li className="page-item prev">
											<Link className="page-link" href="#">
												<i className="fas fa-angle-double-left"></i>
											</Link>
										</li>
										<li className="page-item active" aria-current="page">
											<span className="page-link">1</span>
										</li>

										<li className="page-item next">
											<Link className="page-link" href="#">
												<i className="fas fa-angle-double-right"></i>
											</Link>
										</li>
									</ul>
								</nav>
							</div>
						</div>
					</div>

					<Sidebar sidebarData={sidebarData} />
				</div>
			</div>
		</section>
	);
};

export default SingleCategory;

export async function getStaticPaths() {
	const response = await fetch(`${baseUrl}/categories/`);
	const data = await response.json();

	const paths = data.map((category: Category) => {
		return {
			params: {
				category_slug: category.slug,
			},
		};
	});

	return {
		paths,
		fallback: true,
	};
}

export async function getStaticProps(context: GetStaticPropsContext) {
	const { params } = context;

	const categoryData = await getCategoryDetails(params?.category_slug);

	const sidebarData = await fetchSidebarData();

	return {
		props: {
			categoryData,
			sidebarData,
		},
		revalidate: 10,
	};
}
