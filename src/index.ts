import clsx from "clsx"

type Variant = Record<string, string>

type DefaultVariants<TVariants extends Record<string, Variant>> = {
	[K in keyof TVariants]?: keyof TVariants[K]
}

type ActiveVariants<
	TVariants extends Record<string, Variant>,
	TDefaultVariants extends DefaultVariants<TVariants>
> = {
	[K in keyof Omit<TVariants, keyof TDefaultVariants>]: keyof TVariants[K]
} & {
	[K in keyof TVariants]?: keyof TVariants[K]
}

type CompoundVariant<TVariants extends Record<string, Variant>> = {
	[K in keyof TVariants]?: keyof TVariants[K]
} & {
	className: string
}

interface TwvxOptions<
	TVariants extends Record<string, Variant>,
	TDefaultVariants extends DefaultVariants<TVariants>
> {
	base: string
	variants: TVariants
	defaultVariants: TDefaultVariants
	compoundVariants?: Array<CompoundVariant<TVariants>>
}

export function twvx<
	TVariants extends Record<string, Variant>,
	TDefaultVariants extends DefaultVariants<TVariants>
>({
	base,
	variants,
	defaultVariants,
	compoundVariants = [],
}: TwvxOptions<TVariants, TDefaultVariants>) {
	return (
		activeVariants: ActiveVariants<TVariants, TDefaultVariants>
	): string => {
		const resolvedVariants = {
			...defaultVariants,
			...activeVariants,
		}

		const classNames: string[] = []

		// For each resolved variant, resolve the className and add it to the list
		// of classes.
		for (const key in resolvedVariants) {
			const value = resolvedVariants[key] as string | undefined
			if (!value) continue

			classNames.push(variants[key][value])
		}

		// For each compound variant definition, check to if every key value pair is
		// active in our resolved variants. If it is, add the specified className to
		// the list of classes.
		for (const compoundV of compoundVariants) {
			let shouldIncludeCompoundVariant = true

			for (const [key, value] of Object.entries(compoundV)) {
				if (key === "className") continue

				// If any resolved variant doesn't match one of our specified
				// key-value pairs, we shouldn't include the compound class.
				if (resolvedVariants[key] !== value) {
					shouldIncludeCompoundVariant = false
				}
			}

			if (shouldIncludeCompoundVariant) {
				classNames.push(compoundV.className)
			}
		}

		return clsx(classNames, base)
	}
}

export type GetVariants<TVariantsFn extends (...args: any) => string> =
	NonNullable<Parameters<TVariantsFn>[0]>
