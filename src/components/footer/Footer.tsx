import Link from "next/link";
import React from "react";
import CircularPost from "../post/CircularPost";
import { Category, Post } from "@/utils/types";
import Image from "next/image";

type Props = {
	posts: Post[];
	categories: Category[];
};

const Footer = ({ posts, categories }: Props) => {
	return (
		<footer className="footer">
			<div className="footer-top footer-style-1">
				<div className="container">
					<div className="row gutter-30">
						<div
							className="col-xl-3 col-md-6 wow fadeInUp"
							data-wow-delay="200ms"
							data-wow-duration="800ms"
						>
							<div className="footer-widget">
								<div className="logo footer-logo">
									<Link className="dark-logo" href="/">
										<Image
											className="element"
											width="162"
											height="52"
											src="/images/logo/logo-light.png"
											alt="t4technow logo"
										/>
									</Link>
								</div>
								<p className="text">
									Tech blog covering latest news, reviews and tutorials related
									to technology.
								</p>
								<ul className="footer-social gutter-15">
									<li className="social-item">
										<Link
											href="https://www.facebook.com/"
											className="social-link fb"
											target="_blank"
										>
											<i className="fab fa-facebook-f"></i>
										</Link>
									</li>
									<li className="social-item">
										<Link
											href="https://twitter.com/"
											className="social-link tw"
											target="_blank"
										>
											<i className="fab fa-twitter"></i>
										</Link>
									</li>
									<li className="social-item">
										<Link
											href="https://vimeo.com/"
											className="social-link vm"
											target="_blank"
										>
											<i className="fab fa-vimeo-v"></i>
										</Link>
									</li>
									<li className="social-item">
										<Link
											href="https://www.pinterest.com/"
											className="social-link pn"
											target="_blank"
										>
											<i className="fab fa-pinterest-p"></i>
										</Link>
									</li>
									<li className="social-item">
										<Link
											href="https://www.whatsapp.com/"
											className="social-link wh"
											target="_blank"
										>
											<i className="fab fa-whatsapp"></i>
										</Link>
									</li>
								</ul>
							</div>
						</div>

						<div
							className="col-xl-3 col-md-6 wow fadeInUp"
							data-wow-delay="400ms"
							data-wow-duration="800ms"
						>
							<div className="footer-widget">
								<h3 className="footer-widget-title">Recent Posts</h3>

								<div className="footer-post-list">
									{posts &&
										posts?.map((post) => (
											<div className="item mb--30" key={post.id}>
												<CircularPost post={post} light={true} />
											</div>
										))}
								</div>
							</div>
						</div>

						<div
							className="col-xl-3 col-md-6 wow fadeInUp d-flex justify-content-xl-center justify-content-start"
							data-wow-delay="400ms"
							data-wow-duration="800ms"
						>
							<div className="footer-widget">
								<h3 className="footer-widget-title">Categories</h3>
								<ul className="widget-list cat-list">
									{categories &&
										categories?.map((category) => (
											<li className="widget-list-item" key={category.id}>
												<Link
													href={`category/${category.slug}`}
													className="widget-list-link"
												>
													{category.title}
												</Link>
											</li>
										))}
								</ul>
							</div>
						</div>

						<div
							className="col-xl-3 col-md-6 wow fadeInUp"
							data-wow-delay="600ms"
							data-wow-duration="800ms"
						>
							<div className="footer-widget">
								<h3 className="footer-widget-title">Instagram</h3>
								<div className="insta-gallery">
									<div className="galleryitem">
										<Link href="https://www.instagram.com/">
											<Image
												src="/images/banner/banner_4.jpg"
												width="100"
												height="90"
												alt="gallery1"
											/>
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="footer-bottom">
				<div className="container">
					<div className="footer-bottom-area d-flex align-items-center justify-content-center">
						<p
							className="copyright-text mb-0 wow fadeInUp"
							data-wow-delay="200ms"
							data-wow-duration="800ms"
						>
							<span className="currentYear"></span> © T4Mag all right reserved
							by
							<Link href="https://t4technow.com/">T4Technow</Link>
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
