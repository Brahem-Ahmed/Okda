"use client"

import * as React from "react"
import * as AvatarPrimitive from "@radix-ui/react-avatar"

import { cn } from "@/lib/utils"

/**
 * Render an Avatar root element that wraps Radix Avatar primitives with consistent styling and a data-slot attribute.
 *
 * @param className - Additional CSS classes to merge with the component's default avatar classes
 * @returns The AvatarPrimitive.Root element with a composed `className` and `data-slot="avatar"`
 */
function Avatar({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Root>) {
  return (
    <AvatarPrimitive.Root
      data-slot="avatar"
      className={cn(
        "relative flex size-8 shrink-0 overflow-hidden rounded-full",
        className
      )}
      {...props}
    />
  )
}

/**
 * Renders an avatar image element with consistent styling and a `data-slot` attribute.
 *
 * @param className - Additional CSS classes to merge with the component's default styles
 * @returns The avatar image element with merged `className` and all props forwarded
 */
function AvatarImage({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Image>) {
  return (
    <AvatarPrimitive.Image
      data-slot="avatar-image"
      className={cn("aspect-square size-full", className)}
      {...props}
    />
  )
}

/**
 * Renders a styled fallback element for an avatar used when the image is unavailable.
 *
 * @returns A React element that provides the avatar fallback container with default styling and any forwarded props
 */
function AvatarFallback({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Fallback>) {
  return (
    <AvatarPrimitive.Fallback
      data-slot="avatar-fallback"
      className={cn(
        "bg-muted flex size-full items-center justify-center rounded-full",
        className
      )}
      {...props}
    />
  )
}

export { Avatar, AvatarImage, AvatarFallback }