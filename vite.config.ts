/// <reference types="vitest" />
import path from "path"
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
		},
	},
	test: {
		environment: 'jsdom',
		globals: true,
		include: ['./src/__tests__/*.test.tsx'],
		setupFiles: ['./config/test/setup.ts'],
	}
});
