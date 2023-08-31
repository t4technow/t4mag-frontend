import React, { ReactNode } from "react";
import PropTypes from "prop-types";
import { useRouter } from "next/router";
import Sidebar from "@/components/admin/sidebar";
import Navbar from "@/components/admin/navbar";

import { Helmet } from "react-helmet";

type AdminLayoutProps = {
	children: ReactNode;
};

function AdminLayout({ children }: AdminLayoutProps) {
	const router = useRouter();
	const path = router.pathname.split("/");
	const pathLength = path.length;

	return (
		<>
			<Helmet>
				<link rel="stylesheet" href="/styles/admin.css" />
			</Helmet>
			<div className="admin-wrapper bg-dark py-4 px-5">
				<Navbar />
				<div className="admin-content-wrapper pt-4 d-flex">
					{pathLength < 3 && <Sidebar />}

					<main className="main">{children}</main>
				</div>
			</div>
		</>
	);
}

AdminLayout.propTypes = {
	children: PropTypes.node.isRequired,
};

export default AdminLayout;
