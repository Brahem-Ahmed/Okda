"use client"

import * as React from "react"

import { cn } from "@/lib/utils"

/**
 * Render a responsive HTML table wrapped in a horizontally scrollable container.
 *
 * @param className - Additional CSS classes to append to the table's default classes
 * @param props - Remaining props are spread onto the underlying `<table>` element
 * @returns A table element contained within a responsive, horizontally scrollable wrapper
 */
function Table({ className, ...props }: React.ComponentProps<"table">) {
  return (
    <div
      data-slot="table-container"
      className="relative w-full overflow-x-auto"
    >
      <table
        data-slot="table"
        className={cn("w-full caption-bottom text-sm", className)}
        {...props}
      />
    </div>
  )
}

/**
 * Renders a table header (<thead>) element with consistent styling hooks.
 *
 * The element receives a data-slot="table-header" attribute and merges any provided `className`.
 *
 * @returns The rendered `<thead>` element for use as the table header.
 */
function TableHeader({ className, ...props }: React.ComponentProps<"thead">) {
  return (
    <thead
      data-slot="table-header"
      className={cn("[&_tr]:border-b", className)}
      {...props}
    />
  )
}

/**
 * Renders a tbody element used as the table body with consistent styling and a data-slot hook.
 *
 * @returns The rendered `<tbody>` element with composed className and any forwarded props
 */
function TableBody({ className, ...props }: React.ComponentProps<"tbody">) {
  return (
    <tbody
      data-slot="table-body"
      className={cn("[&_tr:last-child]:border-0", className)}
      {...props}
    />
  )
}

/**
 * Renders a styled table footer (<tfoot>) element.
 *
 * The element includes a data-slot of "table-footer" and default footer styling
 * (muted background, top border, and medium font weight). Any provided props
 * and `className` are applied to the underlying `<tfoot>` element.
 *
 * @returns The rendered `<tfoot>` element with preset footer styling and any supplied props applied.
 */
function TableFooter({ className, ...props }: React.ComponentProps<"tfoot">) {
  return (
    <tfoot
      data-slot="table-footer"
      className={cn(
        "bg-muted/50 border-t font-medium [&>tr]:last:border-b-0",
        className
      )}
      {...props}
    />
  )
}

/**
 * Renders a table row (<tr>) with default row styles and a data-slot attribute for styling/hooks.
 *
 * @param className - Additional CSS class names to merge with the component's default classes
 * @param props - Additional props forwarded to the underlying `<tr>` element
 * @returns The rendered `<tr>` element with merged classes and `data-slot="table-row"`
 */
function TableRow({ className, ...props }: React.ComponentProps<"tr">) {
  return (
    <tr
      data-slot="table-row"
      className={cn(
        "hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors",
        className
      )}
      {...props}
    />
  )
}

/**
 * Renders a styled table header cell with standardized layout, spacing, and checkbox-aware alignment.
 *
 * @returns A `<th>` element with a `data-slot="table-head"` attribute and composed class names for header typography, spacing, alignment, and special handling when it contains a checkbox.
 */
function TableHead({ className, ...props }: React.ComponentProps<"th">) {
  return (
    <th
      data-slot="table-head"
      className={cn(
        "text-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
        className
      )}
      {...props}
    />
  )
}

/**
 * Renders a styled table body cell (`<td>`).
 *
 * @returns A `<td>` element with data-slot="table-cell" and merged class names for padding, alignment, whitespace, and optional checkbox-related adjustments.
 */
function TableCell({ className, ...props }: React.ComponentProps<"td">) {
  return (
    <td
      data-slot="table-cell"
      className={cn(
        "p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
        className
      )}
      {...props}
    />
  )
}

/**
 * Renders a table caption element with standardized muted styling and spacing.
 *
 * @returns A <caption> element with muted foreground color, top margin, and small text size; accepts and forwards standard caption props and an optional `className`.
 */
function TableCaption({
  className,
  ...props
}: React.ComponentProps<"caption">) {
  return (
    <caption
      data-slot="table-caption"
      className={cn("text-muted-foreground mt-4 text-sm", className)}
      {...props}
    />
  )
}

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
}