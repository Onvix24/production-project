import { HTMLAttributeAnchorTarget, memo } from "react";
import WatcherIcon from "@/shared/assets/icons/Article/eye.svg";
import { classNames } from "@/shared/lib/classNames/classNames";
import { RoutePath } from "@/shared/routes/routesPath";
import { AppLink } from "@/shared/ui/AppLink/AppLink";
import { Avatar } from "@/shared/ui/Avatar/Avatar";
import { Button, ButtonTheme } from "@/shared/ui/Button/Button";
import { Card } from "@/shared/ui/Card/Card";
import { Icon } from "@/shared/ui/Icon/Icon";
import {
	Article, ArticleBlockType, ArticleListView, ArticleTextBlock,
} from "../../../model/types/Article";
import { ArticleTextBlockComponent } from "../../ArticleTextBlockComponent";
import cls from "./ArticleListItem.module.scss";

interface ArticleListItemProps {
	className?: string,
	article: Article,
	view: ArticleListView,
	target?: HTMLAttributeAnchorTarget;
}

export const ArticleListItem = memo(({
	className, article, view, target,
} : ArticleListItemProps) => {
	// const navigate = useNavigate();

	// const onOpenArticle = useCallback(() => {
	// 	navigate(RoutePath.article_details + article.id);
	// }, [article.id, navigate]);

	if (view === ArticleListView.COLUMN) {
		const textBlock = article.blocks.find(
			(block) => block.type === ArticleBlockType.TEXT,
		) as ArticleTextBlock;

		return (
			<div className={classNames(cls.ArticleListItem, {}, [className, cls.ArticleListItem_column, cls[view]])}>
				<Card className={cls.ArticleListItem__card}>
					<div className={cls.ArticleListItem__header}>
						<Avatar size={32} src={article.user.avatar} />
						<span className={cls.ArticleListItem__username}>{article.user.username}</span>
						<span>{article.createdAt}</span>
					</div>
					<div className={cls.ArticleListItem__bottom}>
						<h3 className={cls.ArticleListItem__title}>{article.title}</h3>
						<p className={cls.ArticleListItem__subtitle}>{article.subtitle}</p>
						<img src={article.img} alt={article.title} />
						{textBlock && (
							<ArticleTextBlockComponent block={textBlock} />
						)}
						<div className={cls.ArticleListItem__details}>
							<AppLink
								to={RoutePath.article_details + article.id}
								target={target}
							>
								<Button
									className={cls.ArticleListItem__readMore}
									theme={ButtonTheme.OUTLINE}
									// onClick={onOpenArticle}
								>
									Читати далі...
								</Button>
							</AppLink>
							<div className={cls.ArticleListItem__wathers}>
								<Icon className={cls.ArticleListItem__icon} Svg={WatcherIcon} />
								<span className={cls.ArticleListItem__views}>{article.views}</span>
							</div>
						</div>
					</div>
				</Card>
			</div>
		);
	}

	return (
		<AppLink
			className={classNames(cls.ArticleListItem, {}, [className, cls.ArticleListItem_grid, cls[view]])}
			to={RoutePath.article_details + article.id}
			target={target}
		>
			<Card>
				<img className={cls.ArticleListItem__image} src={article.img} alt={article.title} />
				<div className={cls.ArticleListItem__contentWrapper}>
					<h3 className={cls.ArticleListItem__title}>
						{article.title}
					</h3>
					<div className={cls.ArticleListItem__details}>
						<span className={cls.ArticleListItem__createdAt}>{article.createdAt}</span>
						<div className={cls.ArticleListItem__wathers}>
							<Icon className={cls.ArticleListItem__icon} Svg={WatcherIcon} />
							<span className={cls.ArticleListItem__views}>{article.views}</span>
						</div>
					</div>
					<div className={cls.ArticleListItem__userWrapper}>
						<Avatar size={32} src={article.user.avatar} alt="a" />
						<div className={cls.ArticleListItem__creator}>{article.user.username}</div>
					</div>
				</div>
			</Card>
		</AppLink>
	);
});
