import { Component, ErrorInfo, ReactNode, Suspense } from "react";
import { ErrorPage } from "widgets/ErrorPage";
// import { withTranslation } from "react-i18next";

interface ErrorBoundryProps {
  children: ReactNode;
}

interface ErrorBoundryState {
  hasError: boolean;
}
class ErrorBoundary extends Component<ErrorBoundryProps, ErrorBoundryState> {
	constructor(props: ErrorBoundryProps) {
		super(props);
		this.state = { hasError: false };
	}

	static getDerivedStateFromError(error: Error) {
		return { hasError: true };
	}

	componentDidCatch(error: Error, errorInfo: ErrorInfo) {
		console.log(error, errorInfo);
	}

	render() {
		const { hasError } = this.state;
		const { children } = this.props;

		if (hasError) {
			return (
				<Suspense fallback="">
					<ErrorPage/>
				</Suspense>
			);
		}

		return children;
	}
}

export default ErrorBoundary;
// export default withTranslation()(ErrorBoundary);