import Style3 from "@/components/post/style3";
import { baseUrl } from "@/config/constants";
import { getTagDetails } from "@/services/apiService";

import { Post, Tag, TagDetails } from "@/utils/types";
import { GetStaticPropsContext } from "next";
import { useRouter } from "next/router";

import type { ReactElement } from "react";
import UserLayout from "@/layout/userLayout";
import Paginator from "@/components/paginator";
import CustomHead from "@/components/customHead";

type Props = {
	tagData: TagDetails;
};

const SingleTag = ({ tagData }: Props) => {
	const router = useRouter();
	if (router.isFallback) {
		return <h1>Loading...</h1>;
	}

	return (
		<>
			<CustomHead
				title={tagData.title}
				desc={`Explore all the posts in ${tagData.title}`}
			/>
			<div className="rt-left-sidebar-sapcer-5 sticky-wrap">
				<div className="wrap post-wrap-style-3">
					{tagData.posts?.map((post: Post) => (
						<Style3 post={post} key={post.id} />
					))}
				</div>

				{tagData.posts && tagData.posts?.length > 10 ? <Paginator /> : ""}
			</div>
		</>
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
