import Link from "next/link";
import { Post } from "@/utils/types";
import Image from "next/image";
import formatDate from "../../helper/formatDate";

type Props = {
	post: Post;
	light?: boolean;
};

const CircularPost = ({ post, light = false }: Props) => {
	return (
		<div className={`rt-post post-sm ${light ? "white-style" : " style-1"}`}>
			<div className="post-img">
				<Link href="/posts/[post_slug]" as={`/posts/${post.slug}`}>
					<Image
						// placeholder="blur"
						src={post.thumbnail_sm_url}
						alt={post.title}
						width="100"
						height="100"
					/>
				</Link>
			</div>
			<div className="ms-4 post-content">
				<Link
					href={`/category/${post.category.slug}`}
					className="rt-post-cat-normal"
				>
					{post.category.title}
				</Link>
				<h3 className="post-title">
					<Link href="/posts/[post_slug]" as={`/posts/${post.slug}`}>
						{" "}
						{post.title}{" "}
					</Link>
				</h3>
				<span className="rt-meta">
					<i className="far fa-calendar-alt icon"></i>
					{formatDate(post.created_at)}
				</span>
			</div>
		</div>
	);
};

export default CircularPost;
