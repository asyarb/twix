# twix 🍫

`twix` is a small utility for constructing classnames using a variant based api.
The API is largely copied from [stitches](https://stitches.dev/) but works with
just plain class strings instead.

## Installation

`twix` has a peer dependency on `clsx`, a small utility for conditionally
toggling class names.

```bash
npm i @asyarb/twix clsx
```

## Example Usage

```ts
const button = twix({
	base: "rounded",

	variants: {
		color: {
			purple: "bg-purple",
			blue: "bg-blue",
		},
		size: {
			small: "p-5",
			large: "p-8",
		},
	},

	compoundVariants: [
		{
			color: "purple",
			size: "small",
			class: "font-bold",
		},
	],

	defaultVariants: {
		size: "large",
	},
})

// => "rounded p-8 bg-purple"
button({ color: "purple" })

// => "rounded p-5 bg-purple font-bold"
button({ color: "purple", size: "small" })
```

## TypeScript

`twix` is written in TypeScript, and provides type-safety when defining and
using your variants.

```ts
import type { GetVariants } from "@asyarb/twix"

// ... Same button from above.

// => TypeScript error - Variants must be provided.
button()

// => TypeScript error - Must provide `color` since no defaultVariant exists.
button({ size: "small" })

// => Get variants as a type you can re-use elsewhere:
/**
 * { color: 'purple' | 'blue', size?: 'small' | 'large' }
 */
type ButtonVariants = GetVariants<typeof button>
```

### Additional classes

The function returned from `twix` can also append arbitrary classes if desired.

```ts
// ... Same button from above.

// => "rounded p-5 bg-purple font-bold arbitrary"
button({ color: "purple", size: "small", class: "arbitrary" })
```

### React usage

```tsx
// components/Button.tsx

import { GetVariants, twix } from "@asyarb/twix"

const button = twix({
	/** Same example from above... */
})

type ButtonProps = {
	/** Userland props... */
} & GetVariants<typeof button>

const Button = ({ color, size, ...props }: ButtonProps) => {
	return <button className={button({ color, size })} {...props} />
}
```
