import UpperSideBar from "../sections/sideBarUpper";
import { SidebarData } from "@/utils/types";
import CategoryList from "./hotCategories";
import TagList from "./tags";

type Props = {
	sidebarData: SidebarData;
};

const Sidebar = ({ sidebarData }: Props) => {
	const { recentPosts, popularPosts, categoryList, tagList } = sidebarData;
	return (
		<div className="col-xl-3 col-lg-8 mx-auto sticky-coloum-item">
			<div className="rt-sidebar sticky-wrap">
				<UpperSideBar posts={recentPosts} />
				<CategoryList categoryList={categoryList} />
				<TagList tagList={tagList} />
			</div>
		</div>
	);
};

export default Sidebar;
