import { Post } from "@/utils/types";
import Link from "next/link";

type Props = {
	post: Post;
};

const BreadCrump = ({ post }: Props) => {
	return (
		<div className="banner inner-banner">
			<div className="container">
				<nav className="rt-breadcrumb-wrap" aria-label="breadcrumb">
					<ol className="breadcrumb">
						<li className="breadcrumb-item">
							<Link href="/">
								<i className="fas fa-home"></i>
								Home
							</Link>
						</li>
						{post.category ? (
							<li className="breadcrumb-item">
								<Link href={`/category/${post.category.slug}`}>
									{post.category.title}
								</Link>
							</li>
						) : null}
						<li className="breadcrumb-item active" aria-current="page">
							<span className="rt-text-truncate">{post.title}</span>
						</li>
					</ol>
				</nav>
			</div>
		</div>
	);
};

export default BreadCrump;
