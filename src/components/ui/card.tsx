import * as React from "react"

import { cn } from "@/lib/utils"

/**
 * Root container for a card UI.
 *
 * Renders an element with `data-slot="card"`, applies the component's default styling merged with any provided `className`, and forwards all other props to the underlying element.
 *
 * @param className - Additional CSS classes to merge with the component's default classes
 * @returns The card container element
 */
function Card({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card"
      className={cn(
        "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",
        className
      )}
      {...props}
    />
  )
}

/**
 * Header region for a Card that lays out title and optional action content.
 *
 * @returns A `div` element with `data-slot="card-header"` containing header layout classes and any provided props
 */
function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
        className
      )}
      {...props}
    />
  )
}

/**
 * Renders the card title element with title typography and the `data-slot="card-title"` attribute.
 *
 * @returns A `div` element with title typography classes (`leading-none font-semibold`), merged `className`, and all provided props forwarded.
 */
function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-title"
      className={cn("leading-none font-semibold", className)}
      {...props}
    />
  )
}

/**
 * Renders the card's description slot with muted, small text styling.
 *
 * @returns The description container element with `data-slot="card-description"`.
 */
function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  )
}

/**
 * Renders the card's action area, positioned to align actions in the header.
 *
 * @returns A div element serving as the card action slot with any provided props and className applied.
 */
function CardAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-action"
      className={cn(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        className
      )}
      {...props}
    />
  )
}

/**
 * Renders the card's main content container.
 *
 * @returns A div element with `data-slot="card-content"`, merged horizontal padding classes, and all passed props spread onto it.
 */
function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-content"
      className={cn("px-6", className)}
      {...props}
    />
  )
}

/**
 * Footer area for a Card that aligns content and applies horizontal padding and top spacing.
 *
 * @param className - Additional CSS classes to merge with the footer's base classes
 * @returns A div element representing the card footer
 */
function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn("flex items-center px-6 [.border-t]:pt-6", className)}
      {...props}
    />
  )
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
}