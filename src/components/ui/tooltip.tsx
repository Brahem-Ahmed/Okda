"use client"

import * as React from "react"
import * as TooltipPrimitive from "@radix-ui/react-tooltip"

import { cn } from "@/lib/utils"

/**
 * Provides a Tooltip context by rendering a Radix `TooltipPrimitive.Provider` with a default `delayDuration` of 0.
 *
 * @param delayDuration - Milliseconds to wait before showing the tooltip; defaults to 0
 * @param props - All other props are forwarded to `TooltipPrimitive.Provider`
 * @returns The configured `TooltipPrimitive.Provider` React element
 */
function TooltipProvider({
  delayDuration = 0,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Provider>) {
  return (
    <TooltipPrimitive.Provider
      data-slot="tooltip-provider"
      delayDuration={delayDuration}
      {...props}
    />
  )
}

/**
 * Renders a TooltipPrimitive.Root wrapped in a TooltipProvider.
 *
 * Forwards all received props to the underlying TooltipPrimitive.Root and ensures the root is rendered with provider context. The rendered root includes `data-slot="tooltip"`.
 *
 * @returns The tooltip root element wrapped by a TooltipProvider
 */
function Tooltip({
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Root>) {
  return (
    <TooltipProvider>
      <TooltipPrimitive.Root data-slot="tooltip" {...props} />
    </TooltipProvider>
  )
}

/**
 * Renders a tooltip trigger that forwards all props to Radix UI's Tooltip Trigger and sets a data-slot attribute for identification.
 *
 * @returns The rendered Tooltip Trigger element with all provided props applied.
 */
function TooltipTrigger({
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Trigger>) {
  return <TooltipPrimitive.Trigger data-slot="tooltip-trigger" {...props} />
}

/**
 * Renders tooltip content inside a portal with composed styling and an arrow.
 *
 * @param className - Additional CSS class names to merge with the component's default styles
 * @param sideOffset - Distance in pixels to offset the content from the trigger (default: 0)
 * @param children - Elements to be rendered inside the tooltip content
 * @returns The tooltip content element rendered inside a portal
 */
function TooltipContent({
  className,
  sideOffset = 0,
  children,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Content>) {
  return (
    <TooltipPrimitive.Portal>
      <TooltipPrimitive.Content
        data-slot="tooltip-content"
        sideOffset={sideOffset}
        className={cn(
          "bg-foreground text-background animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit origin-(--radix-tooltip-content-transform-origin) rounded-md px-3 py-1.5 text-xs text-balance",
          className
        )}
        {...props}
      >
        {children}
        <TooltipPrimitive.Arrow className="bg-foreground fill-foreground z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]" />
      </TooltipPrimitive.Content>
    </TooltipPrimitive.Portal>
  )
}

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider }