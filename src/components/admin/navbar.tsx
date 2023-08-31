import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = () => {
	const router = useRouter();
	const path = router.pathname.split("/");
	const pathLength = path.length;

	const user = {
		is_authenticated: true,
		profile_pic: { url: "/favicon.ico" },
		is_author: true,
		is_superuser: true,
		username: "murshid",
		last_name: "Mohammed Murshid",
	};

	return (
		<nav className={`navbar ${pathLength > 3 ? "fixed-top px-5" : ""}`}>
			<div className="start d-flex align-items-center">
				{pathLength < 3 ? (
					<div className="close">
						<img src="{% static 'icons/close.svg' %}" alt="" className="icon" />
					</div>
				) : null}

				<Link href="/admin/" as="/admin/posts/">
					<h1 className="title">Dashboard</h1>
				</Link>
			</div>

			{pathLength < 3 ? (
				<div className="search d-flex align-items-center">
					<input type="search" name="search" id="search" placeholder="Search" />
					<div className="icon">
						<img src="/icons/search.svg" alt="" className="icon" />
					</div>
				</div>
			) : (
				<div className="page-title d-flex align-items-center">
					Update Post: Post Title
				</div>
			)}

			<div className="end d-flex align-items-center">
				<div className="user_image">
					<img src={`${user.profile_pic.url} : 'icons/Moon.svg'`} />
				</div>
				<div className="user">
					<div className="username">
						{user.last_name ? user.last_name : user.username}
					</div>
					<div className="role">Admin</div>
				</div>

				<div className="logout">
					<Link href="user/logout/" as="user/logout/">
						<img src="icons/logout.svg" alt="" className="icon" />
					</Link>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
