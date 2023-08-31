import Paginator from "@/components/paginator";
import AdminLayout from "@/layout/adminLayout";
import { getAllPosts, getCategories, getTags } from "@/services/apiService";
import { Category, Post, Tag } from "@/utils/types";
import Link from "next/link";
import { ReactElement } from "react";

interface Props {
	posts: Post[];
	categories: Category[];
	tags: Tag[];
}

const AdminPosts = ({ posts, categories, tags }: Props) => {
	return (
		<>
			<div className="main-section-header d-flex">
				<h5 className="title">All Posts</h5>
				<a href="{% url 'admin_post_create' %}" className="btn btn-add">
					Add Post
				</a>
			</div>

			<div className="content-holder d-flex">
				<div className="content">
					{posts.map((post) => (
						<div className="single-item d-flex  p-2 pe-5 mb-2" key={post.id}>
							<img
								src={post.thumbnail_url}
								alt={post.title}
								className="post-img"
							/>
							<div className="post-info">
								<div className="post-category {{post.category.title | lower}} mb-3">
									{post.category.title}
								</div>
								<div className="post-title  mb-3">
									<Link href="update/">
										<h3 className="title">{post.title}</h3>
									</Link>
								</div>
								<div className="meta">
									by <span className="author_name">{post.author.username}</span>{" "}
									<span className="date"> {post.created_at} </span>
								</div>
							</div>
							<div className="views">{post.views}</div>
							<select className="select" name="visibilty" id="visibilty">
								<option value="publish">Published</option>
								<option value="draft">Draft</option>
							</select>
							{/* <!-- Button trigger modal --> */}
							<button
								type="button"
								className="btn btn-outline-danger"
								data-bs-toggle="modal"
								data-bs-target={`#${post.slug}`}
							>
								Delete
							</button>

							{/* <!-- Modal --> */}
							<div
								className="modal fade"
								id="{{post.slug}}"
								aria-labelledby={`${post.slug} Label`}
								aria-hidden="true"
							>
								<div className="modal-dialog modal-dialog-centered">
									<div className="modal-content">
										<form action="" method="post">
											<div className="modal-header">
												<h5 className="modal-title" id="{{post.slug}}Label">
													Confirm deletion
												</h5>
												<button
													type="button"
													className="btn-close"
													data-bs-dismiss="modal"
													aria-label="Close"
												></button>
											</div>
											<div className="modal-body">
												Are you sure you want to delete {post.title} ?
											</div>
											<div className="modal-footer">
												<button
													type="button"
													className="btn btn-secondary"
													data-bs-dismiss="modal"
												>
													Cancel
												</button>
												<button type="submit" className="btn btn-danger">
													Confirm
												</button>
											</div>
										</form>
									</div>
								</div>
							</div>
						</div>
					))}

					{posts.length > 5 && <Paginator />}
				</div>

				<div className="filter">
					<div className="section-heading">
						<h6 className="title">FILTER</h6>
						<p className="text-danger" id="error-message"></p>
					</div>

					<form action="" method="get" id="colorForm">
						<input type="radio" name="color" id="" value="red" /> Red
						<input type="radio" name="color" id="" value="green" /> Green
						<input type="radio" name="color" id="" value="blue" /> Blue
						<button id="submit1" type="submit">
							{" "}
							submit{" "}
						</button>
					</form>

					<div className="authors">
						<div className="section-heading">
							<h6 className="title">Authors</h6>
						</div>

						<ul className="filter-list">
							{/* <li>
                                <a href="{% url 'admin_posts_by_author' author.id %}" className="d-flex">
                                    <span className="label">{{ author.name }}</span>
                                    <span className="count ms-auto">15</span>
                                </a>
                            </li> */}
						</ul>
					</div>

					<div className="categories mt-5">
						<div className="section-heading">
							<h6 className="title">Categories</h6>
						</div>

						<ul className="filter-list">
							{categories.map((category) => (
								<li key={category.id}>
									<a
										href="{% url 'admin_posts_by_category' category.slug %}"
										className="d-flex"
									>
										<span className="label">{category.title}</span>
										<span className="count ms-auto">{category.post_count}</span>
									</a>
								</li>
							))}
						</ul>
					</div>

					<div className="tags mt-5">
						<div className="section-heading">
							<h6 className="title">Tags</h6>
						</div>

						<ul className="filter-list">
							{tags.map((tag) => (
								<li key={tag.id}>
									<a
										href="{% url 'admin_posts_by_tags' tag.slug %}"
										className="d-flex"
									>
										<span className="label">{tag.title}</span>
										<span className="count ms-auto">16</span>
									</a>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</>
	);
};

AdminPosts.getLayout = function getLayout(page: ReactElement) {
	return <AdminLayout>{page}</AdminLayout>;
};

export default AdminPosts;

export async function getStaticProps() {
	const posts = await getAllPosts();
	const categories = await getCategories();
	const tags = await getTags();

	return {
		props: {
			posts,
			categories,
			tags,
		},
		revalidate: 10,
	};
}
