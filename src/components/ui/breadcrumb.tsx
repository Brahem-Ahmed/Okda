import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { ChevronRight, MoreHorizontal } from "lucide-react"

import { cn } from "@/lib/utils"

/**
 * Renders a breadcrumb navigation container.
 *
 * @param props - Props to spread onto the underlying `<nav>` element.
 * @returns A `<nav>` element with `aria-label="breadcrumb"` and `data-slot="breadcrumb"`.
 */
function Breadcrumb({ ...props }: React.ComponentProps<"nav">) {
  return <nav aria-label="breadcrumb" data-slot="breadcrumb" {...props} />
}

/**
 * Renders an ordered list element configured as the breadcrumb list.
 *
 * The rendered `<ol>` has `data-slot="breadcrumb-list"`, a composed default `className`
 * for breadcrumb styling, and receives any additional props passed to the component.
 *
 * @returns The `<ol>` element used to contain breadcrumb items.
 */
function BreadcrumbList({ className, ...props }: React.ComponentProps<"ol">) {
  return (
    <ol
      data-slot="breadcrumb-list"
      className={cn(
        "text-muted-foreground flex flex-wrap items-center gap-1.5 text-sm break-words sm:gap-2.5",
        className
      )}
      {...props}
    />
  )
}

/**
 * Renders a breadcrumb list item element with data-slot="breadcrumb-item" and merged classes.
 *
 * @param className - Additional CSS class names appended to the default inline-flex styling and spacing.
 * @returns The <li> element representing a breadcrumb item.
 */
function BreadcrumbItem({ className, ...props }: React.ComponentProps<"li">) {
  return (
    <li
      data-slot="breadcrumb-item"
      className={cn("inline-flex items-center gap-1.5", className)}
      {...props}
    />
  )
}

/**
 * Renders a breadcrumb link that uses an anchor by default or a provided child component when `asChild` is true.
 *
 * @param asChild - If `true`, render the provided child component instead of an `<a>` element.
 * @param className - Additional class names merged with the component's default link styles.
 * @param props - Other props forwarded to the rendered element.
 * @returns A JSX element representing the breadcrumb link (an `<a>` by default or the provided child component when `asChild` is true).
 */
function BreadcrumbLink({
  asChild,
  className,
  ...props
}: React.ComponentProps<"a"> & {
  asChild?: boolean
}) {
  const Comp = asChild ? Slot : "a"

  return (
    <Comp
      data-slot="breadcrumb-link"
      className={cn("hover:text-foreground transition-colors", className)}
      {...props}
    />
  )
}

/**
 * Renders a breadcrumb page item representing the current page in the trail.
 *
 * @returns A `<span>` element with `role="link"`, `aria-disabled="true"`, `aria-current="page"`, and `data-slot="breadcrumb-page"`.
 */
function BreadcrumbPage({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="breadcrumb-page"
      role="link"
      aria-disabled="true"
      aria-current="page"
      className={cn("text-foreground font-normal", className)}
      {...props}
    />
  )
}

/**
 * Renders a breadcrumb separator list item with a default chevron icon.
 *
 * The element includes `data-slot="breadcrumb-separator"`, `role="presentation"`, and `aria-hidden="true"`.
 *
 * @param children - Content to render inside the separator; if omitted, a `ChevronRight` icon is rendered
 * @returns A `<li>` element used as a separator containing `children` or the default `ChevronRight` icon
 */
function BreadcrumbSeparator({
  children,
  className,
  ...props
}: React.ComponentProps<"li">) {
  return (
    <li
      data-slot="breadcrumb-separator"
      role="presentation"
      aria-hidden="true"
      className={cn("[&>svg]:size-3.5", className)}
      {...props}
    >
      {children ?? <ChevronRight />}
    </li>
  )
}

/**
 * Renders a decorative, non-interactive ellipsis used to indicate truncated breadcrumb items.
 *
 * @returns A `span` element with `data-slot="breadcrumb-ellipsis"` that represents the ellipsis for breadcrumb overflow.
 */
function BreadcrumbEllipsis({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="breadcrumb-ellipsis"
      role="presentation"
      aria-hidden="true"
      className={cn("flex size-9 items-center justify-center", className)}
      {...props}
    >
      <MoreHorizontal className="size-4" />
      <span className="sr-only">More</span>
    </span>
  )
}

export {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
}