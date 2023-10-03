import {ResolveOptions} from "webpack";
import {BuildOptions} from "./types/config";
import {nodeModules} from "ts-loader/dist/constants";

export function buildResolvers(options: BuildOptions) : ResolveOptions {

    return {
        extensions: ['.tsx', '.ts', '.js'],
        preferAbsolute: true,
        modules: [options.paths.src, 'node_modules'],
        mainFiles: ['index'],
        alias: {}
    }
}