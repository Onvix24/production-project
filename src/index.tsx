import ReactDOM from "react-dom/client";
import App from "./app/App";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "app/providers/ThemeProvider";
import { ErrorBoundary } from "app/providers/ErrorBoundary";
import { StoreProvider } from "app/providers/StoreProvider";

import "shared/config/i18n/i18n";
import "scss/layout/index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<StoreProvider>
		<BrowserRouter>
			<ErrorBoundary>
				<ThemeProvider>
					<App/>
				</ThemeProvider>
			</ErrorBoundary>
		</BrowserRouter>
	</StoreProvider>
);

