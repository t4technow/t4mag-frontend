import Link from "next/link";

const Custom404 = () => {
	return (
		<div>
			<h1>404 - Page Not Found</h1>
			<p>The page you are looking for does not exist.</p>
			<p>
				Go back to the{" "}
				<Link href="/">
					<a>Homepage</a>
				</Link>
			</p>
		</div>
	);
};

export default Custom404;
