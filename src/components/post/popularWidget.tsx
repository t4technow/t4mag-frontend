import { Post } from "@/utils/types";
import Image from "next/image";
import Link from "next/link";
import SectionHeading from "../sectionHeading";

type Props = {
	posts: Post[];
};

const PopularWidget = ({ posts }: Props) => {
	return (
		<div className="sidebar-wrap">
			<SectionHeading title="Popular Posts" small={true} />
			<div className="row rt-gutter-10 popular-widget">
				{posts.map((post) => (
					<div className="col-6" key={post.id}>
						<div className="rt-post-grid post-grid-md grid-meta">
							<div className="post-img">
								<Link href="single-post1.html">
									<Image
										src={post.thumbnail_sm_url}
										alt="post"
										width="343"
										height="250"
									/>
								</Link>
							</div>
							<div className="post-content">
								<a href="life-style.html" className="rt-post-cat-normal">
									Fashion
								</a>
								<h4 className="post-title">
									<a href="single-post1.html">Beste ampute Speak Market</a>
								</h4>
								<span className="rt-meta">
									<i className="far fa-calendar-alt icon"></i>
									DECEMBER 9, 2022
								</span>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default PopularWidget;
