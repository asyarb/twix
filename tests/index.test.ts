import { test } from "uvu"
import assert from "uvu/assert"

import { twix } from "../src"

const button = twix({
	base: "rounded",
	variants: {
		color: {
			red: "text-red",
			blue: "text-blue",
		},
		size: {
			small: "p-5",
			large: "p-8",
		},
		uppercase: {
			true: "uppercase",
		},
	},
	defaultVariants: {
		color: "red",
		uppercase: false,
	},
	compoundVariants: [
		{
			color: "red",
			size: "small",
			className: "flex",
		},
		{
			color: "blue",
			size: "small",
			className: "grid",
		},
	],
})

test("Base styles", () => {
	const className = button({ size: "small" })

	assert.ok(className.includes("rounded"))
})

test("Default variants", () => {
	const className = button({ size: "small" })

	assert.ok(className.includes("text-red"))
})

test("Default variants w/ explicit undefined", () => {
	const className = button({ size: "small", color: undefined })

	assert.ok(className.includes("text-red"))
})

test("Specify variants", () => {
	const className = button({ color: "blue", size: "small" })

	assert.ok(className.includes("text-blue"))
	assert.ok(className.includes("p-5"))
})

test("Compound variants", () => {
	const className = button({ color: "red", size: "small" })

	assert.ok(className.includes("flex"))
})

test("Boolean variants", () => {
	const enabled = button({ size: "small", uppercase: true })
	const defaultDisabled = button({ size: "small" })
	const explicitDisabled = button({ size: "small", uppercase: false })

	assert.ok(enabled.includes("uppercase"))
	assert.ok(!defaultDisabled.includes("uppercase"))
	assert.ok(!explicitDisabled.includes("uppercase"))
})

test("Kitchen sink", () => {
	const className = button({ color: "blue", size: "small" })

	assert.ok(className.includes("text-blue"))
	assert.ok(className.includes("p-5"))
	assert.ok(className.includes("rounded"))
	assert.ok(className.includes("grid"))
})

test.run()
