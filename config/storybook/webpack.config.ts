import path from "path";
import { Configuration, DefinePlugin, RuleSetRule } from "webpack";
import { BuildPaths } from "../config/build/types/config";
import { buildCssLoader } from "../config/build/loaders/buildCssLoaders/buildCssLoaders";

export default ({ config }: {config: Configuration}) => {
	const paths: BuildPaths = {
		src: path.resolve(__dirname, "..", "..", "src")
	};

	config.resolve.modules.push(paths.src);
	config.resolve.extensions.push(".ts", ".tsx");
	config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
		if (/svg/.test(rule.test as string)) {
			return { ...rule, exclude: /\.svg$/i };
		}

		return rule;
	});

	config.module.rules.push({
		test: /\.svg$/,
		use: ["@svgr/webpack"],
	});
	config.module.rules.push(buildCssLoader(true));

	config.plugins.push(new DefinePlugin({
		// __IS_DEV__: true
	}));

	return config;
};