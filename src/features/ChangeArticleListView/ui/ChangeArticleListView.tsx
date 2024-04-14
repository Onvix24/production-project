import { memo } from "react";
import { ArticleListView } from "@/entities/Article";
import ColumnView from "@/shared/assets/icons/columnView.svg";
import GridView from "@/shared/assets/icons/gridView.svg";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Button, ButtonTheme } from "@/shared/ui/Button/Button";
import { Icon } from "@/shared/ui/Icon/Icon";
import cls from "./ChangeArticleListView.module.scss";

interface ChangeArticleListViewProps {
	className?: string,
	view: ArticleListView,
	onViewClick?: (view: ArticleListView) => void;
}

interface ButtonViewTypes {
	view: ArticleListView;
	icon: React.VFC<React.SVGProps<SVGSVGElement>>;
}

const buttonViewTypes: ButtonViewTypes[] = [
	{
		view: ArticleListView.GRID,
		icon: GridView,
	},
	{
		view: ArticleListView.COLUMN,
		icon: ColumnView,
	},
];

export const ChangeArticleListView = memo(({ className, view, onViewClick } : ChangeArticleListViewProps) => {
	const onClickHandler = (newView: ArticleListView) => () => {
		onViewClick?.(newView);
	};

	return (
		<div className={classNames(cls.ChangeArticleListView, {}, [className])}>
			{
				buttonViewTypes.map(
					(buttonViewType) => (
						<Button
							key={buttonViewType.view}
							theme={ButtonTheme.CLEAR}
							onClick={onClickHandler(buttonViewType.view)}
						>
							<Icon
								Svg={buttonViewType.icon}
								className={
									classNames(cls.ChangeArticleListView__icon, { [cls.ChangeArticleListView__icon_selected]: buttonViewType.view === view })
								}
							/>
						</Button>
					),
				)
			}
		</div>
	);
});
