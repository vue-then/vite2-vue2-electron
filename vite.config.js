const { createVuePlugin } = require("vite-plugin-vue2");
import alias from "@rollup/plugin-alias";
import resolve from "@rollup/plugin-node-resolve";
const path = require("path");
import { defineConfig } from 'vite'

const customResolver = resolve({
	extensions: [".mjs", ".js", ".jsx", ".json", ".sass", ".scss"],
});
const projectRootDir = path.resolve(__dirname);
export default defineConfig({
	server: {
		port: 3100,
	},
	proxy: {
		// string shorthand
		// '/foo': 'http://localhost:4567/foo',
		// with options
		'/api': {
			target: 'http://thenewxt.com', // test 
			//target: 'http://192.168.8.32:8888', // jack local
			changeOrigin: true,
			// rewrite: path => path.replace(/^\/api/, '')
		}
	},
	plugins: [
		createVuePlugin(),
		alias({
			entries: [{
					find: "@",
					replacement: path.resolve(projectRootDir, "src/render"),
					// OR place `customResolver` here. See explanation below.
				},
				{
					find: "tool",
					replacement: path.resolve(projectRootDir, "src/tool"),
					// OR place `customResolver` here. See explanation below.
				},
			],
			customResolver,
		}),
		resolve(),
	],
	build: {
		rollupOptions: {
			// https://rollupjs.org/guide/en/#big-list-of-options
		},
	},
})