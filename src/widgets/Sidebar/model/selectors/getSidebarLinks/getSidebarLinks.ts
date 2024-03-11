import { createSelector } from "@reduxjs/toolkit";
import { getUserAuthData } from "@/entities/User";
import { RoutePath } from "@/shared/config/routeConfig/routeConfig";
import MainIcon from "@/shared/assets/icons/main.svg";
import AboutIcon from "@/shared/assets/icons/about.svg";
import ProfileIcon from "@/shared/assets/icons/profile.svg";
import ArticleIcon from "@/shared/assets/icons/Article/atricle.svg";
import { SidebarItemsLinkType } from "../../types/sidebarLinksType";

export const getSidebarLinks = createSelector(
	getUserAuthData,
	(userData) => {
		const sidebarLinks: SidebarItemsLinkType[] = [
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
		]; 

		if(userData) {
			sidebarLinks.push(
				{
					path: RoutePath.profile + userData.id,
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
			);
		}

		return sidebarLinks;
	}
);

