import React from "react";
import SectionHeading from "../sectionHeading";
import CircularPost from "../post/CircularPost";

import { Post } from "@/utils/types";

type Props = {
	posts?: Array<Post>;
};
const UpperSideBar = ({ posts }: Props) => {
	return (
		<div className="sidebar-wrap">
			<SectionHeading title="Popular News" small={true} />

			<div className="post-list">
				{posts?.map((post) => {
					return (
						<div className="item" key={post.id}>
							<CircularPost post={post} />
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default UpperSideBar;
