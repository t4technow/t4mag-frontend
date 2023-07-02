import { baseUrl } from "@/config/constants";
import { Category } from "@/utils/types";
import { GetStaticPropsContext } from "next";
import React from "react";
import SectionHeading from "../sectionHeading";
import Link from "next/link";

type Props = {
	categoryList?: Category[];
};

const CategoryList = ({ categoryList }: Props) => {
	return (
		<>
			<div className="sidebar-wrap">
				<SectionHeading title="Hot Categories" small={true} />
				<ul className="rt-categories">
					{categoryList && categoryList.length > 0 ? (
						categoryList.map((category) => {
							return (
								<li key={category.id}>
									<Link
										href="/category/[category_slug]"
										as={`/category/${category.slug}`}
										data-bg-image=""
									>
										<span className="cat-name">{category.title}</span>
										<span className="count">{category.post_count}</span>
									</Link>
								</li>
							);
						})
					) : (
						<span> something went wrong</span>
					)}
				</ul>
			</div>
		</>
	);
};

export default CategoryList;
