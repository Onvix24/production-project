import { Suspense, useEffect } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import { useTheme } from "@/app/providers/ThemeProvider";
import { AppRouter } from "@/app/providers/router";
import { Navbar } from "@/widgets/Navbar";
import { Sidebar } from "@/widgets/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { getUserMounted, userActions } from "@/entities/User";
import "./App.scss";

const App = () => {
	const { theme } = useTheme();
	const dispatch = useDispatch();

	const mounted = useSelector(getUserMounted);

	useEffect(() => {
		dispatch(userActions.initAuthData());
	}, [dispatch]);

	return (
		<div className={classNames("app", {}, [theme])}>
			<Suspense fallback="">
				<Navbar/>
				<div className="content-page">
					<Sidebar/>
					{mounted && <AppRouter />}
				</div>
			</Suspense>
		</div>
	);
};

export default App;