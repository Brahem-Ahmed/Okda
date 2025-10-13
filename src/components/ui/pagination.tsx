import * as React from "react"
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  MoreHorizontalIcon,
} from "lucide-react"

import { cn } from "@/lib/utils"
import { Button, buttonVariants } from "@/components/ui/button"

/**
 * Renders the pagination navigation container.
 *
 * @returns A `nav` element labeled for pagination (role="navigation", aria-label="pagination") with a data-slot of "pagination" that centers its children.
 */
function Pagination({ className, ...props }: React.ComponentProps<"nav">) {
  return (
    <nav
      role="navigation"
      aria-label="pagination"
      data-slot="pagination"
      className={cn("mx-auto flex w-full justify-center", className)}
      {...props}
    />
  )
}

/**
 * Renders a UL container for pagination items with default layout and slot attributes.
 *
 * @param className - Additional classes to append to the default flex layout
 * @returns The rendered `ul` element used as the pagination content container
 */
function PaginationContent({
  className,
  ...props
}: React.ComponentProps<"ul">) {
  return (
    <ul
      data-slot="pagination-content"
      className={cn("flex flex-row items-center gap-1", className)}
      {...props}
    />
  )
}

/**
 * Renders a list-item wrapper used to contain a single pagination control.
 *
 * @param props - Props forwarded to the underlying `li` element; they are spread onto the element.
 * @returns The rendered `li` element with `data-slot="pagination-item"`.
 */
function PaginationItem({ ...props }: React.ComponentProps<"li">) {
  return <li data-slot="pagination-item" {...props} />
}

type PaginationLinkProps = {
  isActive?: boolean
} & Pick<React.ComponentProps<typeof Button>, "size"> &
  React.ComponentProps<"a">

/**
 * Renders a pagination link styled like a button and with an optional active state.
 *
 * The component outputs an anchor element with appropriate ARIA and data attributes,
 * styles derived from the button variant system, and any additional anchor props.
 *
 * @param className - Additional CSS class names to apply to the anchor
 * @param isActive - `true` if this link represents the current page, `false` otherwise
 * @param size - Visual size variant passed to the underlying button styles
 * @param props - Additional standard anchor attributes to spread onto the element
 * @returns The anchor element for a pagination control
 */
function PaginationLink({
  className,
  isActive,
  size = "icon",
  ...props
}: PaginationLinkProps) {
  return (
    <a
      aria-current={isActive ? "page" : undefined}
      data-slot="pagination-link"
      data-active={isActive}
      className={cn(
        buttonVariants({
          variant: isActive ? "outline" : "ghost",
          size,
        }),
        className
      )}
      {...props}
    />
  )
}

/**
 * A pre-styled "previous page" pagination link with icon and responsive label.
 *
 * Renders a PaginationLink labeled for navigating to the previous page, containing a left chevron icon and the text "Previous" (visible on small screens and up).
 *
 * @returns A pagination link element with ARIA label "Go to previous page" and default sizing.
 */
function PaginationPrevious({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) {
  return (
    <PaginationLink
      aria-label="Go to previous page"
      size="default"
      className={cn("gap-1 px-2.5 sm:pl-2.5", className)}
      {...props}
    >
      <ChevronLeftIcon />
      <span className="hidden sm:block">Previous</span>
    </PaginationLink>
  )
}

/**
 * Renders a pre-styled "Next" pagination link with a right chevron and responsive label.
 *
 * The component forwards all received props to PaginationLink, sets an accessible
 * `aria-label` of "Go to next page", uses the `"default"` size, and augments the
 * className to include spacing and responsive visibility for the "Next" text.
 *
 * @param props - Props forwarded to the underlying PaginationLink component (including `className`)
 * @returns The rendered pagination link element for advancing to the next page
 */
function PaginationNext({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) {
  return (
    <PaginationLink
      aria-label="Go to next page"
      size="default"
      className={cn("gap-1 px-2.5 sm:pr-2.5", className)}
      {...props}
    >
      <span className="hidden sm:block">Next</span>
      <ChevronRightIcon />
    </PaginationLink>
  )
}

/**
 * Renders a non-interactive ellipsis indicator for truncated pagination sets.
 *
 * The element contains a horizontal ellipsis icon and a visually hidden "More pages" label
 * for screen reader users. It accepts standard span props and applies `data-slot="pagination-ellipsis"`.
 *
 * @returns A span element used as an ellipsis indicator in pagination containing an icon and a screen-reader-only label.
 */
function PaginationEllipsis({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      aria-hidden
      data-slot="pagination-ellipsis"
      className={cn("flex size-9 items-center justify-center", className)}
      {...props}
    >
      <MoreHorizontalIcon className="size-4" />
      <span className="sr-only">More pages</span>
    </span>
  )
}

export {
  Pagination,
  PaginationContent,
  PaginationLink,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
}