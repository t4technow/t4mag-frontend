import { GetStaticPropsContext } from "next";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import { useEffect } from "react";

import { baseUrl } from "@/config/constants";
import axiosInstance from "@/config/axiosInstance";
import { FullPost, Post } from "@/utils/types";

import formatDate from "@/helper/formatDate";

import AdBanner from "@/components/adBanner";
import CustomHead from "@/components/customHead";

import def from "@/assets/vite.svg";
import BreadCrump from "@/components/breadCrump";

type Props = {
	post: FullPost;
};

const SinglePost = ({ post }: Props) => {
	const router = useRouter();

	if (router.isFallback) {
		return <h1>{`Loading ${post?.title || "post"}...`}</h1>;
	}

	return (
		<>
			<CustomHead
				title={post.title}
				desc={post.excerpt}
				author={post.author.username}
			/>

			<BreadCrump post={post} />

			<div
				className="single-post-banner rt-gradient-overaly"
				style={{ backgroundImage: `url(${post.featured_image_url})` }}
			>
				<div className="container">
					<div className="row">
						<div className="col-xl-9 col-lg-10 mx-auto">
							<div className="single-post-content">
								<Link
									href="/category/[category_slug]"
									as={`/category/${post.category.slug}`}
									className="bg rt-post-cat-normal"
									style={{ background: post.category.accent }}
								>
									{post.category.title}
								</Link>
								<h2 className="post-title">{post.title}</h2>
								<div className="post-meta">
									<ul>
										<li>
											<span className="rt-meta">
												by{" "}
												<Link
													href={`/authors/${post.author.username}`}
													className="name"
												>
													{post.author.username}
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
												<i className="far fa-comments icon"></i>
												250 Comments
											</span>
										</li>
										<li>
											<span className="rt-meta">
												<i className="far fa-clock icon"></i>2 minute read
											</span>
										</li>
										<li>
											<span className="rt-meta">
												<i className="fas fa-signal icon"></i>
												{post.views} Views
											</span>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<section className="rt-sidebar-section-layout-3 section-padding">
				<div className="container">
					<div className="row gutter-40">
						<div className="col-xl-9 col-lg-10 mx-auto">
							<div className="rt-main-post-single layout-2">
								<div className="post-share-style-1">
									<div className="inner">
										<div className="share-text">
											<i className="fas fa-share-alt"></i>
											<span>share</span>
										</div>

										<ul className="social-share-style-7">
											<li>
												<a
													className="fb"
													target="_blank"
													href="https://www.facebook.com/"
												>
													<i className="social-icon fab fa-facebook-f"></i>
												</a>
											</li>
											<li>
												<a
													className="tw"
													target="_blank"
													href="https://twitter.com/"
												>
													<i className="social-icon fab fa-twitter"></i>
												</a>
											</li>
											<li>
												<a
													className="yu"
													target="_blank"
													href="https://www.youtube.com/"
												>
													<i className="social-icon fab fa-youtube"></i>
												</a>
											</li>
											<li>
												<a
													className="dr"
													target="_blank"
													href="https://dribbble.com/"
												>
													<i className="social-icon fab fa-dribbble"></i>
												</a>
											</li>
											<li>
												<a
													className="dw"
													target="_blank"
													href="https://cloud.google.com/"
												>
													<i className="social-icon fas fa-cloud"></i>
												</a>
											</li>
										</ul>
									</div>
								</div>

								<div className="post-body">
									<p className="rt-dropcap-style-2">{post.body}</p>

									<AdBanner />
									<div className="border-with-spacer-1"></div>
								</div>

								<div className="social-share-box-2 mb--40">
									<div className="row gutter-30">
										<div className="col-xl-7 col-lg-6">
											<div className="conent-block">
												<h3 className="block-tile mb--20">Popular Tags:</h3>
												<div className="tag-list">
													{post.tags.length > 0
														? post.tags.map((tag) => (
																<Link
																	href="/tags/[tag_slug]"
																	as={`/tags/${tag.slug}`}
																	className="tag-link"
																	key={tag.id}
																>
																	{tag.title}
																</Link>
														  ))
														: null}
												</div>
											</div>
										</div>
										<div className="col-xl-5 col-lg-6 d-flex justify-content-start justify-content-lg-end">
											<div className="conent-block">
												<h4 className="block-tile mb--20">Share This Post:</h4>
												<ul className="social-share-style-1 ">
													<li>
														<a
															className="fb"
															target="_blank"
															href="https://www.facebook.com/"
														>
															<i className="social-icon fab fa-facebook-f"></i>
														</a>
													</li>
													<li>
														<a
															className="tw"
															target="_blank"
															href="https://twitter.com/"
														>
															<i className="social-icon fab fa-twitter"></i>
														</a>
													</li>
													<li>
														<a
															className="yu"
															target="_blank"
															href="https://www.youtube.com/"
														>
															<i className="social-icon fab fa-youtube"></i>
														</a>
													</li>
													<li>
														<a
															className="dr"
															target="_blank"
															href="https://dribbble.com/"
														>
															<i className="social-icon fab fa-dribbble"></i>
														</a>
													</li>
													<li>
														<a
															className="dw"
															target="_blank"
															href="https://cloud.google.com/"
														>
															<i className="social-icon fas fa-cloud"></i>
														</a>
													</li>

													<li>
														<a
															className="wh"
															target="_blank"
															href="https://www.whatsapp.com/"
														>
															<i className="social-icon fab fa-whatsapp"></i>
														</a>
													</li>
												</ul>
											</div>
										</div>
									</div>
								</div>

								<div className="author-box-style-1 mb--50">
									<div className="author-img">
										<Image
											src={
												post.author.profile_pic ? post.author.profile_pic : def
											}
											alt="author-img"
											width="170"
											height="170"
										/>
									</div>
									<div className="author-content">
										<h3 className="author-name">{post.author.username}</h3>
										<span className="author-role">
											{post.author.is_superuser ? "Admin" : "Author"}
										</span>
										<p className="user-desc">{post.author.bio}</p>
										<ul className="social-style-5">
											<li>
												<a target="_blank" href="https://www.facebook.com/">
													<i className="social-icon fab fa-facebook-f"></i>
												</a>
											</li>
											<li>
												<a target="_blank" href="https://twitter.com/">
													<i className="social-icon fab fa-twitter"></i>
												</a>
											</li>
											<li>
												<a target="_blank" href="https://www.pinterest.com/">
													<i className="fab fa-pinterest-p"></i>
												</a>
											</li>
											<li>
												<a target="_blank" href="https://www.instagram.com/">
													<i className="fab fa-instagram"></i>
												</a>
											</li>
										</ul>
									</div>
								</div>

								<div className="post-pagination-box mb--40">
									<div className="row gutter-30">
										<div className="col-lg-6">
											{post.previous_post ? (
												<div className="next-prev-wrap">
													<div className="item-icon">
														<Link href={post.previous_post.slug}>
															<i className="fas fa-chevron-left"></i>
															Previous Article
														</Link>
													</div>
													<div className="content">
														<h4 className="title">
															<Link href={post.previous_post.slug}>
																{post.previous_post.title}
															</Link>
														</h4>
														<span className="rt-meta">
															<i className="far fa-calendar-alt icon"></i>
															{formatDate(post.previous_post.created_at)}
														</span>
													</div>
												</div>
											) : null}
										</div>

										<div className="col-lg-6">
											{post.next_post ? (
												<div className="next-prev-wrap next-wrap">
													<div className="item-icon">
														<Link href={post.next_post.slug}>
															Next Article
															<i className="fas fa-chevron-right"></i>
														</Link>
													</div>
													<div className="content">
														<h4 className="title">
															<Link href={post.next_post.slug}>
																{post.next_post.title}
															</Link>
														</h4>
														<span className="rt-meta">
															<i className="far fa-calendar-alt icon"></i>
															{formatDate(post.next_post.created_at)}
														</span>
													</div>
												</div>
											) : null}
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default SinglePost;

export async function getStaticPaths() {
	const response = await fetch(`${baseUrl}`);
	const data = await response.json();

	const paths = data.map((post: Post) => {
		return {
			params: {
				post_slug: post.slug,
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

	const response = await fetch(`${baseUrl}/posts/${params?.post_slug}`);
	const data = await response.json();

	if (!data.slug) {
		return {
			notFound: true,
		};
	}

	return {
		props: {
			post: data,
		},
		revalidate: 10,
	};
}
