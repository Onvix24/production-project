import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "app/providers/ThemeProvider";
import "app/styles/index.scss";
import "shared/config/i18n/i18n";
import { ErrorBoundary } from "app/providers/ErrorBoundary";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<StrictMode>
		<BrowserRouter>
			<ErrorBoundary>
				<ThemeProvider>
					<App/>
				</ThemeProvider>
			</ErrorBoundary>
		</BrowserRouter>
	</StrictMode>
);

