import Link from "next/link";

const Paginator = () => {
	return (
		<nav className="rt-pagination-area gap-top-90">
			<ul className="pagination rt-pagination justify-content-center">
				<li className="page-item prev">
					<Link className="page-link" href="#">
						<i className="fas fa-angle-double-left"></i>
					</Link>
				</li>
				<li className="page-item active" aria-current="page">
					<span className="page-link">1</span>
				</li>

				<li className="page-item next">
					<Link className="page-link" href="#">
						<i className="fas fa-angle-double-right"></i>
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Paginator;
