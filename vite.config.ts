/// <reference types="vitest" />

import { defineConfig } from 'vite'

export default defineConfig({
	test: { watchExclude: ['node_modules'] },
})
