import React, { ReactNode } from "react";
import PropTypes from "prop-types";
import Head from "next/head";

type AdminLayoutProps = {
	children: ReactNode;
};

function AdminLayout({ children }: AdminLayoutProps) {
	return (
		<>
			<Head>
				{/* Add any global metadata, stylesheets, or scripts specific to the admin layout */}
			</Head>
			{/* Add your admin layout components */}
			<header>{/* Add your admin header content */}</header>
			<main>
				{/* Render the children components */}
				{children}
			</main>
			<footer>{/* Add your admin footer content */}</footer>
		</>
	);
}

AdminLayout.propTypes = {
	children: PropTypes.node.isRequired,
};

export default AdminLayout;
