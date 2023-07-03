import { Tag } from "@/utils/types";
import React from "react";
import SectionHeading from "../sectionHeading";
import Link from "next/link";

type Props = {
	tagList?: Tag[];
};

const TagList = ({ tagList }: Props) => {
	return (
		<>
			<div className="sidebar-wrap">
				<SectionHeading title="Tags" small={true} />
				<div className="tag-list">
					{tagList && tagList.length > 0 ? (
						tagList.map((tag) => {
							return (
								<Link
									href="/tags/[tag_slug]"
									as={`/tags/${tag.slug}`}
									className="tag-link"
									key={tag.id}
								>
									{tag.title}
								</Link>
							);
						})
					) : (
						<span> something went wrong</span>
					)}
				</div>
			</div>
		</>
	);
};

export default TagList;
