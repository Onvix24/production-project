import cls from "./ArticleListItem.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { memo } from "react";
import { Article, ArticleBlockType, ArticleListView, ArticleTextBlock } from "../../../model/types/Article";
import { Icon } from "shared/ui/Icon/Icon";
import WatcherIcon from "shared/assets/icons/Article/eye.svg";
import { Avatar } from "shared/ui/Avatar/Avatar";
import { Card } from "shared/ui/Card/Card";
import { AppLink } from "shared/ui/AppLink/AppLink";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { ArticleTextBlockComponent } from "../../ArticleTextBlockComponent";
import { text } from "stream/consumers";

interface ArticleListItemProps {
	className?: string,
	article: Article,
	view: ArticleListView
}

export const ArticleListItem = memo(({ className, article, view } : ArticleListItemProps) => {
	 
	if(view === ArticleListView.COLUMN) {
	
		let textBlock = article.blocks.find(
			(block) => block.type === ArticleBlockType.TEXT
		) as ArticleTextBlock;

		return (
			<div className={classNames(cls.ArticleListItem, {}, [className, cls.ArticleListItem_column])}>
				<Card className={cls.ArticleListItem__card}>
					<div className={cls.ArticleListItem__header}>
						<Avatar size={32} src={article.user.avatar}/>
						<span className={cls.ArticleListItem__username}>{article.user.username}</span>
						<span>{article.createdAt}</span>
					</div>
					<div className={cls.ArticleListItem__bottom}>
						<h3 className={cls.ArticleListItem__title}>{article.title}</h3>
						<p className={cls.ArticleListItem__subtitle}>{article.subtitle}</p>
						<img src={article.img} alt={article.title} />
						{textBlock && (
							<ArticleTextBlockComponent block={textBlock}/>
						)}
						<div className={cls.ArticleListItem__details}>
							<Button 
								className={cls.ArticleListItem__readMore}
								theme={ButtonTheme.OUTLINE}
							>
								Читати далі...
							</Button>
							<div className={cls.ArticleListItem__wathers}>
								<Icon className={cls.ArticleListItem__icon} Svg={WatcherIcon}/>
								<span className={cls.ArticleListItem__views}>{article.views}</span>
							</div>
						</div>
					</div>
				</Card>
			</div>
		);
	}

	return (
		<div className={classNames(cls.ArticleListItem, {}, [className, cls.ArticleListItem_grid])}>
			<Card>
				<img className={cls.ArticleListItem__image} src={article.img} alt={article.title} />
				<div className={cls.ArticleListItem__contentWrapper}>
					<h3 className={cls.ArticleListItem__title}>
						Как сделать робота на питоне без использования кода в питон джава с+++
					</h3>
					<div className={cls.ArticleListItem__details}>
						<span className={cls.ArticleListItem__createdAt}>{article.createdAt}</span>
						<div className={cls.ArticleListItem__wathers}>
							<Icon className={cls.ArticleListItem__icon} Svg={WatcherIcon}/>
							<span className={cls.ArticleListItem__views}>{article.views}</span>
						</div>
					</div>
					<div className={cls.ArticleListItem__userWrapper}>
						<Avatar size={32} src={article.user.avatar} alt="a"/>
						<div className={cls.ArticleListItem__creator}>{article.user.username}</div>
					</div>
				</div>
			</Card>
		</div>
	);
});