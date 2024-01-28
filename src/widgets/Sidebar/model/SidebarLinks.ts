import { RoutePath } from "shared/config/routeConfig/routeConfig";
import MainIcon from "shared/assets/icons/main.svg";
import AboutIcon from "shared/assets/icons/about.svg";
import ProfileIcon from "shared/assets/icons/profile.svg";
import ArticleIcon from "shared/assets/icons/Article/atricle.svg";

export interface SidebarItemsLinkType {
    path: string;
    Icon: React.VFC<React.SVGProps<SVGSVGElement>>;
    text: string;
	authOnly?: boolean;
}

export const SidebarLinks: SidebarItemsLinkType[] = [
	{
		path: RoutePath.main,
		Icon: MainIcon,
		text: "Головна"
	},
	{
		path: RoutePath.about,
		Icon: AboutIcon,
		text: "Про сайт"
	},
	{
		path: RoutePath.profile,
		Icon: ProfileIcon,
		text: "Профіль",
		authOnly: true 
	},
	{
		path: RoutePath.articles,
		Icon: ArticleIcon,
		text: "Статті",
		authOnly: true 
	}
]; 