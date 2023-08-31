import formatDate from "@/helper/formatDate";
import { Post } from "@/utils/types";
import Image from "next/image";
import Link from "next/link";

type Props = {
	post: Post;
};
const Style3 = ({ post }: Props) => {
	return (
		<div
			className="post-item wow fadeInUp"
			data-wow-delay="100ms"
			data-wow-duration="800ms"
		>
			<div className="rt-post post-md style-2 style-4  grid-meta">
				<div className="post-img">
					<Link href="/posts/[post_slug]" as={`/posts/${post.slug}`}>
						<Image
							src={post.thumbnail_url}
							alt="post"
							width="696"
							height="491"
						/>
					</Link>
				</div>
				<div className="post-content">
					<Link
						href="/category/[category_slug]"
						as={`/category/${post.category.slug}`}
						className="action"
					>
						Action
					</Link>
					<h3 className="post-title">
						<Link href="/posts/[post_slug]" as={`/posts/${post.slug}`}>
							{post.title}
						</Link>
					</h3>
					<p className="post-excerpt">{post.excerpt}</p>

					<div className="post-meta">
						<ul>
							<li>
								<span className="rt-meta">
									by{" "}
									<Link
										href={`author/${post.author.username}`}
										className="name"
									>
										{post.author.first_name
											? `${post.author.first_name} ${post.author.last_name}`
											: post.author.username}
									</Link>
								</span>
							</li>
							<li>
								<span className="rt-meta">
									<i className="far fa-calendar-alt icon"></i>
									{formatDate(post.created_at)}
								</span>
							</li>
							<li>
								<span className="rt-meta">
									<i className="fas fa-share-alt icon"></i>
									3,250
								</span>
							</li>
						</ul>
					</div>
					<div className="btn-wrap mt--25">
						<Link
							href="/posts/[post_slug]"
							as={`/posts/${post.slug}`}
							className="rt-read-more rt-button-animation-out"
						>
							Read More
							<svg
								width="34px"
								height="16px"
								viewBox="0 0 34.53 16"
								xmlSpace="preserve"
							>
								<rect
									className="rt-button-line"
									y="7.6"
									width="34"
									height=".4"
								></rect>
								<g className="rt-button-cap-fake">
									<path
										className="rt-button-cap"
										d="M25.83.7l.7-.7,8,8-.7.71Zm0,14.6,8-8,.71.71-8,8Z"
									></path>
								</g>
							</svg>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Style3;
