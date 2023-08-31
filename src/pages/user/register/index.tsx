import UserLayout from "@/layout/userLayout";
import Link from "next/link";
import React, { ReactElement } from "react";

const RegisterPage = () => {
	return (
		<div className="row justify-content-center py-3">
			<div className="col-6 my-5 px-5">
				<div
					className="subscribe-box-style-1 p-5 py-5"
					data-bg-image="media/elements/element_5.png"
				>
					<div className="subscribe-content login-form">
						<h3 className="title pb-3">
							Sign up to enjoy a tailored Experience
						</h3>

						<form
							method="post"
							className="rt-contact-form subscribe-form rt-form pt-5 px-3"
						>
							<div className="row col-12 m-0">
								<div className="col-6 ps-0">
									<div className="rt-form-group mb-4">
										<input
											type="text"
											id="first_name"
											className="form-control rt-form-control text-start"
											placeholder="First Name *"
											name="first_name"
											required
										/>
									</div>
								</div>

								<div className="col-6 pe-0">
									<div className="rt-form-group mb-4">
										<input
											type="text"
											id="last_name"
											className="form-control rt-form-control text-start"
											placeholder="Last Name *"
											name="last_name"
											required
										/>
									</div>
								</div>
							</div>

							<div className="rt-form-group mb-4">
								<input
									type="text"
									className="form-control rt-form-control text-start"
									placeholder="username *"
									name="username"
									id="username"
									required
								/>
							</div>
							<div className="rt-form-group mb-4 invalid">
								<input
									type="email"
									className="form-control rt-form-control text-start"
									placeholder="email *"
									name="email"
									id="email"
									required
								/>
							</div>

							<div className="row col-12 m-0">
								<div className="col-6 ps-0">
									<div className="rt-form-group mb-4">
										<input
											type="password"
											className="form-control rt-form-control text-start"
											placeholder="Password *"
											name="password"
											id="password"
											required
										/>
									</div>
								</div>

								<div className="col-6 pe-0">
									<div className="rt-form-group mb-4">
										<input
											type="password"
											className="form-control rt-form-control text-start"
											placeholder="Confirm Password *"
											name="password2"
											id="password2"
											required
										/>
									</div>
								</div>
							</div>

							<button type="submit" className="rt-submit-btn mt-3">
								Sign Up
							</button>
							<div className="form-response"></div>
							<div className="small-text pt-3">
								Already have an account?{" "}
								<Link href="/user/login" as="/user/login">
									Sign In
								</Link>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

RegisterPage.getLayout = function getLayout(page: ReactElement) {
	return <UserLayout>{page}</UserLayout>;
};

export default RegisterPage;
