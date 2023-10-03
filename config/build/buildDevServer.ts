import {BuildOptions} from "./types/config";
import type { Configuration as DevServerConfiguration } from 'webpack-dev-server'
export function  buildDevServer(option: BuildOptions): DevServerConfiguration {
    return {
        port: option.port,
        open: true,
        // open: true,
        historyApiFallback: true
    }
}