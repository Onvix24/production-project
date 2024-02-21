import cls from "./ChangeArticleListView.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
import { memo } from "react";
import ColumnView from "@/shared/assets/icons/columnView.svg";
import GridView from "@/shared/assets/icons/gridView.svg";
import { ArticleListView } from "@/entities/Article";
import { Button, ButtonTheme } from "@/shared/ui/Button/Button";
import { Icon } from "@/shared/ui/Icon/Icon";

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
		icon: GridView
	},
	{
		view: ArticleListView.COLUMN,
		icon: ColumnView
	}
];

export const ChangeArticleListView = memo(({ className, view, onViewClick } : ChangeArticleListViewProps) => {
	
	const onClickHandler = (newView: ArticleListView) => () => {
		onViewClick?.(newView);
	};

	return (
		<div className={classNames(cls.ChangeArticleListView, {}, [className])}>
			{
				buttonViewTypes.map(
					buttonViewType => (
						<Button 
							key={buttonViewType.view}
							theme={ButtonTheme.CLEAR}
							onClick={onClickHandler(buttonViewType.view)}
						>
							<Icon Svg={buttonViewType.icon}/>
						</Button>
					)
				)
			}
		</div>
	);
});