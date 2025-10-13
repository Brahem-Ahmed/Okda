"use client"

import * as React from "react"
import * as HoverCardPrimitive from "@radix-ui/react-hover-card"

import { cn } from "@/lib/utils"

/**
 * Wraps the Radix HoverCard Root and attaches a `data-slot="hover-card"` attribute while forwarding all props.
 *
 * @returns A Radix HoverCard Root element with `data-slot="hover-card"` and the provided props applied.
 */
function HoverCard({
  ...props
}: React.ComponentProps<typeof HoverCardPrimitive.Root>) {
  return <HoverCardPrimitive.Root data-slot="hover-card" {...props} />
}

/**
 * Renders a Hover Card trigger element and forwards all received props to the underlying Radix HoverCard Trigger.
 *
 * Adds a `data-slot="hover-card-trigger"` attribute to the rendered element.
 *
 * @param props - Props to pass through to the underlying trigger element
 * @returns The rendered Hover Card trigger element
 */
function HoverCardTrigger({
  ...props
}: React.ComponentProps<typeof HoverCardPrimitive.Trigger>) {
  return (
    <HoverCardPrimitive.Trigger data-slot="hover-card-trigger" {...props} />
  )
}

/**
 * Renders the hover card content inside a Radix Portal with sensible defaults and styling.
 *
 * The content is wrapped in a portal and receives a default alignment of "center" and a
 * default side offset of 4. Custom `className` is merged with the component's built-in
 * styling and animation classes; any additional props are forwarded to the Radix Content.
 *
 * @param align - Alignment of the content relative to the trigger; defaults to `"center"`.
 * @param sideOffset - Distance in pixels between trigger and content; defaults to `4`.
 * @returns The rendered hover card content element.
 */
function HoverCardContent({
  className,
  align = "center",
  sideOffset = 4,
  ...props
}: React.ComponentProps<typeof HoverCardPrimitive.Content>) {
  return (
    <HoverCardPrimitive.Portal data-slot="hover-card-portal">
      <HoverCardPrimitive.Content
        data-slot="hover-card-content"
        align={align}
        sideOffset={sideOffset}
        className={cn(
          "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-64 origin-(--radix-hover-card-content-transform-origin) rounded-md border p-4 shadow-md outline-hidden",
          className
        )}
        {...props}
      />
    </HoverCardPrimitive.Portal>
  )
}

export { HoverCard, HoverCardTrigger, HoverCardContent }