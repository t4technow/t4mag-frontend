import CustomHead from "@/components/customHead";
import Paginator from "@/components/paginator";
import Style4 from "@/components/post/style4";
import { baseUrl } from "@/config/constants";
import UserLayout from "@/layout/userLayout";
import { getCategoryDetails } from "@/services/apiService";

import { Category, CategoryDetails, Post } from "@/utils/types";
import { GetStaticPropsContext } from "next";
import { useRouter } from "next/router";
import { ReactElement } from "react";

type Props = {
	categoryData: CategoryDetails;
};

const SingleCategory = ({ categoryData }: Props) => {
	const router = useRouter();
	if (router.isFallback) {
		return <h1>Loading...</h1>;
	}

	return (
		<>
			<CustomHead
				title={categoryData.title}
				desc={`Explore all the posts in ${categoryData.title}`}
			/>

			<div className="rt-left-sidebar-sapcer-5">
				<div className="post-list-style-4">
					{categoryData.posts?.map((post: Post) => (
						<Style4 post={post} key={post.id} />
					))}
				</div>

				{categoryData.posts && categoryData.posts.length > 10 ? (
					<Paginator />
				) : (
					""
				)}
			</div>
		</>
	);
};

SingleCategory.getLayout = function getLayout(page: ReactElement) {
	return <UserLayout>{page}</UserLayout>;
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

	return {
		props: {
			categoryData,
		},
		revalidate: 10,
	};
}
