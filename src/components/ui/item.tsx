import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import { Separator } from "@/components/ui/separator"

/**
 * Renders a container for grouping item elements.
 *
 * @returns A div element with role="list", data-slot="item-group", and layout classes for a vertical item group.
 */
function ItemGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      role="list"
      data-slot="item-group"
      className={cn("group/item-group flex flex-col", className)}
      {...props}
    />
  )
}

/**
 * Renders a horizontal separator configured for use between items in an item list.
 *
 * @returns A `Separator` element with `data-slot="item-separator"` and horizontal orientation
 */
function ItemSeparator({
  className,
  ...props
}: React.ComponentProps<typeof Separator>) {
  return (
    <Separator
      data-slot="item-separator"
      orientation="horizontal"
      className={cn("my-0", className)}
      {...props}
    />
  )
}

const itemVariants = cva(
  "group/item flex items-center border border-transparent text-sm rounded-md transition-colors [a]:hover:bg-accent/50 [a]:transition-colors duration-100 flex-wrap outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        outline: "border-border",
        muted: "bg-muted/50",
      },
      size: {
        default: "p-4 gap-4 ",
        sm: "py-3 px-4 gap-2.5",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

/**
 * Render an item container with CVA-driven styling and optional polymorphic root.
 *
 * Renders a styled element with data-slot="item", variant and size data attributes, and classes produced by `itemVariants`.
 *
 * @param className - Additional class names applied to the root element
 * @param variant - Visual variant; allowed values: `"default"`, `"outline"`, `"muted"`
 * @param size - Size variant; allowed values: `"default"`, `"sm"`
 * @param asChild - If `true`, use Radix `Slot` as the root to allow a custom element; otherwise use a `div`
 * @param props - Additional props forwarded to the rendered root element
 * @returns A JSX element representing the styled item container
 */
function Item({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"div"> &
  VariantProps<typeof itemVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "div"
  return (
    <Comp
      data-slot="item"
      data-variant={variant}
      data-size={size}
      className={cn(itemVariants({ variant, size, className }))}
      {...props}
    />
  )
}

const itemMediaVariants = cva(
  "flex shrink-0 items-center justify-center gap-2 group-has-[[data-slot=item-description]]/item:self-start [&_svg]:pointer-events-none group-has-[[data-slot=item-description]]/item:translate-y-0.5",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        icon: "size-8 border rounded-sm bg-muted [&_svg:not([class*='size-'])]:size-4",
        image:
          "size-10 rounded-sm overflow-hidden [&_img]:size-full [&_img]:object-cover",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

/**
 * Renders the item media container used to display an icon, image, or neutral media region.
 *
 * @param variant - Visual variant for the media: `"default"` (neutral), `"icon"` (square icon style), or `"image"` (image container with cover sizing)
 * @returns A div element with `data-slot="item-media"` and styling determined by `variant`
 */
function ItemMedia({
  className,
  variant = "default",
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof itemMediaVariants>) {
  return (
    <div
      data-slot="item-media"
      data-variant={variant}
      className={cn(itemMediaVariants({ variant, className }))}
      {...props}
    />
  )
}

/**
 * Renders the item content container used to host an item's main content and control layout and spacing.
 *
 * @param props - Standard div props. `className` is merged with the component's layout classes.
 * @returns The DOM element that serves as the item's content area.
 */
function ItemContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="item-content"
      className={cn(
        "flex flex-1 flex-col gap-1 [&+[data-slot=item-content]]:flex-none",
        className
      )}
      {...props}
    />
  )
}

/**
 * Renders the item title slot used to display a title within an Item.
 *
 * @returns The title container element with `data-slot="item-title"` and the component's title styling applied.
 */
function ItemTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="item-title"
      className={cn(
        "flex w-fit items-center gap-2 text-sm leading-snug font-medium",
        className
      )}
      {...props}
    />
  )
}

/**
 * Renders the item description paragraph with consistent typography, two-line truncation, and anchor link styling.
 *
 * @param className - Optional additional CSS classes to merge with the component's default classes
 * @param props - Additional props spread onto the underlying `<p>` element
 * @returns A `<p>` element configured as an item description (data-slot="item-description")
 */
function ItemDescription({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <p
      data-slot="item-description"
      className={cn(
        "text-muted-foreground line-clamp-2 text-sm leading-normal font-normal text-balance",
        "[&>a:hover]:text-primary [&>a]:underline [&>a]:underline-offset-4",
        className
      )}
      {...props}
    />
  )
}

/**
 * Renders a horizontal container for action controls associated with an item.
 *
 * @param className - Additional CSS classes to apply to the container
 * @returns A `div` element with `data-slot="item-actions"`, base classes `flex items-center gap-2`, and any provided `className`
 */
function ItemActions({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="item-actions"
      className={cn("flex items-center gap-2", className)}
      {...props}
    />
  )
}

/**
 * Renders a header region for an item with horizontal layout, spacing, and alignment.
 *
 * The element is a div with data-slot="item-header" and default classes that set
 * flex layout, full basis, center alignment, space-between justification, and gap spacing.
 *
 * @returns A div element configured as an item header (includes `data-slot="item-header"`).
 */
function ItemHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="item-header"
      className={cn(
        "flex basis-full items-center justify-between gap-2",
        className
      )}
      {...props}
    />
  )
}

/**
 * Renders the footer region for an item, providing horizontal spacing and alignment for actions or metadata.
 *
 * @param className - Additional CSS class names to apply to the footer container
 * @param props - Additional `div` props are spread onto the rendered element
 * @returns The rendered item footer element
 */
function ItemFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="item-footer"
      className={cn(
        "flex basis-full items-center justify-between gap-2",
        className
      )}
      {...props}
    />
  )
}

export {
  Item,
  ItemMedia,
  ItemContent,
  ItemActions,
  ItemGroup,
  ItemSeparator,
  ItemTitle,
  ItemDescription,
  ItemHeader,
  ItemFooter,
}