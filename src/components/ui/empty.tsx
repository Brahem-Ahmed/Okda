import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

/**
 * Renders a centered empty-state container element with default layout and styling.
 *
 * The resulting `div` includes a `data-slot="empty"` attribute, composes a set of utility
 * classes with any provided `className`, and forwards all other props to the element.
 *
 * @returns A `div` element that serves as the empty-state container
 */
function Empty({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="empty"
      className={cn(
        "flex min-w-0 flex-1 flex-col items-center justify-center gap-6 rounded-lg border-dashed p-6 text-center text-balance md:p-12",
        className
      )}
      {...props}
    />
  )
}

/**
 * Renders a centered header container used in empty-state layouts.
 *
 * The returned element is a `div` with `data-slot="empty-header"`, default centered/header layout classes, any additional `className` merged in, and all other props forwarded.
 *
 * @returns A `div` element configured for use as an empty-state header
 */
function EmptyHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="empty-header"
      className={cn(
        "flex max-w-sm flex-col items-center gap-2 text-center",
        className
      )}
      {...props}
    />
  )
}

const emptyMediaVariants = cva(
  "flex shrink-0 items-center justify-center mb-2 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        icon: "bg-muted text-foreground flex size-10 shrink-0 items-center justify-center rounded-lg [&_svg:not([class*='size-'])]:size-6",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

/**
 * Renders the media/icon container for an empty state.
 *
 * @param className - Additional CSS classes to merge with the component's computed classes
 * @param variant - Visual variant for the media container; `"default"` (transparent) or `"icon"` (muted background and sizing). Defaults to `"default"`.
 * @returns A `div` element used as the empty-state media slot with the selected variant and merged classes
 */
function EmptyMedia({
  className,
  variant = "default",
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof emptyMediaVariants>) {
  return (
    <div
      data-slot="empty-icon"
      data-variant={variant}
      className={cn(emptyMediaVariants({ variant, className }))}
      {...props}
    />
  )
}

/**
 * Renders the title element for an empty state.
 *
 * @returns A `div` element with `data-slot="empty-title"` styled as the empty state's title (`text-lg font-medium tracking-tight`), with any additional `className` and props forwarded.
 */
function EmptyTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="empty-title"
      className={cn("text-lg font-medium tracking-tight", className)}
      {...props}
    />
  )
}

/**
 * Renders the description area for an empty state.
 *
 * Applies muted text and link styles and forwards all native paragraph props.
 *
 * @returns A div element used as the empty-state description slot
 */
function EmptyDescription({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <div
      data-slot="empty-description"
      className={cn(
        "text-muted-foreground [&>a:hover]:text-primary text-sm/relaxed [&>a]:underline [&>a]:underline-offset-4",
        className
      )}
      {...props}
    />
  )
}

/**
 * Main content container for an empty state layout.
 *
 * Forwards remaining div props to the root element and merges `className` with the component's default layout and text classes.
 *
 * @returns A div element with `data-slot="empty-content"` used to structure centered, vertical empty-state content.
 */
function EmptyContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="empty-content"
      className={cn(
        "flex w-full max-w-sm min-w-0 flex-col items-center gap-4 text-sm text-balance",
        className
      )}
      {...props}
    />
  )
}

export {
  Empty,
  EmptyHeader,
  EmptyTitle,
  EmptyDescription,
  EmptyContent,
  EmptyMedia,
}