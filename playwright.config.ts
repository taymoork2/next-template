import { defineConfig } from '@playwright/test';

export default defineConfig({
	// 'github' for GitHub Actions CI to generate annotations, plus a concise 'dot'
	// default 'list' when running locally
	reporter: process.env.CI ? 'github' : 'list',
	testMatch: 'playwright/**/*.spec.ts',
});
