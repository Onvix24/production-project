import { Page } from "@/shared/ui/Page/Page";
import { useTranslation } from "react-i18next";

const AboutPage = () => {

	const { t } = useTranslation("about");

	return (
		<Page>
			{t("Про сайт")}
		</Page>
	);
};

export default AboutPage;