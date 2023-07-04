import Style3 from "@/components/post/style3";
import Style4 from "@/components/post/style4";
import Sidebar from "@/components/sidebar/sidebar";
import { baseUrl } from "@/config/constants";
import { getTagDetails } from "@/services/apiService";
import fetchSidebarData from "@/services/getSidebarData";

import { Category, Post, SidebarData, Tag, TagDetails } from "@/utils/types";
import { GetStaticPropsContext } from "next";
import Link from "next/link";
import { useRouter } from "next/router";

import type { ReactElement } from "react";
import UserLayout from "@/layout/userLayout";
import type { NextPageWithLayout } from "../_app";

type Props = {
	tagData: TagDetails;
};

const SingleTag = ({ tagData }: Props) => {
	const router = useRouter();
	if (router.isFallback) {
		return <h1>Loading...</h1>;
	}

	return (
		<div className="rt-left-sidebar-sapcer-5 sticky-wrap">
			<div className="wrap post-wrap-style-3">
				{tagData.posts?.map((post: Post) => (
					<Style3 post={post} key={post.id} />
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
	);
};

SingleTag.getLayout = function getLayout(page: ReactElement) {
	return <UserLayout>{page}</UserLayout>;
};

export default SingleTag;

export async function getStaticPaths() {
	const response = await fetch(`${baseUrl}/tags/`);
	const data = await response.json();

	const paths = data.map((tag: Tag) => {
		return {
			params: {
				tag_slug: tag.slug,
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

	const tagData = await getTagDetails(params?.tag_slug);

	return {
		props: {
			tagData,
		},
		revalidate: 10,
	};
}
